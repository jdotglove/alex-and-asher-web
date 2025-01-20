<template>
  <header class="hero">
    <div class="hero-background">
      <div class="grid-overlay"></div>
      <div class="diagonal-lines"></div>
      <div class="dot-pattern"></div>
    </div>
    <div class="hero-content">
      <div class="title-container">
        <h1>
          <span class="title-accent">Next Gen</span>
          <span class="title-main">Tech Solutions</span>
          <span class="title-sub">Machine Repair & Support</span>
        </h1>
      </div>
      <p class="hero-text">Elevating technical excellence with retro-future innovation</p>
      <div class="hero-cta">
        <button class="primary-button">
          Explore Services
          <span class="button-border"></span>
        </button>
        <button class="secondary-button">
          Learn More
          <span class="button-border"></span>
        </button>
      </div>
    </div>
    <div class="geometric-shapes">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
    </div>
  </header>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.grid-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(var(--primary) 1px, transparent 1px),
    linear-gradient(90deg, var(--primary) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.1;
}

.diagonal-lines {
  position: absolute;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(45deg,
      var(--accent) 0%,
      var(--accent) 1px,
      transparent 1px,
      transparent 50px);
  opacity: 0.05;
}

.dot-pattern {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(var(--secondary) 1px,
      transparent 1px);
  background-size: 30px 30px;
  opacity: 0.1;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.title-container {
  margin-bottom: 2rem;
}

.title-accent {
  font-family: 'Offbit Bold', sans-serif;
  font-size: 2rem;
  color: var(--highlight);
  display: block;
  margin-bottom: 0.5rem;
}

.title-main {
  font-family: 'Offbit Bold', sans-serif;
  font-size: 4.5rem;
  color: var(--primary);
  display: block;
  line-height: 1.1;
}

.title-sub {
  font-family: 'Offbit Bold', sans-serif;
  font-size: 3rem;
  color: var(--accent);
  display: block;
  margin-top: 0.5rem;
}

.hero-text {
  font-size: 1.2rem;
  color: var(--neutral);
  max-width: 600px;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.hero-cta {
  display: flex;
  gap: 1rem;
}

.primary-button,
.secondary-button {
  padding: 1rem 2rem;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.primary-button {
  background: var(--accent);
  color: var(--neutral);
}

.secondary-button {
  background: transparent;
  color: var(--neutral);
  border: 2px solid var(--accent);
}

.button-border {
  position: absolute;
  inset: 0;
  border: 2px solid transparent;
  border-radius: 4px;
  animation: borderRotate 4s linear infinite;
}

.geometric-shapes {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

.shape {
  position: absolute;
  opacity: 0.1;
}

.shape-1 {
  top: 20%;
  right: 10%;
  width: 200px;
  height: 200px;
  background: var(--accent);
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  animation: rotate 20s linear infinite;
}

.shape-2 {
  bottom: 30%;
  left: 5%;
  width: 150px;
  height: 150px;
  background: var(--highlight);
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
  animation: pulse 8s ease-in-out infinite;
}

.shape-3 {
  top: 60%;
  right: 15%;
  width: 100px;
  height: 100px;
  background: var(--secondary);
  clip-path: circle(50% at 50% 50%);
  animation: pulse 6s ease-in-out infinite reverse;
}

@media (max-width: 768px) {
  .title-main {
    font-size: 2.8rem;
  }

  .title-sub {
    font-size: 2rem;
  }

  .hero-cta {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .title-accent {
    font-size: 1.5rem;
  }

  .title-main {
    font-size: 2.2rem;
  }

  .title-sub {
    font-size: 1.6rem;
  }
}
</style>
