// pages/index.vue
<template>
  <div class="app-container">
    <!-- Hero Section -->
    <HeroComponent />

    <!-- Featured Services -->
    <ServicesSection />

    <!-- Stats Section -->
    <StatsSection />
  </div>
</template>

<script setup>
useHead({
  title: 'Alex & Asher Tech - Home',
  meta: [
    {
      name: 'description',
      content: 'Professional machine repair, technical support, and consulting services in Raleigh, NC. 24/7 emergency repairs, preventive maintenance, and innovative solutions for your technical needs.'
    },
    {
      name: 'keywords',
      content: 'machine repair, technical support, emergency repairs, preventive maintenance, refrigeration repair Raleigh, beverage equipment maintenance'
    }
  ]
})
</script>

<style>
:root {
  --primary: #3864af;
  --secondary: #00a276;
  --accent: #9974b3;
  --highlight: #ef4231;
  --neutral: #eee8e4;
  --dark: #0f141d;
  --sand: #ddb27e;
}

@font-face {
  font-family: 'Inter Regular';
  src: url('/assets/Fonts/Inter/InterVariable.ttf') format('ttf');
  font-display: swap;
}

/* Global Styles */
body {
  font-family: 'Inter Regular', sans-serif;
  background-color: var(--dark);
  color: var(--neutral);
  line-height: 1.6;
}

.app-container {
  min-height: 100vh;
}

@font-face {
  font-family: 'Offbit Bold';
  src: url('/assets/Fonts/OffBitBold/WOFF2/OffBit-Bold.woff2') format('woff2');
  font-display: swap;
}

</style>
