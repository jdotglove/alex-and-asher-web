<template>
  <v-card
    class="mx-auto pt-3"
    width="1200"
    height="500"
    prepend-icon="mdi-map-marker-check"
  >
    <v-card-title>
      <v-row>
        <v-col>
          <h2>Location Verifier</h2>
        </v-col>
      </v-row>
    </v-card-title>
    <v-row>
      <v-col cols="9">
        <LocationInput
          v-model:address="address.input"
          @update:address="newAddressInput => address.input = newAddressInput"
        />
        <v-row>
          <v-col class="text-center">
            <v-btn @click="verifyLocation" color="primary">Verify Location</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="text-center">
            <h2>"Location: {{result.latitude}},{{result.longitude}}"</h2>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    </v-card>
</template>
<script setup>
  import { Client } from '@googlemaps/google-maps-services-js';
  
  import LocationInput from '../inputs/LocationInput.vue';
  const {
    public: {
      GOOGLE_MAPS_API_KEY
    }
  } = useRuntimeConfig();

  const address = reactive({
    input: '',
  });
  const result = reactive({
    latitude: 0,
    longitude: 0,
  });
  const verifyLocation = async () => {
    const googleMapsClient = new Client({});
    try {
      const locationResult = await googleMapsClient.geocode({ params: {
        address: toValue(address.input),
        key: GOOGLE_MAPS_API_KEY,
      }})
      if (locationResult.data) {
        console.log('Results: ', locationResult.data);
        result.latitude = locationResult.data.results[0].geometry.location.lat;
        result.longitude = locationResult.data.results[0].geometry.location.lng;
      }
    } catch(error) {
      console.error('Error: ', error.message);
    }
  };
</script>