// components/StatsSection.vue
<template>
  <section class="stats-section">
    <div class="stats-grid">
      <!-- Repairs Stat -->
      <div class="stat-card">
        <div class="stat-number">2500+</div>
        <div class="stat-label">Repairs Completed</div>
      </div>

      <!-- Satisfaction Stat -->
      <div class="stat-card">
        <div class="stat-number">99%</div>
        <div class="stat-label">Client Satisfaction</div>
      </div>

      <!-- Support Stat -->
      <div class="stat-card">
        <div class="stat-number">24/7</div>
        <div class="stat-label">Support Available</div>
      </div>

      <!-- Experience Stat -->
      <div class="stat-card">
        <div class="stat-number">15+</div>
        <div class="stat-label">Years Experience</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats-section {
  padding: 4rem 2rem;
  background: linear-gradient(135deg, var(--dark), var(--primary));
  position: relative;
  overflow: hidden;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.stat-card {
  text-align: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  backdrop-filter: blur(5px);
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-number {
  font-family: 'Offbit Bold', sans-serif;
  font-size: 2.5rem;
  color: var(--highlight);
  margin-bottom: 0.5rem;
  animation: countUp 2s ease-out forwards;
}

.stat-label {
  color: var(--neutral);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.9rem;
}

/* Add animated gradient background */
.stats-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    var(--accent) 0%,
    var(--accent) 1px,
    transparent 1px,
    transparent 50px
  );
  opacity: 0.05;
  animation: moveGradient 20s linear infinite;
}

@keyframes countUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes moveGradient {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100px 100px;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .stat-card {
    padding: 1.5rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .stat-label {
    font-size: 0.8rem;
  }
}
</style>
