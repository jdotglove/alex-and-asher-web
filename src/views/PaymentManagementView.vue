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
  computed: {
    // Retrieve query parameters from the $route object
    updateAuthToken() {
      return this.$route.params.updateAuthToken || "";
    },
  },
  async mounted() {
    this.createRandomShapes(); // Create random shapes on mount
    await this.verifyRequestAuthToken();
  },
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
      shapeColors: ['#A87FB9', '#5FBBFF', '#ADD58D'], // Color palette for shapes
    }
  },
  methods: {
    async verifyRequestAuthToken() {
      console.log(this.updateAuthToken)
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_API_BASE_URL}/payment-update/${this.updateAuthToken}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            authorization: import.meta.env.VITE_SERVER_API_KEY || ''
          }
        }
      )
    },
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
}
</script>

<style scoped>
/* Page Header Styling */
.page-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.page-header h1 {
  font-size: 2rem;
  color: var(--color-primary);
}

.page-header p {
  font-size: 1.1rem;
  color: var(--text-light);
  margin-top: 0.5rem;
}

/* Geometric Background Accents */
.customers-list-page::before,
.customers-list-page::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
  pointer-events: none;
}

.customers-list-page::before {
  width: 180px;
  height: 180px;
  background-color: var(--color-secondary);
  top: -40px;
  left: -40px;
}

.customers-list-page::after {
  width: 160px;
  height: 160px;
  background-color: var(--color-accent);
  bottom: -40px;
  right: -40px;
}

/* Customers Table Container */
.customers-table-container {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  overflow-x: auto;
  background-color: var(--table-bg);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  position: relative;
}

/* Customers Table Styling */
.customers-table {
  width: 100%;
  border-collapse: collapse;
}

.customers-table thead {
  background-color: var(--color-primary);
}

.customers-table th,
.customers-table td {
  padding: 1rem;
  text-align: left;
  color: var(--text-light);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.customers-table th {
  font-size: 1rem;
  text-transform: uppercase;
}

.customers-table tbody tr {
  background-color: var(--table-bg);
}

.customers-table tbody tr:nth-child(even) {
  background-color: #44475a;
}

.customers-table tbody tr:hover {
  background-color: #5a5e6f;
  transition: background-color 0.3s;
}

/* Action Button Styling */
.actions {
  display: flex;
  gap: 0.5rem;
}

.action-btn {
  padding: 0.5rem 0.8rem;
  font-size: 0.9rem;
  font-weight: bold;
  color: #fff;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  text-transform: uppercase;
  transition:
    background-color 0.3s,
    transform 0.2s;
}

.view-btn {
  background-color: var(--color-secondary);
}

.view-btn:hover {
  background-color: #3d8fd1;
}

.edit-btn {
  background-color: var(--color-primary);
}

.edit-btn:hover {
  background-color: #944ba3;
}

.delete-btn {
  background-color: #ff6666;
}

.delete-btn:hover {
  background-color: #e65555;
  transform: scale(1.05);
}

/* Header Styling */
.header {
  text-align: center;
  margin-bottom: 2.5rem;
  z-index: 1;
}

.header h1 {
  font-size: 2rem;
  color: var(--color-primary);
}

.header p {
  font-size: 1.1rem;
  color: var(--color-text-light);
}

/* Main Form Styling */
.main-content {
  display: grid;
  justify-content: center;
  padding: 0 1.5rem;
  width: 100%;
}

/* Form Title */
.form-title {
  font-size: 2.2rem;
  color: var(--color-secondary);
  margin-bottom: 2rem;
  text-align: center;
  font-weight: bold;
}

/* Form Group Styling */
.form-group {
  margin-bottom: var(--spacing);
}

.half-width {
  display: inline-block;
  width: 48%;
}

.half-width:nth-child(odd) {
  margin-right: 4%;
}

.form-label {
  display: block;
  font-size: 1rem;
  color: var(--color-accent);
  margin-bottom: 0.5rem;
  font-weight: bold;
  text-transform: uppercase;
}

/* Input Fields */
.form-input {
  width: 100%;
  padding: 1rem;
  font-size: 1.2rem;
  color: var(--color-text-light);
  background-color: #44475a;
  border: 2px solid var(--color-secondary);
  border-radius: var(--border-radius);
  transition:
    border-color 0.3s,
    box-shadow 0.3s;
}

.form-input::placeholder {
  color: #999;
}

.form-input:focus {
  border-color: var(--focus-color);
  box-shadow: 0 0 8px var(--focus-color);
  outline: none;
}

/* Submit Button */
.submit-btn {
  width: 100%;
  padding: 1rem;
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--color-text-light);
  background-color: var(--color-primary);
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition:
    background-color 0.3s,
    transform 0.2s;
  text-transform: uppercase;
}

.submit-btn:hover {
  background-color: var(--color-secondary);
  transform: translateY(-2px);
}

.submit-btn:focus {
  outline: 3px solid var(--focus-color);
}

/* Footer Styling */
.footer {
  text-align: center;
  margin-top: 3rem;
  font-size: 0.9rem;
  color: #999;
  z-index: 1;
}

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
