<template>
  <!-- Empty template since we're just redirecting -->
</template>

<script>
export default {
  props: ['url'],
  mounted() {
    window.location.href = this.url;
  },
};
</script>
