// layouts/default.vue
<template>
  <div class="site-wrapper">
    <AppNavigation />
    <main class="main-content">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.site-wrapper {
  min-height: 100vh;
  position: relative;
}

.main-content {
  padding-top: var(--navbar-height); /* Add space for fixed navbar */
}
</style>

<style>
:root {
  --navbar-height: 80px; /* Adjust based on your navbar height */
}
</style>
