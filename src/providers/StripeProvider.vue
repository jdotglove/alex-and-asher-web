<template>
  <div>
    <slot />
  </div>
</template>

<script>
import { defineComponent, provide } from "vue";
import { loadStripe } from "@stripe/stripe-js";

export default defineComponent({
  name: "StripeProvider",
  setup() {
    const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

    provide("stripePromise", stripePromise);

    return {};
  },
});
</script>
