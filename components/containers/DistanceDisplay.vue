<template>
  <v-card
    class="mx-auto py-2"
    width="1200"
    height="450"
    prepend-icon="mdi-map-marker-distance"
  >
    <v-card-title>
      <v-row>
        <v-col>
          <h2>Distance Calculator</h2>
        </v-col>
      </v-row>
    </v-card-title>
    <v-row>
      <v-col cols="9">
        <DistanceInput
          :location-a-string="pointALocationString"
          :location-b-string="pointBLocationString"
          @update:locationAString="newlocationAString => pointALocationString = newlocationAString"
          @update:locationBString="newlocationBString => pointBLocationString = newlocationBString"
        />
        <v-row>
          <v-col class="text-center">
            <v-btn @click="calculateResults" color="primary">Calculate</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="text-center">
            <h2>{{distanceBetweenPoints}}</h2>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    </v-card>
</template>
<script setup>
  import DistanceInput from '../inputs/DistanceInput.vue';
  const pointALocationString = ref('');
  const pointBLocationString = ref('');
  const result = reactive({
    distance: 0,
  });
  const calculateResults = () => {
    let pointADecimalLocation = toValue(pointALocationString);
    let pointBDecimalLocation = toValue(pointBLocationString);
    result.distance = calculateAirDistance(pointADecimalLocation, pointBDecimalLocation);
  };

const distanceBetweenPoints = computed(() => {
  return `"Distance: ${result.distance}km"`
})

</script>