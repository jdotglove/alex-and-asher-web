<template>
  <section class="form-section">
    <form class="payment-form" aria-labelledby="payment-form-title">
      <div class="form-group">
        <label for="name" class="form-label">Cardholder Name</label>
        <input type="text" id="name" class="form-input" placeholder="Jane Doe" required />
      </div>

      <div class="form-group">
        <label for="card-number" class="form-label">Card Number</label>
        <input
          type="text"
          id="card-number"
          class="form-input"
          placeholder="1234 5678 9012 3456"
          required
        />
      </div>
      <section class="bottom-section">
        <div class="form-group">
          <label for="expiry-date" class="form-label">Expiry Date</label>
          <input type="text" id="expiry-date" class="form-input" placeholder="MM/YY" required />
        </div>

        <div class="form-group">
          <label for="cvv" class="form-label">CVV</label>
          <input type="text" id="cvv" class="form-input" placeholder="123" required />
        </div>
      </section>
      <button type="submit" class="submit-btn">Update Payment</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      paymentDetails: {
        cardNumber: '',
        expiryDate: '',
        cvv: ''
      }
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
.payment-form {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-group {
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

/* The switch - the box around the slider */
.switch {
  display: inline-block;
}

/* Hide default HTML checkbox */
/* .switch input {
  opacity: 0;
  width: 0;
  height: 0;
} */

/* The slider */
/* .slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ADD58D;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 22px;
  width: 24px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked+.slider {
  background-color: #2196F3;
}

input:focus+.slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked+.slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
} */

/* Rounded sliders */
/* .slider.round {
  border-radius: 30px;
}

.slider.round:before {
  border-radius: 50%;
} */
</style>
