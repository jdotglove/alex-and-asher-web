<!-- Services.vue -->
<template>
  <div class="services-page">
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
          About Us
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
    <!-- Hero Section -->
    <section class="services-hero">
      <div class="hero-background">
        <div class="grid-overlay"></div>
        <div class="diagonal-lines"></div>
        <div class="dot-pattern"></div>
      </div>

      <div class="hero-content">
        <h1>
          <span class="title-accent">Professional</span>
          <span class="title-main">Services</span>
          <span class="title-sub">Technical Excellence</span>
        </h1>
        <p class="hero-text">Comprehensive solutions for your technical infrastructure</p>
      </div>

      <div class="geometric-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>
    </section>

    <!-- Service Categories -->
    <section class="service-categories">
      <div class="section-header">
        <h2>Our Expertise</h2>
        <p>Tailored solutions for modern challenges</p>
      </div>

      <div class="categories-grid">
        <!-- Emergency Services -->
        <div class="category-card">
          <div class="card-header">
            <div class="icon-wrapper">
              <i class="fas fa-bolt"></i>
            </div>
            <h3>Emergency Services</h3>
          </div>
          <div class="card-content">
            <div class="service-details">
              <div class="detail-item">
                <h4>24/7 Support</h4>
                <p>Round-the-clock emergency response for critical systems</p>
                <ul class="feature-list">
                  <li>Immediate remote assistance</li>
                  <li>On-site emergency response</li>
                  <li>Critical system recovery</li>
                </ul>
                <div class="pricing">
                  <span class="price">From $150/hour</span>
                  <button class="detail-button">
                    Request Service
                    <span class="button-glitch"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Preventive Maintenance -->
        <div class="category-card">
          <div class="card-header">
            <div class="icon-wrapper">
              <i class="fas fa-tools"></i>
            </div>
            <h3>Preventive Maintenance</h3>
          </div>
          <div class="card-content">
            <div class="service-details">
              <div class="detail-item">
                <h4>Regular Maintenance</h4>
                <p>Proactive care to prevent system failures</p>
                <ul class="feature-list">
                  <li>Scheduled inspections</li>
                  <li>Performance optimization</li>
                  <li>System updates</li>
                </ul>
                <div class="pricing">
                  <span class="price">Plans from $299/month</span>
                  <button class="detail-button">
                    View Plans
                    <span class="button-glitch"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Technical Consulting -->
        <div class="category-card">
          <div class="card-header">
            <div class="icon-wrapper">
              <i class="fas fa-chart-line"></i>
            </div>
            <h3>Technical Consulting</h3>
          </div>
          <div class="card-content">
            <div class="service-details">
              <div class="detail-item">
                <h4>Expert Analysis</h4>
                <p>Strategic planning and system optimization</p>
                <ul class="feature-list">
                  <li>Infrastructure assessment</li>
                  <li>Upgrade planning</li>
                  <li>Security auditing</li>
                </ul>
                <div class="pricing">
                  <span class="price">Custom quotes available</span>
                  <button class="detail-button">
                    Get Quote
                    <span class="button-glitch"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Services -->
    <section class="additional-services">
      <div class="section-header light">
        <h2>Specialized Solutions</h2>
        <p>Custom services for unique needs</p>
      </div>

      <div class="services-flex">
        <div class="service-item">
          <div class="service-icon">
            <i class="fas fa-network-wired"></i>
          </div>
          <h4>Network Infrastructure</h4>
          <p>Complete network solutions and maintenance</p>
        </div>

        <div class="service-item">
          <div class="service-icon">
            <i class="fas fa-shield-alt"></i>
          </div>
          <h4>Security Systems</h4>
          <p>Advanced security implementation and monitoring</p>
        </div>

        <div class="service-item">
          <div class="service-icon">
            <i class="fas fa-database"></i>
          </div>
          <h4>Data Management</h4>
          <p>Efficient data handling and storage solutions</p>
        </div>

        <div class="service-item">
          <div class="service-icon">
            <i class="fas fa-cloud"></i>
          </div>
          <h4>Cloud Services</h4>
          <p>Cloud integration and management</p>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="services-cta">
      <div class="cta-content">
        <h2>Ready to Get Started?</h2>
        <p>Let's discuss your technical needs</p>
        <div class="cta-buttons">
          <button class="primary-button">
            Schedule Consultation
            <span class="button-border"></span>
          </button>
          <button class="secondary-button">
            View Service Plans
            <span class="button-border"></span>
          </button>
        </div>
      </div>
      <div class="cta-pattern"></div>
    </section>
  </div>
</template>

<style scoped>
/* Base Styles */
.services-page {
  background-color: var(--dark);
  min-height: 100vh;
}

/* Hero Section */
.services-hero {
  height: 60vh;
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
  text-align: center;
  position: relative;
  z-index: 1;
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
  margin: 2rem auto 0;
  text-transform: uppercase;
  letter-spacing: 2px;
}

/* Service Categories */
.service-categories {
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

.section-header.light h2,
.section-header.light p {
  color: var(--neutral);
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.category-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.category-card:hover {
  transform: translateY(-5px);
}

.card-header {
  background: var(--primary);
  padding: 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.card-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(45deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.1) 2%,
      transparent 2%,
      transparent 4%);
}

.icon-wrapper {
  width: 60px;
  height: 60px;
  background: var(--highlight);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}

.icon-wrapper i {
  font-size: 1.5rem;
  color: var(--neutral);
}

.card-header h3 {
  font-family: 'Offbit Bold', sans-serif;
  color: var(--neutral);
  font-size: 1.8rem;
}

.card-content {
  padding: 2rem;
}

.detail-item h4 {
  color: var(--primary);
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.detail-item p {
  color: #666;
  margin-bottom: 1rem;
}

.feature-list {
  list-style: none;
  margin-bottom: 2rem;
}

.feature-list li {
  color: #666;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.feature-list li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--accent);
}

.pricing {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
}

.price {
  color: var(--highlight);
  font-weight: 600;
}

.detail-button {
  background: var(--primary);
  color: var(--neutral);
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  position: relative;
  overflow: hidden;
}

/* Additional Services */
.additional-services {
  padding: 6rem 2rem;
  background: linear-gradient(135deg, var(--dark), var(--primary));
  position: relative;
}

.services-flex {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: center;
}

.service-item {
  flex: 1 1 250px;
  max-width: 300px;
  text-align: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  backdrop-filter: blur(5px);
}

.service-icon {
  width: 50px;
  height: 50px;
  background: var(--highlight);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}

.service-icon i {
  font-size: 1.2rem;
  color: var(--neutral);
}

.service-item h4 {
  color: var(--neutral);
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.service-item p {
  color: var(--neutral);
  opacity: 0.8;
}

/* CTA Section */
.services-cta {
  padding: 4rem 2rem;
  background: var(--dark);
  position: relative;
  overflow: hidden;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}

.cta-content h2 {
  font-family: 'Offbit Bold', sans-serif;
  font-size: 2.5rem;
  color: var(--neutral);
  margin-bottom: 1rem;
}

.cta-content p {
  color: var(--accent);
  font-size: 1.2rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.cta-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(45deg,
      var(--primary) 0%,
      var(--primary) 1px,
      transparent 1px,
      transparent 50px);
  opacity: 0.05;
  pointer-events: none;
}

/* Buttons */
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

/* Animations */
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

/* Responsive Design */
@media (max-width: 1024px) {
  .title-main {
    font-size: 3.5rem;
  }

  .title-sub {
    font-size: 2.5rem;
  }

  .categories-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .services-flex {
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .services-hero {
    height: 50vh;
  }

  .title-main {
    font-size: 2.8rem;
  }

  .title-sub {
    font-size: 2rem;
  }

  .hero-text {
    font-size: 1rem;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .categories-grid {
    grid-template-columns: 1fr;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .service-item {
    flex: 1 1 100%;
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

  .card-header h3 {
    font-size: 1.5rem;
  }

  .pricing {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }

  .service-item {
    padding: 1.5rem;
  }
}
</style>
