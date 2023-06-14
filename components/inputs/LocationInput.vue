<template>
  <v-container>
    <v-row>
      <v-col>
        <v-row>
          <v-col cols="3">
            <v-list-subheader>Enter address to locate: </v-list-subheader>
          </v-col>
          <v-col>
            <v-text-field
              label="Address"
              :value="address"
              @input="$emit('update:address', $event.target.value)"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
  defineProps(['address'])
  defineEmits(['update:address'])
</script>