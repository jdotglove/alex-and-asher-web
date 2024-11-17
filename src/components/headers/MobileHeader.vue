<template>
  <header class="mobile-header">
    <div class="main-container">
      <!-- <div class="search-wrapper">
        <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.9276 9.80206C20.9276 4.40456 16.4058 0 10.8646 0C5.32337 0 0.775391 4.40456 0.775391 9.80206C0.775391 15.1996 5.29723 19.6041 10.8384 19.6041C13.2431 19.6041 15.4387 18.7894 17.1899 17.4146L21.4765 21.59L22.9664 20.1388L18.6537 15.9888C20.0651 14.3085 20.9276 12.1444 20.9276 9.80206ZM10.8384 17.5928C6.4473 17.5928 2.86642 14.1048 2.86642 9.82752C2.86642 5.55026 6.4473 2.06225 10.8384 2.06225C15.2296 2.06225 18.8105 5.55026 18.8105 9.82752C18.8105 14.1048 15.2557 17.5928 10.8384 17.5928Z"
            fill="black" />
        </svg>
      </div> -->
      <h1 class="title"><a href="/">Alex & Asher</a></h1>
      <button class="more-wrapper" @click="openNav">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.07 20.5701C7.59394 20.5701 9.64 18.524 9.64 16.0001C9.64 13.4761 7.59394 11.4301 5.07 11.4301C2.54606 11.4301 0.5 13.4761 0.5 16.0001C0.5 18.524 2.54606 20.5701 5.07 20.5701Z"
            fill="black" />
          <path
            d="M16 20.5701C18.5239 20.5701 20.57 18.524 20.57 16.0001C20.57 13.4761 18.5239 11.4301 16 11.4301C13.4761 11.4301 11.43 13.4761 11.43 16.0001C11.43 18.524 13.4761 20.5701 16 20.5701Z"
            fill="black" />
          <path
            d="M26.93 20.5701C29.4539 20.5701 31.5 18.524 31.5 16.0001C31.5 13.4761 29.4539 11.4301 26.93 11.4301C24.4061 11.4301 22.36 13.4761 22.36 16.0001C22.36 18.524 24.4061 20.5701 26.93 20.5701Z"
            fill="black" />
        </svg>
      </button>
    </div>
  </header>
  <div id="navDialog" class="nav-dialog" :style="{ height: navHeight }">
    <header class="nav-dialog-header">
      <div class="main-container">
        <!-- <div class="search-wrapper">
          <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.9276 9.80206C20.9276 4.40456 16.4058 0 10.8646 0C5.32337 0 0.775391 4.40456 0.775391 9.80206C0.775391 15.1996 5.29723 19.6041 10.8384 19.6041C13.2431 19.6041 15.4387 18.7894 17.1899 17.4146L21.4765 21.59L22.9664 20.1388L18.6537 15.9888C20.0651 14.3085 20.9276 12.1444 20.9276 9.80206ZM10.8384 17.5928C6.4473 17.5928 2.86642 14.1048 2.86642 9.82752C2.86642 5.55026 6.4473 2.06225 10.8384 2.06225C15.2296 2.06225 18.8105 5.55026 18.8105 9.82752C18.8105 14.1048 15.2557 17.5928 10.8384 17.5928Z"
              fill="black" />
          </svg>
        </div> -->
        <h1 class="title"><a href="/">Alex & Asher</a></h1>
        <button class="more-wrapper" @click="closeNav">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M27.3437 24.1625L19.1812 16L27.3437 7.83755C28.225 6.9563 28.225 5.53755 27.3437 4.6563C26.4625 3.77505 25.0437 3.77505 24.1625 4.6563L16 12.8188L7.83749 4.6563C6.95624 3.77505 5.53749 3.77505 4.65624 4.6563C3.77499 5.53755 3.77499 6.9563 4.65624 7.83755L12.8187 16L4.65624 24.1625C3.77499 25.0438 3.77499 26.4625 4.65624 27.3438C5.53749 28.225 6.95624 28.225 7.83749 27.3438L16 19.1813L24.1625 27.3438C25.0437 28.225 26.4625 28.225 27.3437 27.3438C28.2187 26.4625 28.2187 25.0375 27.3437 24.1625Z"
              fill="black" />
          </svg>
        </button>
      </div>
    </header>
    <div class="dialog-navigation-container">
      <nav class="dialog-navigation">
        <a href="about-us.html" class="nav-link">About Us</a>
        <a href="services.html" class="nav-link">Services</a>
        <a href="shop.html" class="nav-link">Shop</a>
        <a href="https://www.google.com/maps/place/Alex+%26+Asher/@35.4587539,-78.5025389,8z/data=!3m1!4b1!4m6!3m5!1s0x4553d12bf734747f:0xaf76986437b14c5d!8m2!3d35.4587539!4d-78.5025389!16s%2Fg%2F11s7rg0y54?entry=ttu"
          class="nav-link" target="_blank">Leave A Review</a>
      </nav>
    </div>
  </div>
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
      navHeight: '0%' // Initial height of nav dialog (closed state)
    };
  },
  methods: {
    openNav() {
      this.navHeight = '100%'; // Set height to open the dialog
    },
    closeNav() {
      this.navHeight = '0%'; // Set height to close the dialog
    }
  }

};
</script>

<style lang="css" scoped>
@media (max-width: 961px) {
  .mobile-header {
    display: flex;
    width: 100%;
    height: 79px;
    position: sticky;
    top: 0;
    box-sizing: border-box;
    justify-content: space-evenly;
    z-index: 2;
  }

  header .title {
    color: #13263a;
    white-space: nowrap;
    justify-content: flex-start;
    text-decoration: none;
    background-color: #fff;
    align-self: center;
    display: flex;
    flex-grow: 1;
    padding: 0;
    margin: 0;
    font: 400 34px "Crimson Text", serif;
  }

  .mobile-header .main-container {
    top: 0;
    position: fixed;
    justify-content: center;
    background-color: #fff;
    display: flex;
    width: 100%;
    box-sizing: border-box;
    flex-direction: row;
    padding: 10px 24px;
  }

  .nav-dialog-header .main-container {
    padding: 10px 24px;
    width: 100%;
    justify-content: center;
    display: flex;
    box-sizing: border-box;
    flex-direction: row;
  }

  .nav-dialog-header .nav-link {
    align-self: flex-start;
  }

  .nav-link {
    color: #13263a;
    white-space: nowrap;
    text-decoration: none;
    margin: auto 0;
    font: 400 21px "Crimson Text", serif;
  }

  .dialog-navigation {
    display: flex;
    flex-wrap: wrap;
  }

  .dialog-navigation {
    background-color: #fff;
    display: flex;
    width: 100%;
    gap: 10px;
    align-content: flex-start;
    flex-direction: column;
    padding: 50px 24px;
  }
}

@media (min-width: 962px) {
  .mobile-header {
    display: none;
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

.more-wrapper {
  cursor: pointer;
  display: flex;
  object-position: center;
  flex-shrink: 0;
  fill: #000;
  overflow: hidden;
  align-items: center;
  max-width: 100%;
  border: none;
  padding: 0;
  background-color: inherit;
}

.nav-link:hover {
  text-decoration: underline;
}
</style>
