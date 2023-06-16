<template>
  <v-container>
    <v-row>
      <v-col>
        <DistanceDisplay @error="handleError" />
      </v-col>
    </v-row>
    <v-row>
        <v-col>
      <v-snackbar
      v-model="showAlert"
      color="error"
    >
      {{ errorText }}
      <template v-slot:actions>
        <v-btn
          color="white"
          variant="text"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
        </v-col>
      </v-row>
  </v-container>
</template>

<script setup>
  import DistanceDisplay from '../components/containers/DistanceDisplay.vue';
  let showAlert = ref(false);
  let errorText = ref('');
  useHead({
    title: 'Dot Distance App'
  })

  const handleError = (msg) => {
    showAlert.value = true;
    errorText.value = msg;
  }
</script>

