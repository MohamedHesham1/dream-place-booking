<script setup>
import { getSearchDestination } from '@/api/apiCalls';
import AppButton from '@/components/AppButton.vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { computed, onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

defineProps({
  position: {
    type: String,
  },
});

const router = useRouter();
const route = useRoute();
const citiesDetails = ref([]);
const formValues = ref({
  place: null,
  checkInDate: null,
  checkOutDate: null,
  guests: null,
  rooms: null,
});

if (Object.keys(route.query).length > 0) {
  const { place, checkInDate, checkOutDate, guests, rooms } =
    router.currentRoute.value.query;
  formValues.value = {
    place,
    checkInDate: new Date(checkInDate),
    checkOutDate: new Date(checkOutDate),
    guests,
    rooms,
  };
}

const today = computed(() => new Date());
const tomorrow = computed(() => {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  return date;
});
const options = computed(() => {
  return [
    { value: null, text: 'Where are you going?', disabled: true },
    ...citiesDetails.value.map((city) => ({
      value: city.name,
      text: city.name,
    })),
  ];
});

const getDestId = (destination) => {
  return citiesDetails.value.find((city) => city.name === destination).dest_id;
};

const handleSubmit = () => {
  const { place, checkInDate, checkOutDate, guests, rooms } = formValues.value;
  const query = {
    place,
    checkInDate: checkInDate.toISOString(),
    checkOutDate: checkOutDate.toISOString(),
    guests,
    rooms,
    destId: getDestId(place),
  };
  router.push({
    name: 'Search Results',
    query,
  });
};

onMounted(async () => {
  getSearchDestination(citiesDetails);
});
</script>

<template>
  <!-- unfinished -->
  <form
    @submit.prevent="handleSubmit"
    class="search-form flex gap-[15px] absolute z-10 rounded-lg pt-[10px] pb-[11px] pr-[13px] pl-[12px] bg-white max-w-[1030px]"
    :style="`top: ${position}`"
  >
    <select
      id="place"
      v-model="formValues.place"
      name="place"
      aria-label="Where are you going?"
      class="max-w-[206px]"
      required
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        :disabled="option.disabled"
        :hidden="option.hidden"
      >
        {{ option.text }}
      </option>
    </select>

    <VueDatePicker
      v-model="formValues.checkInDate"
      placeholder="Check in date"
      :enable-time-picker="false"
      :min-date="today"
      required
    >
      <template #input-icon>
        <img
          class="input-slot-image pl-[12px]"
          src="@/assets/images/homePage/icon-calendar.svg"
        />
      </template>
    </VueDatePicker>

    <VueDatePicker
      v-model="formValues.checkOutDate"
      placeholder="Check out date"
      :enable-time-picker="false"
      :min-date="tomorrow"
      required
    >
      <template #input-icon>
        <img
          class="input-slot-image pl-[12px]"
          src="@/assets/images/homePage/icon-calendar.svg"
        />
      </template>
    </VueDatePicker>

    <input
      type="text"
      name="guests"
      id="guests"
      v-model.trim="formValues.guests"
      aria-label="Guests"
      placeholder="Guests"
      required
    />
    <input
      type="text"
      name="rooms"
      id="rooms"
      v-model.trim="formValues.rooms"
      aria-label="Rooms"
      placeholder="Rooms"
      required
    />
    <AppButton>Search</AppButton>
  </form>
</template>

<style scoped>
.search-form {
  box-shadow: 0px 4px 37px 0px rgba(0, 0, 0, 0.15);
}

input,
select {
  background-color: #f2f2f2;
  padding: 11px 12px 12px 12px;
  border-radius: 4px;
  max-width: 148px;
}
.dp__theme_light {
  --dp-background-color: #f2f2f2;
  --dp-input-padding: 11px 12px;
}
</style>
