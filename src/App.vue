<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <main class="main-content">
    <RouterView />
  </main>
</template>

<script lang="ts">
export default {
  async mounted() {
    this.createRandomShapes(); // Create random shapes on mount
  },
  data(): {
    shapeColors: Array<string>;
  } {
    return {
      shapeColors: ['#A87FB9', '#5FBBFF', '#ADD58D'], // Color palette for shapes
    }
  },
  methods: {
    createRandomShapes() {
      const container = document.querySelector('.main-content')
      const shapeCount = 20 // Number of shapes to create

      for (let i = 0; i < shapeCount; i++) {
        const shape = document.createElement('div')
        const size = Math.floor(Math.random() * 100) + 50 // Random size between 50 and 150px
        const color = this.shapeColors[Math.floor(Math.random() * this.shapeColors.length)]
        const positionTop = Math.floor(Math.random() * 100) // Random top position (0% - 100%)
        const positionLeft = Math.floor(Math.random() * 100) // Random left position (0% - 100%)
        const borderRadius = Math.random() > 0.5 ? '50%' : '0' // Randomly choose circle or square

        shape.style.width = `${size}px`
        shape.style.height = `${size}px`
        shape.style.backgroundColor = color
        shape.style.position = 'absolute'
        shape.style.top = `${positionTop}%`
        shape.style.left = `${positionLeft}%`
        shape.style.borderRadius = borderRadius
        shape.style.opacity = '0.1'
        shape.style.pointerEvents = 'none'
        shape.classList.add('random-shape')

        if (container) {
          container.appendChild(shape)
        }
      }
    }
  }
}
</script>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
