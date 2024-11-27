<template>
  <section class="form-section">
    <form v-on:submit="submitPaymentInformation" class="payment-form" aria-labelledby="payment-form-title">

      <!-- Radio Buttons -->
      <!-- <div class="radio-container">
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
      </div> -->

      <section v-if="updateOption === 'card'">
        <!-- Stripe CardElement -->
        <div id="card-element" class="p-5 m-5 border-2"></div>
      </section>
      <button type="submit" class="submit-btn">Update Payment</button>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted, ref } from "vue";

export default defineComponent({
  name: "PaymentMethodForm",
  setup() {
    const stripePromise = inject<Promise<any | null>>("stripePromise");
    const customer = inject<{ value: Omit<AlexAndAsher.Customer, "name" | "createdAt" | "stripeId" | "updatedAt"> }>("customer");

    const stripe = ref<any | null>(null);
    const elements = ref<any | null>(null);
    const paymentDetails = ref<any | null>(null);
    const updateOption = ref<string>("card");
    const isProcessing = ref<boolean>(false);
    const message = ref<string>("");
    const cardDetails = ref<Record<string, string>>({
      cardHolderName: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    });
    const accountDetails = ref<Record<string, string>>({
      accountNumber: "",
      accountNumberConfirmation: "",
      routingNumber: "",
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

      try {
        if (updateOption.value === "card") {
          const { error, paymentMethod } = await stripe.value.createPaymentMethod({
            type: "card",
            card: elements.value.getElement("card") as any,
            billing_details: {
              email: customer?.value?.email,
            },
          });

          if (error) {
            throw new Error(error);
          }

          const response = await fetch(
            `${import.meta.env.VITE_SERVER_API_BASE_URL}/customers/${customer?.value?._id}/update-payment`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                authorization: import.meta.env.VITE_SERVER_API_KEY || "",
              },
              body: JSON.stringify({
                paymentMethodId: paymentMethod.id,
              }),
            }
          );

          console.log(response);
        }
      } catch (error: unknown) {
        throw new Error(`Error updating payment: ${error}`);
      }
    };

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
      isProcessing,
      message,
      handleOptionChange,
      submitPaymentInformation,
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
