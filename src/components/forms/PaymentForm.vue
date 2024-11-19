<template>
  <section class="form-section">
    <form class="payment-form" aria-labelledby="payment-form-title">

      <!-- Radio Buttons -->
      <div class="radio-container">
        <div class="radio-options">
          <label>
            Use Card
            <input type="radio" value="card" v-model="updateOption" />
          </label>
          <label>
            Use Bank Account
            <input type="radio" value="bank-account" v-model="updateOption" />
          </label>
        </div>
      </div>

      <section v-if="updateOption === 'card'">
        <article class="input-group">
          <label for="email" class="form-label">Account Email</label>
          <input type="text" id="email" class="form-input" placeholder="example@email.com" required />
        </article>

        <article class="input-group">
          <label for="name" class="form-label">Cardholder Name</label>
          <input type="text" id="name" class="form-input" placeholder="Jane Doe" required />
        </article>

        <article class="input-group">
          <label for="card-number" class="form-label">Card Number</label>
          <input type="text" id="card-number" class="form-input" placeholder="1234 5678 9012 3456" required />
        </article>

        <section class="bottom-section">
          <article class="input-group">
            <label for="expiry-date" class="form-label">Expiry Date</label>
            <input type="text" id="expiry-date" class="form-input" placeholder="MM/YY" required />
          </article>

          <article class="input-group">
            <label for="cvv" class="form-label">CVV</label>
            <input type="text" id="cvv" class="form-input" placeholder="123" required />
          </article>
        </section>
      </section>
      <section v-else>
        <article class="input-group">
          <label for="email" class="form-label">Account Email</label>
          <input type="text" id="email" class="form-input" placeholder="example@email.com" required />
        </article>

        <article class="input-group">
          <label for="account-number" class="form-label">Account Number</label>
          <input type="text" id="account-number" class="form-input" placeholder="123456789012" required />
        </article>

        <article class="input-group">
          <label for="confirm-account-number" class="form-label">Confirm Account Number</label>
          <input type="text" id="confirm-account-number" class="form-input" placeholder="123456789012" required />
        </article>

        <article class="input-group">
          <label for="routing-number" class="form-label">Routing Number</label>
          <input type="text" id="routing-number" class="form-input" placeholder="123456789012" required />
        </article>
      </section>
      <button type="submit" class="submit-btn">Update Payment</button>
    </form>
  </section>
</template>

<script lang="ts">
export default {
  data(): {
    updateOption: string;
    paymentDetails: {
      cardNumber: string;
      expiryDate: string;
      cvv: string;
    }
    paymentSuccess: boolean;
  } {
    return {
      updateOption: 'card',
      paymentDetails: {
        cardNumber: '',
        expiryDate: '',
        cvv: ''
      },
      paymentSuccess: false,
    }
  },
  methods: {
    submitPayment() {
      // Payment logic goes here. For now, we'll mock the success.
      console.log('Payment details:', this.paymentDetails)
      this.paymentSuccess = true

      // You can replace the above with actual integration code, such as:
      // 1. Validating the card info (with client-side libraries or API calls)
      // 2. Sending the details to a payment processor (Stripe, PayPal, etc.)
    }
  }
}
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
