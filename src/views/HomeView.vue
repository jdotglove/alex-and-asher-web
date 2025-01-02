<!-- App.vue -->
<template>
  <div class="app-container">
    <!-- Navigation with geometric details -->
    <nav class="nav-container">
      <div class="logo">
        <div class="logo-shapes">
          <span class="shape-square"></span>
          <span class="shape-circle"></span>
        </div>
        <span class="logo-text">TechFix_Pro</span>
      </div>
      <div class="nav-links">
        <a href="/">
          Home
          <span class="link-accent"></span>
        </a>
        <a href="/services">
          Services
          <span class="link-accent"></span>
        </a>
        <a href="/about-us">
          About us
          <span class="link-accent"></span>
        </a>
        <a href="#contact">
          Contact
          <span class="link-accent"></span>
        </a>
        <button class="cta-button">
          <span class="button-text">Get Started</span>
          <span class="button-glitch"></span>
        </button>
      </div>
    </nav>

    <!-- Hero Section with Layered Design -->
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

    <!-- Featured Services -->
    <section class="featured-services">
      <div class="section-header">
        <h2>Our Services</h2>
        <p>Professional solutions for modern challenges</p>
      </div>

      <div class="services-grid">
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

    <!-- Stats Section -->
    <section class="stats-section">
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-number">2500+</div>
          <div class="stat-label">Repairs Completed</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">99%</div>
          <div class="stat-label">Client Satisfaction</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">24/7</div>
          <div class="stat-label">Support Available</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">15+</div>
          <div class="stat-label">Years Experience</div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
/* Global Styles */
:root {
  --primary: #3864af;
  /* Previous secondary blue */
  --secondary: #00a276;
  /* Previous highlight green */
  --accent: #9974b3;
  /* Previous primary purple */
  --highlight: #ef4231;
  /* Previous accent red */
  --neutral: #eee8e4;
  /* Previous light */
  --dark: #0f141d;
  /* Keep dark background */
  --sand: #ddb27e;
  /* Keep sand color for accents */
}

/* Base Styles */
body {
  font-family: 'Inter', sans-serif;
  background-color: var(--dark);
  color: var(--neutral);
  line-height: 1.6;
}

/* Navigation */
.nav-container {
  position: fixed;
  width: 100%;
  z-index: 1000;
  padding: 1.5rem 2rem;
  background: linear-gradient(90deg,
      rgba(15, 20, 29, 0.95),
      rgba(56, 100, 175, 0.8));
  backdrop-filter: blur(10px);
}

.logo {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo-shapes {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.shape-square {
  width: 20px;
  height: 20px;
  background: var(--accent);
  transform: rotate(45deg);
  animation: rotate 6s linear infinite;
}

.shape-circle {
  width: 20px;
  height: 20px;
  background: var(--highlight);
  border-radius: 50%;
  animation: pulse 3s ease-in-out infinite;
}

.logo-text {
  font-family: 'Offbit Bold', sans-serif;
  font-size: 1.5rem;
  color: var(--neutral);
  letter-spacing: 1px;
}

/* Hero Section */
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

/* Buttons */
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

/* Featured Services */
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
}

/* Stats Section */
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
}

.stat-number {
  font-family: 'Offbit Bold', sans-serif;
  font-size: 2.5rem;
  color: var(--highlight);
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--neutral);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.9rem;
}

/* Animations */
@keyframes rotate {
  from {
    transform: rotate(45deg);
  }

  to {
    transform: rotate(405deg);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes borderRotate {
  0% {
    border-color: var(--accent);
  }

  33% {
    border-color: var(--highlight);
  }

  66% {
    border-color: var(--secondary);
  }

  100% {
    border-color: var(--accent);
  }
}

@keyframes glitch {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}

/* Geometric Shapes */
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

/* Navigation Links */
.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-links a {
  color: var(--neutral);
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;
}

.link-accent {
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--highlight);
  transform: scaleX(0);
  transition: transform 0.3s ease;
  transform-origin: right;
}

.nav-links a:hover .link-accent {
  transform: scaleX(1);
  transform-origin: left;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .title-main {
    font-size: 3.5rem;
  }

  .title-sub {
    font-size: 2.5rem;
  }

  .services-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .title-main {
    font-size: 2.8rem;
  }

  .title-sub {
    font-size: 2rem;
  }

  .hero-cta {
    flex-direction: column;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .service-card {
    height: 350px;
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

  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>
