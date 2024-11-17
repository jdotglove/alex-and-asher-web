<script setup lang="ts">
import DesktopFooter from '@/components/footers/DesktopFooter.vue';
import DesktopHeader from '@/components/headers/DesktopHeader.vue';
import MobileHeader from '@/components/headers/MobileHeader.vue';
</script>

<template>
  <main class="shop-page-container">
    <DesktopHeader />
    <MobileHeader />
    <div>
      <h2 class="shop-page-title">
        Shop
      </h2>
    </div>
    <section class="shop-page-content">
      <p>
        Under construction
      </p>
    </section>
    <DesktopFooter />
  </main>
</template>

<style lang="css" scoped>
.shop-page-title {
  font: 72px "Crimson Text", serif;
  text-align: center;
  padding: 50px 60px 55px;
  align-self: stretch;
  margin-top: 30px;
  margin-bottom: 0px;
  color: #13263A;
}

.shop-page-content>p {
  font: 16.8px "Nunito Sans", sans-serif;
  margin-left: 20rem;
}
</style>
