<template>
  <v-container class="pb-0">
    <v-row>
        <v-col cols="6">
          <v-list-subheader>Enter coordinates (comma separated decimals): </v-list-subheader>
        </v-col>
        <v-col cols="3">
          <v-text-field
            label="Point A"
            :value="locationAString"
            key="Point A"
            @input="$emit('update:locationAString', $event.target.value)"
          />
        </v-col>
        <v-col cols="3">
          <v-text-field
            label="Point B"
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