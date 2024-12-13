<script setup lang="ts">
import DesktopFooter from '@/components/footers/DesktopFooter.vue';
import DesktopHeader from '@/components/headers/DesktopHeader.vue';
import MobileHeader from '@/components/headers/MobileHeader.vue';
import { useHead } from '@unhead/vue';

useHead({
  title: "Alex & Asher - Home Page"
});
</script>

<template>
  <main class="home-page-container">
    <DesktopHeader />
    <MobileHeader />
    <div class="home-page-content">
      <span class="logo-container">
        <img class="logo" src="/assets/croppedLogo.png" alt="alex and asher logo" />
      </span>
      <div class="mission-statement-container">
        <p class="mission-statement">We service both home and commercial specialty food &amp; beverage equipment in
          Raleigh, NC and its surrounding areas.</p>
      </div>
      <div class="contact-info-container">
        <p class="contact-info">(919) 612-7918 • help@alexandasher.tech</p>
      </div>
      <hr class="separator" />
      <div class="about-us-container">
        <img class="about-us-photo" src="/assets/pexels-photo-7688336.webp" alt="people sitting around table" />
        <div class="about-us-content">
          <h4 class="about-us-heading"><strong>Learn more about our company, team, and mission</strong></h4>
          <a class="about-us-link" href="/about-us">About Us</a>
        </div>
      </div>
      <div class="our-services-container">
        <div class="our-services-content">
          <h4 class="our-services-heading"><strong>Our Services</strong></h4>
          <p class="our-services-text">From basic home equipment to state-of-the-art commercial equipment, we&apos;ve
            got
            you covered. Ask us about our comprehensive service plans and training programs!</p>
          <a class="our-services-link" href="/our-services">View Services</a>
        </div>
        <img class="our-services-photo" src="/assets/pexels-photo-7162356-1.webp" alt="people sitting around table" />
      </div>
    </div>
    <DesktopFooter />
  </main>
</template>

<style lang="css" scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
