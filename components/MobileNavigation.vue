// components/MobileNavigation.vue
<template>
  <div class="block lg:hidden">
    <!-- Hamburger Button -->
    <button
      class="mobile-menu-button"
      @click="toggleMenu"
      :class="{ 'is-active': isOpen }"
      aria-label="Toggle menu"
    >
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
    </button>

    <!-- Mobile Menu Panel -->
    <div
      class="mobile-menu"
      :class="{ 'is-open': isOpen }"
      @click.self="closeMenu"
    >
      <div class="mobile-menu-content">
        <div class="mobile-menu-header">
          <div class="logo-shapes">
            <span class="shape-square"></span>
            <span class="shape-circle"></span>
            <span class="shape-triangle"></span>
          </div>
          <span class="logo-text">Alex & Asher</span>
        </div>

        <nav class="mobile-nav-links">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="mobile-nav-link"
            @click="closeMenu"
          >
            {{ link.text }}
          </NuxtLink>
        </nav>

        <button class="mobile-cta-button">
          <span class="button-text">Get Started</span>
          <span class="button-glitch"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const isOpen = ref(false)

const navLinks = [
  { text: 'Home', path: '/' },
  { text: 'Services', path: '/services' },
  { text: 'About Us', path: '/about-us' },
]

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  document.body.style.overflow = isOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  isOpen.value = false
  document.body.style.overflow = ''
}

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<style scoped>
.mobile-menu-button {
  display: none;
  position: relative;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1001;
}

.hamburger-line {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--neutral);
  margin: 6px 0;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px var(--accent);
}

.mobile-menu-button.is-active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(7px, 7px);
}

.mobile-menu-button.is-active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.mobile-menu-button.is-active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

.mobile-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100vh;
  background: rgba(15, 20, 29, 0.98);
  backdrop-filter: blur(10px);
  transition: right 0.3s ease;
  z-index: 1000;
}

.mobile-menu.is-open {
  right: 0;
}

.mobile-menu-content {
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.mobile-menu-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(153, 116, 179, 0.3);
}

.mobile-nav-links {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.mobile-nav-link {
  color: var(--neutral);
  text-decoration: none;
  font-size: 1.2rem;
  padding: 1rem;
  border: 1px solid transparent;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.mobile-nav-link:hover {
  border: 1px solid rgba(153, 116, 179, 0.3);
  background: rgba(153, 116, 179, 0.1);
  box-shadow: 0 0 20px rgba(153, 116, 179, 0.2);
}

.mobile-cta-button {
  background: var(--accent);
  color: var(--neutral);
  border: 2px solid var(--accent);
  padding: 1rem;
  width: 100%;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: auto;
  clip-path: polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%);
}

.mobile-cta-button:hover {
  background: var(--highlight);
  border-color: var(--highlight);
}

@media (max-width: 768px) {
  .mobile-menu-button {
    display: block;
  }
}
</style>
