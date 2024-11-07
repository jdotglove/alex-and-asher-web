<script setup lang="ts">
import PaymentForm from '@/components/forms/PaymentForm.vue'

</script>

<template>
  <header class="header">
    <h1>Update Your Payment Information</h1>
    <p>Please update your payment details to ensure continued service.</p>
  </header>
  <main class="main-content">
    <PaymentForm />
  </main>
  <footer class="footer">
    <p>&copy; 2023 Payment Processing, Inc.</p>
  </footer>
</template>

<script lang="ts">
export default {
  data() {
    return {
      paymentDetails: {
        name: '',
        email: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        amount: null
      },
      paymentSuccess: false,
      shapeColors: ['#A87FB9', '#5FBBFF', '#ADD58D'] // Color palette for shapes
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
    },
    createRandomShapes() {
      const container = document.querySelector('.main-content')
      const shapeCount = 5 // Number of shapes to create

      for (let i = 0; i < shapeCount; i++) {
        const shape = document.createElement('div')
        const size = Math.floor(Math.random() * 100) + 50 // Random size between 50 and 150px
        const color = this.shapeColors[Math.floor(Math.random() * this.shapeColors.length)]
        const positionTop = Math.floor(Math.random() * 100) // Random top position (0% - 100%)
        const positionLeft = Math.floor(Math.random() * 100) // Random left position (0% - 100%)
        const borderRadius = Math.random() > 0.5 ? '50%' : '0' // Randomly choose circle or square

        shape.style.width = `${size}px`
        shape.style.height = `${size}px`
        shape.style.backgroundColor = color
        shape.style.position = 'absolute'
        shape.style.top = `${positionTop}%`
        shape.style.left = `${positionLeft}%`
        shape.style.borderRadius = borderRadius
        shape.style.opacity = '0.1'
        shape.style.pointerEvents = 'none'
        shape.classList.add('random-shape')

        if (container) {
          container.appendChild(shape)
        }
      }
    }
  },
  mounted() {
    this.createRandomShapes() // Create random shapes on mount
  }
}
</script>

<style scoped>
.payment-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #28a745;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #218838;
}

.success-message {
  margin-top: 20px;
  color: #28a745;
  font-weight: bold;
}
</style>
