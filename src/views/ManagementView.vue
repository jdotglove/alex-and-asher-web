<script setup lang="ts">
import ViewUpdateRequestLinkModal from '@/components/modals/ViewUpdateRequestLinkModal.vue'

</script>

<template>
  <div class="customer-list-container">
    <h2 class="form-title">Customer List</h2>
    <div class="table-container">
      <table v-if="customers.length" class="customers-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="customer in customers" :key="customer.id">
            <td>{{ customer.name || 'N/A' }}</td>
            <td>{{ customer.email }}</td>
            <td>
              <button @click="generateUniqueUrl(customer)" class="action-btn generate-url-btn">
                Generate Update URL
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <p v-else>Loading customers...</p>
    </div>
    <!-- Modal Component -->
    <ViewUpdateRequestLinkModal
      v-if="showViewUpdateRequestModal"
      :isVisible="showViewUpdateRequestModal"
      @close="showViewUpdateRequestModal = false"
      title="Customer Details"
    >
      <div>
        <p>
          <strong>Update URL:</strong>
          {{ currentUpdateRequest && currentUpdateRequest.updateAuthToken }}
        </p>
      </div>
    </ViewUpdateRequestLinkModal>
  </div>
</template>

<script lang="ts">
export default {
  data(): {
    customers: Array<AlexAndAsher.StripeCustomer>
    currentUpdateRequest: AlexAndAsher.PaymentUpdateRequest | null
    shapeColors: Array<string>
    showViewUpdateRequestModal: boolean
  } {
    return {
      customers: [], // Customer list will be populated here
      showViewUpdateRequestModal: false,
      currentUpdateRequest: null,
      shapeColors: ['#A87FB9', '#5FBBFF', '#ADD58D'] // Color palette for shapes
    }
  },
  methods: {
    async fetchCustomers() {
      // Simulate fetching customer data
      try {
        // Fetch customers from the backend
        const response = await fetch(
          `${import.meta.env.VITE_SERVER_API_BASE_URL}/management/customers`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              authorization: import.meta.env.VITE_SERVER_API_KEY || ''
            }
          }
        )
        const data = await response.json()

        this.customers = data.customers as Array<AlexAndAsher.StripeCustomer>
        console.log(this.customers)
        // this.customers = response.data;
      } catch (error: unknown) {
        console.error('Error fetching customers:', error)
      }
    },
    async generateUniqueUrl(customer: AlexAndAsher.StripeCustomer) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_SERVER_API_BASE_URL}/management/update-payment-request`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              authorization: import.meta.env.VITE_SERVER_API_KEY || ''
            },
            body: JSON.stringify({
              stripeId: customer.id,
              email: customer.email,
              name: customer.name
            })
          }
        )
        const data = await response.json()
        this.showViewUpdateRequestModal = true
        this.currentUpdateRequest = data.paymentUpdateRequest
      } catch (error: unknown) {
        console.error('Error generating unique url')
      }
    },
    createRandomShapes() {
      const container = document.querySelector('.customer-list-container')
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
  async mounted() {
    this.fetchCustomers() // Load customer data on component mount
    this.createRandomShapes() // Create random shapes on mount
  }
}
</script>

<style scoped>
/* Root Variables */
:root {
  --color-primary: #a87fb9;
  /* Soft purple */
  --color-secondary: #5fbbff;
  /* Bright blue */
  --color-accent: #add58d;
  /* Soft green */
  --bg-color: #1e1e2f;
  /* Dark base background */
  --text-color-light: #ffffff;
  /* Light text color */
  --border-radius: 8px;
}

/* Customer List Container */
.customer-list-container {
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: var(--bg-color);
  color: var(--text-color-light);
  border-radius: var(--border-radius);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  position: relative;
  overflow: hidden;
}

/* Title Styling */
.form-title {
  font-size: 2rem;
  color: var(--color-secondary);
  text-align: center;
  margin-bottom: 2rem;
}

/* Table Container */
.table-container {
  overflow-x: auto;
}

/* Customers Table Styling */
.customers-table {
  width: 100%;
  border-collapse: collapse;
  background-color: #333545;
  border-radius: var(--border-radius);
}

.customers-table thead {
  background-color: var(--color-primary);
}

.customers-table th,
.customers-table td {
  padding: 1rem;
  color: var(--text-color-light);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  text-align: left;
}

.customers-table th {
  font-size: 1rem;
  text-transform: uppercase;
}

.customers-table tbody tr {
  background-color: #333545;
}

.customers-table tbody tr:nth-child(even) {
  background-color: #44475a;
}

.customers-table tbody tr:hover {
  background-color: #5a5e6f;
  transition: background-color 0.3s;
}

/* Action Button Styling */
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

.generate-url-btn {
  background-color: var(--color-primary);
}

.generate-url-btn:hover {
  background-color: var(--color-secondary);
  transform: translateY(-2px);
}
</style>
