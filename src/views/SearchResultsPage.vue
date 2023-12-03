<script setup>
import { getSearchHotels, getSortby } from '@/api/apiCalls';
import AppNotice from '@/components/AppNotice.vue';
import BookingSearchForm from '@/components/BookingSearchForm.vue';
import HotelCard from '@/components/HotelCard.vue';
import PaginationItem from '@/components/PaginationItem.vue';
import RadioButton from '@/components/RadioButton.vue';
import RatingButton from '@/components/RatingButton.vue';
import { computed, onMounted, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const searchParams = new URLSearchParams(route.query);

const hotels = ref([]);
const sortOptions = ref([]);
const propertiesNumber = ref('');
const sortOption = ref('popularity');
const place = ref(searchParams.get('place'));
const currentPage = ref(1);
const searchValues = ref({
  dest_id: searchParams.get('destId'),
  search_type: 'CITY',
  arrival_date: searchParams.get('checkInDate').slice(0, 10),
  departure_date: searchParams.get('checkOutDate').slice(0, 10),
  adults: searchParams.get('guests'),
  room_qty: searchParams.get('rooms'),
});

const handleHotelData = async () => {
  const data = await getSearchHotels(sortOption.value, searchValues.value);
  propertiesNumber.value = data?.meta[0].title.split(' ')[0];
  hotels.value = data?.hotels;
};

const handlePageChanged = async (page) => {
  currentPage.value = page;
  await handleHotelData();
};

const totalPages = computed(() => Math.ceil(propertiesNumber.value / 20));

const paginationProps = computed(() => ({
  currentPage: currentPage.value,
  totalPages: totalPages.value,
}));

const headingText = computed(
  () => `${place.value} : ${propertiesNumber.value} search results found`
);

// refactor so that getSortby is called on change
watchEffect(async () => {
  place.value = new URLSearchParams(route.query).get('place');
  await handleHotelData();
});

onMounted(async () => {
  await handleHotelData();
  sortOptions.value = await getSortby(searchValues.value);
});
</script>

<template>
  <div class="flex justify-center items-center">
    <BookingSearchForm position="163px" />
  </div>
  <div class="max-w-[1240px] mx-auto">
    <div class="mb-[56px] mt-[235px] flex gap-[30px]">
      <aside class="max-w-[295px]">
        <div
          class="filter-name flex flex-col gap-4 rounded-md bg-gray-6 py-5 pl-[19px] pr-[17px] mb-5"
        >
          <h2 class="text-secondary text-base font-medium tracking-[0.16px]">
            Search by property name
          </h2>
          <div class="relative">
            <input
              type="search"
              placeholder="eg. Beach westpalm"
              class="pl-10 pr-4 py-3 border rounded w-64 focus:outline-none focus:ring focus:border-blue-300"
            />
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <img src="@/assets/images/icon-search.svg" alt="" />
            </div>
          </div>
        </div>

        <div class="filter-price flex flex-col mb-5">
          <h2
            class="text-secondary text-lg font-semibold tracking-[0.36px] pl-5 pb-5"
          >
            Filter by
          </h2>

          <div class="border border-gray-5 rounded-md">
            <div class="p-[18px] bg-gray-6 rounded-t-md rounded-b-none">
              <h3
                class="text-secondary text-base font-medium tracking-[0.16px]"
              >
                Your budget per day
              </h3>
            </div>

            <div class="pl-[18px] pr-5 pt-[18px] pb-5">
              <ul class="pb-2">
                <RadioButton v-for="n in 5" :key="n" :radioId="n"></RadioButton>
              </ul>

              <div class="flex items-center justify-between pb-2">
                <p>Set your own budget</p>

                <div class="flex items-center">
                  <label class="relative cursor-pointer">
                    <input type="checkbox" class="sr-only peer" />
                    <div
                      class="w-11 h-3 flex items-center bg-gray-300 rounded-full peer peer-checked:after:translate-x-full after:absolute after:left-0 peer-checked:after:-left-1 after:bg-white after:border after:border-gray-300 peer-checked:after:border-[#007bff] after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#007bff]"
                    ></div>
                  </label>
                </div>
              </div>

              <div
                class="border border-dashed border-[#D9D9D9] pt-[10px] pl-[10px] pr-7"
              >
                <div class="flex items-center justify-start gap-[13px] pb-2">
                  <input
                    type="text"
                    placeholder="Min budget"
                    class="text-center border border-gray-5 rounded max-w-[80px] p-3"
                  />
                  <input
                    type="text"
                    placeholder="Max budget"
                    class="text-center border border-gray-5 rounded max-w-[80px] p-3"
                  />
                </div>
                <p class="text-xs text-[#4F4F4F] font-normal pb-[3px]">
                  Press Enter to filter
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="filter-rating border border-gray-5 rounded-md">
          <div class="p-[18px] bg-gray-6 rounded-t-md rounded-b-none">
            <h2 class="text-secondary text-base font-medium tracking-[0.16px]">
              Rating
            </h2>
          </div>
          <div class="pl-[18px] pr-5 pt-[18px] pb-5">
            <p class="text-gray-2 text-sm font-normal tracking-[0.28px] mb-2">
              Show only ratings more than
            </p>

            <ul
              class="flex border-t border-b border-l border-gray-5 rounded-md"
            >
              <RatingButton v-for="n in 5" :key="n" :rating-id="n" />
            </ul>
          </div>
        </div>
      </aside>

      <section class="hotel-data mb-[70px]">
        <div class="flex justify-between mb-[36px]">
          <h1
            v-if="propertiesNumber"
            class="text-2xl text-secondary font-semibold"
          >
            {{ headingText }}
          </h1>
          <select
            v-if="sortOptions"
            name="sort-by"
            id="sort-by"
            class="py-2 px-3"
            v-model="sortOption"
          >
            <option
              v-for="option in sortOptions"
              :key="option.id"
              :value="option.id"
            >
              {{ option.title }}
            </option>
          </select>
        </div>

        <ul class="flex flex-col gap-6">
          <li v-for="hotel in hotels" :key="hotel.property.id">
            <HotelCard :hotel="hotel" />
          </li>
        </ul>
      </section>
    </div>

    <PaginationItem v-bind="paginationProps" @pageChanged="handlePageChanged" />

    <AppNotice marginBottom="mb-[70px]" />
  </div>
</template>

<style scoped></style>
