<template>
  <v-card
    class="mx-auto py-2"
    width="1200"
    height="900"
    prepend-icon="mdi-map-marker-distance"
  >
    <v-card-title>
      <v-row>
        <v-col>
          <h2>Distance Calculator</h2>
        </v-col>
      </v-row>
    </v-card-title>
    <v-card-text>
    <v-row>
      <v-col cols="7">
        <v-row>
          <v-col>
            <v-row>
              <v-col>
              <DistanceInput
                :location-a-string="pointHolder.pointALocation"
                :location-b-string="pointHolder.pointBLocation"
                @update:locationAString="newInput => pointHolder.pointALocation = handleLocationUpdate(newInput)"
                @update:locationBString="newInput => pointHolder.pointBLocation = handleLocationUpdate(newInput)"
              />
              </v-col>
            </v-row>
            <v-row align="center">
              <v-col cols="3">
                <v-btn @click="calculateResults" color="primary">Calculate</v-btn>
              </v-col>
              <v-col cols="5">
                <h2>{{distanceBetweenPoints}}</h2>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    </v-card-text>
      <div id="mapDiv" />
  </v-card>
</template>
<script setup>
  import { Client } from '@googlemaps/google-maps-services-js';
  import { Loader } from '@googlemaps/js-api-loader';

  import DistanceInput from '../inputs/DistanceInput.vue';

  const emit = defineEmits(['error']);

  const {
    public: {
      GOOGLE_MAPS_API_KEY
    }
  } = useRuntimeConfig();
  let pointALocation = ref('');
  let pointBLocation = ref('');
  let pointHolder = reactive({
    pointALocation,
    pointBLocation
  })
  let showAlert = ref(false);
  let errorText = ref('');
  const result = reactive({
    distance: 0,
  });
  let markerArray = [];
  let map;
  const mapOptions = {
    center: {
      lat: 30,
      lng: -100
    },
    zoom: 4
  };
  const handleLocationUpdate = (newInputValue) => {
    markerArray.forEach(marker => {
      marker.setMap(null);
      markerArray = [];
    })
    return newInputValue
  }

  onMounted(async () => {
    const loader = new Loader({
      apiKey: GOOGLE_MAPS_API_KEY,
      version: 'weekly',
      libraries: ['places'],
    });

    await loader.importLibrary('maps').then(({ Map }) => {
      map = new Map(document.getElementById('mapDiv'), mapOptions);
      map.addListener('click', (e) => {
        const stringCoords = `${e.latLng?.lat()}, ${e.latLng?.lng()}`;
        if ((pointALocation.value !== '' && pointBLocation.value === '')) {
          pointBLocation.value = stringCoords;
        } else if (pointALocation.value !== '' && pointBLocation.value !== '') {
          markerArray.forEach((marker) => { 
            marker.setMap(null)
          });
          markerArray = [];
          pointHolder.pointALocation = stringCoords;
          pointHolder.pointBLocation = '';
        } else {
          pointHolder.pointALocation = stringCoords;
        }
        placeMarker(e.latLng);
        map.panTo(e.latLng);
      });
    }).catch((e) => {
      // do something
    });
  });

  const placeMarker = (latLng) => {
    const marker = new google.maps.Marker({
      position: latLng,
      map,
    });
    marker.addListener('click', (event) => {
      marker.setMap(null);
    });

    markerArray.push(marker);
  }
  const setBounds = (coordinateArray) => {
    const bounds = new google.maps.LatLngBounds()
    coordinateArray.forEach(coord => {
      bounds.extend(new google.maps.LatLng(coord.lat, coord.lng))
    });
    map.fitBounds(bounds)
  }

  const calculateResults = () => {
    let pointALocationString = toValue(pointHolder.pointALocation);
    let pointBLocationString = toValue(pointHolder.pointBLocation);
    const lat1 = pointHolder.pointALocation.split(',')[0];
    const lon1 = pointHolder.pointALocation.split(',')[1];
    const lat2 = pointHolder.pointBLocation.split(',')[0];
    const lon2 = pointHolder.pointBLocation.split(',')[1];
    if (!(pointALocationString.includes(',') && pointBLocationString.includes(','))) {
      emit('error', 'Please make sure the coordinates are comma separated');
      return;
    } else if ((lat1 === ''  || lon1 === '') || (lat2 === '' || lon2 === '')) {
      emit('error', 'Please make sure you include latitude and longitude');
      return;
    } else if ((lon1 >= 180 || lon1 <= -180) || lon2 >= 180 || lon2 <= -180) {
      emit('error', 'Please make sure you pick a valid longitude');
      return;
    } else if((lat1 >= 85 || lat1 <= -85) || (lat2 >= 85 || lat2 <= -85)) {
      emit('error', 'Please make sure you pick a valid latitude')
    } else {
      markerArray.forEach((marker) => { 
        marker.setMap(null);
      })
      markerArray = [];
      result.distance = calculateAirDistance(pointALocationString, pointBLocationString);
      placeMarker({ lat: Number(lat1), lng: Number(lon1) });
      placeMarker({ lat: Number(lat2), lng: Number(lon2) });
      setBounds([{ lat: Number(lat1), lng: Number(lon1) }, { lat: Number(lat2), lng: Number(lon2) }]);
    }
  };

const distanceBetweenPoints = computed(() => {
  return `"Distance: ${result.distance}km"`
})

</script>
<style scoped>
#mapDiv {
  /* position: absolute !important; */
  width: 650px;
  height: 450px;
  left: 500px;
  bottom: 300px;
}
#errorSnack {
  position: absolute important;
}
</style>