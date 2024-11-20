<script setup lang="ts">
import DesktopFooter from '@/components/footers/DesktopFooter.vue';
import PaymentForm from '@/components/forms/PaymentForm.vue'
</script>

<template>
  <main class="main-content">
    <section v-if="verifiedEmailAddress">
      <header class="header">
        <h1>Update Your Payment Information</h1>
        <p>Please update your payment details to ensure continued service.</p>
      </header>
      <PaymentForm />
    </section>
    <section v-else>
      <header class="header">
        <h1>Verify Your Email Address</h1>
        <p>Please enter the email address associated with your Alex and Asher account.</p>
      </header>
      <section class="form-section">
        <form v-on:submit="verifyEmailAddress" class="email-form" aria-labelledby="email-form-title">
          <section>
            <article class="input-group">
              <label for="email" class="form-label">Account Email</label>
              <input v-model="emailAddress" type="text" id="email" class="form-input" placeholder="example@email.com"
                required />
            </article>
          </section>
          <button type="submit" class="submit-btn">Verify Email</button>
        </form>
      </section>
    </section>
  </main>
  <DesktopFooter />
</template>

<script lang="ts">

export default {
  async mounted() {
    this.createRandomShapes(); // Create random shapes on mount
  },
  computed: {
    // Retrieve query parameters from the $route object
    updateAuthToken() {
      return this.$route.params.updateAuthToken || "";
    },
  },
  data(): {
    emailAddress: string;
    verifiedEmailAddress: boolean;
    paymentSuccess: boolean;
    shapeColors: Array<string>;
  } {
    return {
      emailAddress: '',
      verifiedEmailAddress: false,
      paymentSuccess: false,
      shapeColors: ['#A87FB9', '#5FBBFF', '#ADD58D'], // Color palette for shapes
    }
  },
  methods: {
    async verifyEmailAddress(e: any) {
      e.preventDefault();
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_API_BASE_URL}/payment-update?email=${this.emailAddress}&token=${this.updateAuthToken}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            authorization: import.meta.env.VITE_SERVER_API_KEY || ''
          }
        }
      );

      const data = await response.json();
      this.verifiedEmailAddress = data.verified;
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


.email-form {
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
</style>
