<template>
  <v-container>
    <v-row>
      <v-col>
        <DistanceDisplay />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <LocationDisplay />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import DistanceDisplay from '../components/containers/DistanceDisplay.vue';
  import LocationDisplay from '../components/containers/LocationDisplay.vue';
  import { calculateAirDistance } from '../utils';

  useHead({
    title: 'Dot Distance App'
  })

</script>

