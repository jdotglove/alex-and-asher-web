<template>
  <nav class="nav-container">

    <div class="scanlines"></div>
    <div class="logo">
      <div class="logo-shapes">
        <svg class="logo-svg" viewBox="0 0 800 800">
          <g>
            <!-- Circle shape - Purple -->
            <path class="svg-shape circle"
              d="M273.3,228.39c0,77.2-61.1,139.71-136.73,139.71-14.68,0-28.88-2.28-42.12-6.69C39.56,343.13,0,290.58,0,228.39,0,151.2,61.1,88.52,136.57,88.52c15.16,0,29.52,2.61,43.08,7.18,54.41,18.44,93.65,70.83,93.65,132.69" />
            <!-- Complex shape - Green -->
            <path class="svg-shape complex"
              d="M665.64 0 548.61 .54 524.69 .63 525.06 125.6 373.86 198.71 374.33 369.59 223.14 442.7 223.75 602.68 223.88 613.7 113.16 666.92 173.37 797.41 365.29 705.01 364.55 534.01 515.83 461.1 515.28 290.02 666.56 217.11 665.64 0" />
            <!-- Triangle shape - Red -->
            <path class="svg-shape triangle" d="M540.27 706 794.36 706 667.27 368.1 540.27 706" />
          </g>
        </svg>
      </div>
      <span class="logo-text">
        Alex & Asher
        <span class="logo-glitch" aria-hidden="true">Alex & Asher</span>
      </span>
    </div>

    <!-- Desktop Navigation -->
    <div class="nav-links">
      <NuxtLink to="/" class="nav-link">
        <span class="nav-text">Home</span>
        <span class="nav-glow"></span>
      </NuxtLink>
      <NuxtLink to="/services" class="nav-link">
        <span class="nav-text">Services</span>
        <span class="nav-glow"></span>
      </NuxtLink>
      <NuxtLink to="/about-us" class="nav-link">
        <span class="nav-text">About Us</span>
        <span class="nav-glow"></span>
      </NuxtLink>
    </div>
    <!-- Mobile Navigation -->
    <MobileNavigation />

  </nav>
</template>

<style scoped>
.nav-container {
  position: fixed;
  width: 100%;
  z-index: 1000;
  padding: 1.5rem 2rem;
  background: linear-gradient(90deg,
      rgba(15, 20, 29, 0.95),
      rgba(56, 100, 175, 0.8));
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid rgba(153, 116, 179, 0.3);
  box-shadow: 0 0 20px rgba(153, 116, 179, 0.2);
}

/* Scanlines Effect */
.scanlines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom,
      transparent 50%,
      rgba(0, 0, 0, 0.1) 50%);
  background-size: 100% 4px;
  pointer-events: none;
  z-index: 1;
}

/* Logo Styles */
.logo {
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  z-index: 2;
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
  box-shadow: 0 0 15px var(--accent);
}

.shape-circle {
  width: 20px;
  height: 20px;
  background: var(--highlight);
  border-radius: 50%;
  animation: pulse 3s ease-in-out infinite;
  box-shadow: 0 0 15px var(--highlight);
}

.shape-triangle {
  width: 0;
  height: 0;
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 20px solid var(--secondary);
  animation: float 4s ease-in-out infinite;
  filter: drop-shadow(0 0 10px var(--secondary));
}

.logo-text {
  font-family: 'Offbit Bold', sans-serif;
  font-size: 1.5rem;
  color: var(--neutral);
  letter-spacing: 2px;
  position: relative;
  text-shadow: 0 0 10px var(--neutral);
}

/* Glitch Effect */
.logo-glitch {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}

.logo-text:hover .logo-glitch:nth-child(2) {
  animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
  color: var(--highlight);
  opacity: 1;
}

.logo-text:hover .logo-glitch:nth-child(3) {
  animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
  color: var(--accent);
  opacity: 1;
}

/* Navigation Links */
.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
  position: relative;
  z-index: 2;
}

.nav-link {
  color: var(--neutral);
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.nav-link:hover {
  border: 1px solid rgba(153, 116, 179, 0.3);
  background: rgba(153, 116, 179, 0.1);
  box-shadow: 0 0 20px rgba(153, 116, 179, 0.2);
}

.nav-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, var(--accent), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.nav-link:hover .nav-glow {
  opacity: 0.2;
}

/* CTA Button */
.cta-button {
  background: var(--accent);
  color: var(--neutral);
  border: 2px solid var(--accent);
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  box-shadow: 0 0 20px rgba(153, 116, 179, 0.4);
  clip-path: polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%);
}

.button-text {
  position: relative;
  z-index: 1;
}

.button-glitch {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent);
  transform: translateX(-100%);
}

.button-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, var(--highlight), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.cta-button:hover {
  background: var(--highlight);
  border-color: var(--highlight);
  transform: translateY(-2px);
}

.cta-button:hover .button-glitch {
  animation: glitch 1s linear;
}

.cta-button:hover .button-glow {
  opacity: 0.4;
}

/* Animations */
@keyframes float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-5px);
  }
}

@keyframes glitch {
  0% {
    transform: translate(0);
  }

  20% {
    transform: translate(-5px, 5px);
  }

  40% {
    transform: translate(-5px, -5px);
  }

  60% {
    transform: translate(5px, 5px);
  }

  80% {
    transform: translate(5px, -5px);
  }

  100% {
    transform: translate(0);
  }
}

.logo-shapes {
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-svg {
  width: 100%;
  height: 100%;
}

.svg-shape {
  transition: all 0.3s ease;
}

.svg-shape.circle {
  fill: #9974b3;
  /* Purple */
  animation: rotate 6s linear infinite;
  transform-origin: center;
  filter: drop-shadow(0 0 8px rgba(153, 116, 179, 0.5));
}

.svg-shape.complex {
  fill: #00a276;
  /* Green */
  animation: pulse 4s ease-in-out infinite;
  transform-origin: center;
  filter: drop-shadow(0 0 8px rgba(0, 162, 118, 0.5));
}

.svg-shape.triangle {
  fill: #ef4231;
  /* Red */
  animation: float 3s ease-in-out infinite;
  transform-origin: center;
  filter: drop-shadow(0 0 8px rgba(239, 66, 49, 0.5));
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.95);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes float {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-2px);
  }

  100% {
    transform: translateY(0);
  }
}

/* Mobile adjustments */
@media (max-width: 768px) {
  .logo-shapes {
    width: 30px;
    height: 30px;
  }
}

@keyframes scanline {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(100%);
  }
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .logo {
    flex: 1;
    justify-content: center;
  }
}
</style>
