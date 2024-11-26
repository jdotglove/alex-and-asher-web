<template>
  <section class="form-section">
    <form v-on:submit="submitPaymentInformation" class="payment-form" aria-labelledby="payment-form-title">

      <!-- Radio Buttons -->
      <div class="radio-container">
        <div class="radio-options">
          <label>
            Use Card
            <input @change="handleOptionChange" type="radio" value="card" v-model="updateOption" />
          </label>
          <label>
            Use Bank Account
            <input @change="handleOptionChange" type="radio" value="bank-account" v-model="updateOption" />
          </label>
        </div>
      </div>

      <section v-if="updateOption === 'card'">
        <!-- Stripe CardElement -->
        <div id="card-element" class="p-5 m-5 border-2"></div>
        <!-- <article class="input-group">
          <label for="name" class="form-label">Cardholder Name</label>
          <input v-model="cardDetails.cardHolderName" type="text" id="name" class="form-input" placeholder="Jane Doe"
            required />
          <p v-if="nameError" class="error-message">{{ nameError }}</p>
        </article>

        <article class="input-group">
          <label for="card-number" class="form-label">Card Number</label>
          <input v-model="cardDetails.cardNumber" type="text" id="card-number" class="form-input"
            placeholder="1234 5678 9012 3456" required />
          <p v-if="cardNumberError" class="error-message">{{ cardNumberError }}</p>
        </article>

        <section class="bottom-section">
          <article class="input-group">
            <label for="expiry-date" class="form-label">Expiry Date</label>
            <input v-model="cardDetails.expiryDate" type="text" id="expiry-date" class="form-input" placeholder="MM/YY"
              required />
            <p v-if="expiryDateError" class="error-message">{{ expiryDateError }}</p>
          </article>

          <article class="input-group">
            <label for="cvv" class="form-label">CVV</label>
            <input v-model="cardDetails.cvv" type="text" id="cvv" class="form-input" placeholder="123" required />
            <p v-if="cvvError" class="error-message">{{ cvvError }}</p>
          </article>
        </section> -->
      </section>
      <section v-else>
        <article class="input-group">
          <label for="account-number" class="form-label">Account Number</label>
          <input name="account-number" v-model="accountDetails.accountNumber" type="text" id="account-number"
            class="form-input" placeholder="123456789012" required />
          <!-- <p v-if="accountNumberError" class="error-message">{{ accountNumberError }}</p> -->
        </article>

        <article class="input-group">
          <label for="confirm-account-number" class="form-label">Confirm Account Number</label>
          <input name="confirm-account-number" v-model="accountDetails.accountNumberConfirmation" type="text"
            id="confirm-account-number" class="form-input" placeholder="123456789012" required />
          <!-- <p v-if="accountNumberConfirmationError" class="error-message">{{ accountNumberConfirmationError }}</p> -->
        </article>

        <article class="input-group">
          <label for="routing-number" class="form-label">Routing Number</label>
          <input name="routing-number" v-model="accountDetails.routingNumber" type="text" id="routing-number"
            class="form-input" placeholder="123456789012" required />
          <!-- <p v-if="routingNumberConfirmationError" class="error-message">{{ routingNumberConfirmationError }}</p> -->
        </article>
      </section>
      <button type="submit" class="submit-btn">Update Payment</button>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted, ref } from "vue";
import { loadStripe } from "@stripe/stripe-js";

export default defineComponent({
  name: "PaymentMethodForm",
  setup() {
    const stripePromise = inject<Promise<any | null>>("stripePromise");
    const stripe = ref<any | null>(null);
    const elements = ref<any | null>(null);

    const paymentDetails = ref<any | null>(null);

    const updateOption = ref<string>("card");

    const email = ref<string>("");
    const isProcessing = ref<boolean>(false);
    const message = ref<string>("");

    const errors = ref<Record<string, string>>({});

    const cardDetails = ref<Record<string, string>>({
      cardHolderName: '',
      cardNumber: '',
      expiryDate: '',
      cvv: ''
    });

    const accountDetails = ref<Record<string, string>>({
      accountNumber: '',
      accountNumberConfirmation: '',
      routingNumber: '',
    });

    const moundCardElement = async () => {
      stripe.value = await stripePromise!;
      elements.value = stripe.value?.elements() || null;

      if (elements.value) {
        // Create and mount the CardElement
        const cardElement = elements.value.create("card");
        cardElement.mount("#card-element");
      }
    }

    onMounted(async () => {
      await moundCardElement();
    });

    const submitPaymentInformation = async (e: any) => {
      e.preventDefault();

      const validationErrors = validate();
      if (Object.keys(validationErrors).length > 0) {
        errors.value = validationErrors;
        return;
      }
      console.log("Details", paymentDetails)
      if (updateOption.value === 'card') {
        console.log('Payment details:', cardDetails.value);
        const { error, paymentMethod } = await stripe.value.createPaymentMethod({
          type: "card",
          card: elements.value.getElement("card") as any,
          billing_details: {
            email: email.value,
          },
        });
        console.log("Method", paymentMethod)
      } else if (updateOption.value === 'account') {
        console.log('Payment details:', accountDetails.value);
        const { error, paymentMethod } = await stripe.value.createPaymentMethod({
          type: "us_bank_account",
          card: elements.value.getElement("bankAccount") as any,
          billing_details: {
            email: email.value,
          },
        });
        console.log("Method", paymentMethod)
      }
    };
    const validate = () => {
      const newErrors: Record<string, string> = {};

      if (updateOption.value === 'card') {
        if (!cardDetails.value.cardHolderName || cardDetails.value.cardHolderName.length < 3) {
          newErrors.name = 'Name must be at least 3 characters long';
        }

        if (!cardDetails.value.cvv || cardDetails.value.cvv.length < 3 || cardDetails.value.cvv.length > 4) {
          newErrors.cvv = 'CVV must be present and valid';
        }

        if (!cardDetails.value.expiryDate || !/(?:^|[^\/\d])\K(?:0?[1-9]|1[0-2])\/\d{4}\b/.test(cardDetails.value.expiryDate)) {
          newErrors.expiryDate = 'Expiry date must be present and valid';
        }

        if (!cardDetails.value.cardNumber || cardDetails.value.cardNumber.length <= 13) {
          newErrors.cardNumber = 'Card number must be present and valid';
        }
      } else if (updateOption.value === 'account') {
        if (!accountDetails.value.accountNumber || accountDetails.value.accountNumber.length < 3) {
          newErrors.accountNumber = 'Name must be at least 3 characters long';
        }

        if (!cardDetails.value.cvv || cardDetails.value.cvv.length < 3 || cardDetails.value.cvv.length > 4) {
          newErrors.accountNumberConfirmation = 'CVV must be present and valid';
        }

        if (!cardDetails.value.expiryDate || !/(?:^|[^\/\d])\K(?:0?[1-9]|1[0-2])\/\d{4}\b/.test(cardDetails.value.expiryDate)) {
          newErrors.expiryDate = 'Expiry date must be present and valid';
        }

        if (!cardDetails.value.cardNumber || cardDetails.value.cardNumber.length <= 13) {
          newErrors.cardNumber = 'Card number must be present and valid';
        }
      }

      return newErrors;
    }

    const handleOptionChange = async () => {
      if (updateOption.value === 'card') {
        await moundCardElement()
      }
    }

    return {
      paymentDetails,
      stripe: null,
      elements: null,
      updateOption,
      cardDetails,
      accountDetails,
      paymentSuccess: false,
      errors: {},
      email,
      isProcessing,
      message,
      handleOptionChange,
      submitPaymentInformation,
      validate,
    };
  }
});
</script>

<style scoped>
.form-section {
  width: 50dvw;
  padding: 3rem;
  border-radius: var(--border-radius);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.payment-form {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.input-group {
  margin-bottom: 15px;
}

.bottom-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

label {
  display: block;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #5fbbff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #28a2ff;
}

.success-message {
  margin-top: 20px;
  color: #28a745;
  font-weight: bold;
}


/* Radio Button Styling */
.radio-container {
  margin-bottom: 15px;
}

.radio-options {
  display: flex;
  gap: 25px;
  align-items: center;
}

.radio-options label {
  display: grid;
  align-items: center;
  gap: 5px;
}
</style>
