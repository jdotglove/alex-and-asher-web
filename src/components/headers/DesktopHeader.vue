<template>
  <header class="desktop-header">
    <div class="main-container">
      <section class="logo-wrapper">
        <h1 class="title"><a href="/">Alex &amp; Asher</a></h1>
        <p class="description">Specialty shops deserve special attention</p>
      </section>
      <section class="nav-section">
        <nav class="nav">
          <a href="/about-us" :class="setNavClass('/about-us')">
            About Us
          </a>
          <a href="/services" :class="setNavClass('/services')">
            Services
          </a>
          <a href="/shop" :class="setNavClass('/shop')">
            Shop
          </a>
          <a href="https://www.google.com/maps/place/Alex+%26+Asher/@35.4587539,-78.5025389,8z/data=!3m1!4b1!4m6!3m5!1s0x4553d12bf734747f:0xaf76986437b14c5d!8m2!3d35.4587539!4d-78.5025389!16s%2Fg%2F11s7rg0y54?entry=ttu"
            :class="setNavClass('/review')" target="_blank">
            Leave A Review
          </a>
        </nav>
        <!-- <div class="search-wrapper">
          <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.9276 9.80206C20.9276 4.40456 16.4058 0 10.8646 0C5.32337 0 0.775391 4.40456 0.775391 9.80206C0.775391 15.1996 5.29723 19.6041 10.8384 19.6041C13.2431 19.6041 15.4387 18.7894 17.1899 17.4146L21.4765 21.59L22.9664 20.1388L18.6537 15.9888C20.0651 14.3085 20.9276 12.1444 20.9276 9.80206ZM10.8384 17.5928C6.4473 17.5928 2.86642 14.1048 2.86642 9.82752C2.86642 5.55026 6.4473 2.06225 10.8384 2.06225C15.2296 2.06225 18.8105 5.55026 18.8105 9.82752C18.8105 14.1048 15.2557 17.5928 10.8384 17.5928Z"
              fill="black" />
          </svg>
        </div> -->
      </section>
    </div>
  </header>
</template>

<script lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();

    const currentUrl = computed(() => route.fullPath);
    const currentPath = computed(() => route.path);
    const currentQuery = computed(() => route.query);

    return {
      currentUrl,
      currentPath,
      currentQuery,
    };
  },
  data() {
    return {
      shapeColors: ['purple', 'blue', 'green'],
    }
  },
  methods: {
    setNavClass(endpoint: string) {
      const color = this.shapeColors[Math.floor(Math.random() * 3)]

      return {
        'p-1': true,
        'nav-link': true,
        active: this.currentPath.includes(endpoint),
        [color]: true
      }
    }
  }
};
</script>

<style lang="css" scoped>
@media (max-width: 961px) {
  .desktop-header {
    display: none;
  }
}

@media (min-width: 962px) {
  .desktop-header {
    max-width: 100%;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-evenly;
    position: sticky;
    top: 0;
    background-color: white;
    padding: 27px 38px;
  }

  .desktop-header .title>* {
    white-space: nowrap;
    text-decoration: none;
    color: #13263a;
  }

  .desktop-header .description {
    white-space: nowrap;
  }

  .desktop-header .nav {
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .desktop-header .main-container {
    align-self: center;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .logo-container {
    display: flex;
    flex-shrink: 1;
    justify-content: center;
  }

  .desktop-header .nav-link {
    color: #13263a;
    align-self: center;
    white-space: nowrap;
    text-decoration: none;
    margin: auto 0;
    font: 400 21px "Crimson Text", serif;
  }

  .desktop-header .logo-wrapper {
    display: flex;
    justify-items: center;
    align-self: center;
    flex-shrink: 1;
    justify-content: space-between;
  }
}

.desktop-header .title {
  color: #13263a;
  flex-grow: 1;
  flex-shrink: 1;
  position: relative;
  width: max-content;
  font: 400 34px "Crimson Text", serif;
  margin: 0 0 0 0;
}

.desktop-header .description {
  color: rgba(19, 38, 58, 0.6);
  margin: 0 0 0 0;
  flex-shrink: 1;
  display: flex;
  margin-left: 20px;
  justify-items: center;
  align-self: center;
  position: relative;
  font: 400 17px "Nunito Sans", sans-serif;
}

@media (max-width: 991px) {
  .desktop-header .description {
    white-space: initial;
  }
}

.desktop-header .nav-section {
  align-self: center;
  justify-content: flex-end;
  display: flex;
  gap: 20px;
  flex-grow: 1;
  flex-shrink: 1;
}

.desktop-header .nav {
  box-sizing: border-box;
  display: flex;
  align-self: center;
  min-width: 430px;
  padding: 0 20px;
}

@media (max-width: 991px) {
  .desktop-header .nav-link {
    white-space: initial;
  }
}

.search-wrapper {
  cursor: pointer;
  display: flex;
  object-position: center;
  width: 22px;
  flex-shrink: 0;
  fill: #000;
  overflow: hidden;
  align-items: center;
  max-width: 100%;
}

.nav-link:hover,
.nav-link.active {
  text-decoration: underline;
}
</style>
