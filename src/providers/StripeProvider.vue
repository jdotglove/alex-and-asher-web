<template>
  <div>
    <slot />
  </div>
</template>

<script>
import { defineComponent, provide, toRef } from "vue";
import { loadStripe } from "@stripe/stripe-js";

export default defineComponent({
  name: "StripeProvider",
  props: {
    customer: {
      type: Object,
      of: {
        email: String,
        _id: String,
      },
      required: true,
    },
  },
  setup(props) {
    const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
    provide("stripePromise", stripePromise);

    // Provide the customer to child components
    provide("customer", toRef(props, "customer"));

    return {};
  },
});
</script>
