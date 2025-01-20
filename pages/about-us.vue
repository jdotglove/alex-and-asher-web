<!-- AboutUs.vue -->
<template>
  <div class="about-page">
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
    <!-- Hero Section -->
    <section class="about-hero">
      <div class="hero-background">
        <div class="grid-overlay"></div>
        <div class="diagonal-lines"></div>
        <div class="dot-pattern"></div>
      </div>

      <div class="hero-content">
        <h1>
          <span class="title-accent">Our Story</span>
          <span class="title-main">About Us</span>
          <span class="title-sub">Innovation & Excellence</span>
        </h1>
        <p class="hero-text">Pioneering technical solutions since 2005</p>
      </div>

      <div class="geometric-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>
    </section>

    <!-- Company Story -->
    <section class="company-story">
      <div class="story-grid">
        <div class="story-content">
          <h2>Our Journey</h2>
          <p class="lead-text">From humble beginnings to industry leaders</p>
          <div class="story-text">
            <p>Starting in a small workshop, TechFix Pro has grown into a leading technical solutions provider, serving
              clients across multiple industries. Our commitment to excellence and innovation has driven our success for
              over 15 years.</p>
            <div class="milestone-grid">
              <div class="milestone">
                <span class="milestone-year">2005</span>
                <h3>Founded</h3>
                <p>Established as a local repair service</p>
              </div>
              <div class="milestone">
                <span class="milestone-year">2010</span>
                <h3>Expansion</h3>
                <p>Opened multiple service centers</p>
              </div>
              <div class="milestone">
                <span class="milestone-year">2015</span>
                <h3>Innovation</h3>
                <p>Launched advanced diagnostic systems</p>
              </div>
              <div class="milestone">
                <span class="milestone-year">2020</span>
                <h3>Global Reach</h3>
                <p>Extended services worldwide</p>
              </div>
            </div>
          </div>
        </div>
        <div class="story-image">
          <div class="image-container">
            <div class="image-placeholder"></div>
            <div class="image-accent"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values -->
    <section class="core-values">
      <div class="section-header">
        <h2>Our Core Values</h2>
        <p>The principles that drive our success</p>
      </div>

      <div class="values-grid">
        <div class="value-card">
          <div class="value-icon">
            <i class="fas fa-star"></i>
          </div>
          <h3>Excellence</h3>
          <p>Committed to delivering the highest quality in every service</p>
        </div>

        <div class="value-card">
          <div class="value-icon">
            <i class="fas fa-lightbulb"></i>
          </div>
          <h3>Innovation</h3>
          <p>Continuously evolving and adopting new technologies</p>
        </div>

        <div class="value-card">
          <div class="value-icon">
            <i class="fas fa-handshake"></i>
          </div>
          <h3>Integrity</h3>
          <p>Building trust through honest and transparent service</p>
        </div>

        <div class="value-card">
          <div class="value-icon">
            <i class="fas fa-users"></i>
          </div>
          <h3>Teamwork</h3>
          <p>Collaborating to achieve exceptional results</p>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team-section">
      <div class="section-header light">
        <h2>Meet Our Team</h2>
        <p>The experts behind our success</p>
      </div>

      <div class="team-grid">
        <div class="team-card">
          <div class="member-image">
            <div class="image-placeholder"></div>
            <div class="image-pattern"></div>
          </div>
          <div class="member-info">
            <h3>John Smith</h3>
            <span class="position">CEO & Founder</span>
            <p>20+ years of industry experience</p>
          </div>
        </div>

        <div class="team-card">
          <div class="member-image">
            <div class="image-placeholder"></div>
            <div class="image-pattern"></div>
          </div>
          <div class="member-info">
            <h3>Sarah Johnson</h3>
            <span class="position">Technical Director</span>
            <p>Expert in system diagnostics</p>
          </div>
        </div>

        <div class="team-card">
          <div class="member-image">
            <div class="image-placeholder"></div>
            <div class="image-pattern"></div>
          </div>
          <div class="member-info">
            <h3>Michael Chen</h3>
            <span class="position">Lead Engineer</span>
            <p>Specialized in advanced repairs</p>
          </div>
        </div>

        <div class="team-card">
          <div class="member-image">
            <div class="image-placeholder"></div>
            <div class="image-pattern"></div>
          </div>
          <div class="member-info">
            <h3>Emily Davis</h3>
            <span class="position">Operations Manager</span>
            <p>Efficiency and process expert</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="about-cta">
      <div class="cta-content">
        <h2>Join Our Journey</h2>
        <p>Be part of our innovative solutions</p>
        <div class="cta-buttons">
          <button class="primary-button">
            Contact Us
            <span class="button-border"></span>
          </button>
          <button class="secondary-button">
            View Careers
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
.about-page {
  background-color: var(--dark);
}

/* Hero Section */
.about-hero {
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

/* Grid and Pattern Styles (reused from previous sections) */
.grid-overlay,
.diagonal-lines,
.dot-pattern {
  /* Same as previous components */
}

/* Company Story */
.company-story {
  padding: 6rem 2rem;
  background: var(--neutral);
}

.story-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
}

.story-content h2 {
  font-family: 'Offbit Bold', sans-serif;
  font-size: 2.5rem;
  color: var(--dark);
  margin-bottom: 1rem;
}

.lead-text {
  font-size: 1.2rem;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 2rem;
}

.story-text p {
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.8;
}

.milestone-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.milestone {
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.milestone-year {
  font-family: 'Offbit Bold', sans-serif;
  font-size: 1.5rem;
  color: var(--highlight);
  display: block;
  margin-bottom: 0.5rem;
}

.milestone h3 {
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.milestone p {
  color: #666;
  margin: 0;
  font-size: 0.9rem;
}

.story-image {
  position: relative;
}

.image-container {
  position: relative;
  padding-top: 120%;
}

.image-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, var(--primary), var(--accent));
  border-radius: 12px;
  overflow: hidden;
}

.image-accent {
  position: absolute;
  top: 10px;
  right: -10px;
  width: 100%;
  height: 100%;
  border: 2px solid var(--highlight);
  border-radius: 12px;
  z-index: -1;
}

/* Core Values */
.core-values {
  padding: 6rem 2rem;
  background: linear-gradient(135deg, var(--dark), var(--primary));
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.value-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 12px;
  backdrop-filter: blur(5px);
  text-align: center;
}

.value-icon {
  width: 60px;
  height: 60px;
  background: var(--highlight);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.value-icon i {
  font-size: 1.5rem;
  color: var(--neutral);
}

.value-card h3 {
  color: var(--neutral);
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.value-card p {
  color: var(--neutral);
  opacity: 0.8;
}

/* Team Section */
.team-section {
  padding: 6rem 2rem;
  background: var(--dark);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.team-card {
  background: var(--neutral);
  border-radius: 12px;
  overflow: hidden;
}

.member-image {
  position: relative;
  padding-top: 100%;
}

.image-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, var(--accent), var(--primary));
}

.image-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(45deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.1) 2px,
      transparent 2px,
      transparent 8px);
}

.member-info {
  padding: 1.5rem;
  text-align: center;
}

.member-info h3 {
  color: var(--dark);
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.position {
  color: var(--accent);
  font-weight: 600;
  display: block;
  margin-bottom: 0.5rem;
}

.member-info p {
  color: #666;
  font-size: 0.9rem;
}

/* CTA Section */
.about-cta {
  padding: 4rem 2rem;
  background: linear-gradient(135deg, var(--dark), var(--primary));
  position: relative;
  overflow: hidden;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .story-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .values-grid,
  .team-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}

@media (max-width: 768px) {
  .about-hero {
    height: 50vh;
  }

  .milestone-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .cta-buttons {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .milestone-grid {
    grid-template-columns: 1fr;
  }

  .value-card,
  .team-card {
    padding: 1.5rem;
  }

  .member-info h3 {
    font-size: 1.1rem;
  }
}
</style>
