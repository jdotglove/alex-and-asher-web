// components/ServiceSection.vue
<template>
  <section class="featured-services">
    <div class="section-header">
      <h2>Our Services</h2>
      <p>Professional solutions for modern challenges</p>
    </div>

    <div class="services-grid">
      <!-- Machine Repair Card -->
      <div class="service-card">
        <div class="card-inner">
          <div class="card-front">
            <div class="icon-container">
              <i class="fas fa-wrench"></i>
            </div>
            <h3>Machine Repair</h3>
            <p>Expert diagnostics and repairs</p>
          </div>
          <div class="card-back">
            <ul>
              <li>24/7 Emergency Service</li>
              <li>Preventive Maintenance</li>
              <li>Performance Optimization</li>
            </ul>
            <button class="card-button">Learn More</button>
          </div>
        </div>
      </div>

      <!-- Tech Support Card -->
      <div class="service-card">
        <div class="card-inner">
          <div class="card-front">
            <div class="icon-container">
              <i class="fas fa-laptop-code"></i>
            </div>
            <h3>Tech Support</h3>
            <p>Comprehensive technical assistance</p>
          </div>
          <div class="card-back">
            <ul>
              <li>Remote Troubleshooting</li>
              <li>System Updates</li>
              <li>Security Solutions</li>
            </ul>
            <button class="card-button">Learn More</button>
          </div>
        </div>
      </div>

      <!-- Consulting Card -->
      <div class="service-card">
        <div class="card-inner">
          <div class="card-front">
            <div class="icon-container">
              <i class="fas fa-chart-network"></i>
            </div>
            <h3>Consulting</h3>
            <p>Strategic technical planning</p>
          </div>
          <div class="card-back">
            <ul>
              <li>System Analysis</li>
              <li>Upgrade Planning</li>
              <li>Performance Optimization</li>
            </ul>
            <button class="card-button">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.featured-services {
  padding: 6rem 2rem;
  background: var(--neutral);
  position: relative;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-family: 'Offbit Bold', sans-serif;
  font-size: 2.5rem;
  color: var(--dark);
  margin-bottom: 1rem;
}

.section-header p {
  color: var(--accent);
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.service-card {
  perspective: 1000px;
  height: 400px;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.service-card:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  padding: 2rem;
  border-radius: 12px;
  background: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.card-back {
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.icon-container {
  width: 80px;
  height: 80px;
  background: var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.icon-container i {
  font-size: 2rem;
  color: var(--neutral);
}

.card-front h3 {
  font-family: 'Offbit Bold', sans-serif;
  font-size: 1.8rem;
  color: var(--dark);
  text-align: center;
  margin-bottom: 1rem;
}

.card-front p {
  color: var(--accent);
  text-align: center;
}

.card-back ul {
  list-style: none;
  margin-bottom: 2rem;
}

.card-back li {
  color: var(--dark);
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.card-back li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--highlight);
}

.card-button {
  background: var(--primary);
  color: var(--neutral);
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.card-button:hover {
  background: var(--accent);
}

@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
}

@media (max-width: 768px) {
  .service-card {
    height: 350px;
  }
}
</style>
