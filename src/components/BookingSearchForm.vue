<script setup>
import { fetchData } from '@/api/api';
import AppButton from '@/components/AppButton.vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

defineProps({
  position: {
    type: String,
  },
});

const router = useRouter();
const formValues = ref({ place: null });
const cities = ref([]);

const handleSubmit = () => {
  const query = {
    place: formValues.value.place,
    checkInDate: formValues.value.checkInDate.toISOString(),
    checkOutDate: formValues.value.checkOutDate.toISOString(),
    guests: formValues.value.guests,
    rooms: formValues.value.rooms,
  };

  router.push({
    name: 'Search Results',
    query,
  });
};

const today = computed(() => new Date());
const tomorrow = computed(() => {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  return date;
});

const getCityNames = async () => {
  try {
    const data = await fetchData('hotels/searchDestination', {
      query: 'egypt',
    });
    cities.value = data.data
      .filter((destination) => destination.dest_type === 'city')
      .map((city) => city.name);
  } catch (error) {
    console.error(error);
  }
};

onMounted(getCityNames);

const options = computed(() => {
  return [
    { value: null, text: 'Where are you going?', disabled: true },
    ...cities.value.map((city) => ({ value: city, text: city })),
  ];
});
</script>

<template>
  <!-- unfinished -->
  <form
    @submit.prevent="handleSubmit"
    class="search-form flex gap-[15px] relative z-10 rounded-lg pt-[10px] pb-[11px] pr-[13px] pl-[12px] bg-white max-w-[1030px]"
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
