<template>
  <v-container class="pb-0">

          <v-row>
            <v-list-subheader>Enter coordinates (comma separated decimals): </v-list-subheader>
          </v-row>
          <v-row>
            <v-col cols="6">
              <h3>Point A: </h3>
              <v-text-field
                :value="locationAString"
                key="Point A"
                @input="$emit('update:locationAString', $event.target.value)"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <h3>Point B: </h3>
              <v-text-field
                :value="locationBString"
                key="Point B"
                @input="$emit('update:locationBString', $event.target.value)"
              />
            </v-col>
          </v-row>
  </v-container>
</template>
<script setup>
  defineProps(['locationAString', 'locationBString'])
  defineEmits(['update:locationAString', 'update:locationBString'])
</script>