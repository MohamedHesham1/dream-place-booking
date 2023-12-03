<script setup>
import { getDescriptionAndInfo, getHotelDetails } from '@/api/apiCalls';
import { onBeforeMount, ref } from 'vue';
import { useTripStore } from '@/stores/tripStore.js';
import halfStar from '@/assets/images/icon-half-star.svg';
import star from '@/assets/images/icon-star.svg';
import AppButton from '@/components/AppButton.vue';
import AppNotice from '@/components/AppNotice.vue';

const tripStore = useTripStore();

const hotel = ref({});
const hotelRooms = ref([]);
const description = ref([]);
const beds = ref([]);

const {
  hotelId,
  arrivalDate,
  departureDate,
  hotelRating: rating,
  totalReviews,
} = tripStore.currentTrip;

const updateTripProperties = () => {
  if (hotelRooms.value.photos[0].url_max1280) {
    tripStore.updateTripProperties({
      imgUrl: hotelRooms.value.photos[0].url_max1280,
    });
  }
};

onBeforeMount(async () => {
  const hotelData = await getHotelDetails(hotelId, arrivalDate, departureDate);

  const descriptionData = await getDescriptionAndInfo(hotelId);

  hotel.value = hotelData;
  description.value = descriptionData;
  hotelRooms.value = hotel.value.rooms[Object.keys(hotelData.rooms)[0]];
  beds.value = hotelRooms.value.bed_configurations[0];

  console.log('hotelRooms', hotelRooms.value);
  console.log('beds', beds.value);
});
</script>

<template>
  <section>
    <div class="max-w-[1240px] mx-auto">
      <div class="gallery mt-6 mb-6">
        <ul v-if="hotelRooms" class="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <li>
            <a href="#" class="group relative block">
              <img
                :src="hotelRooms?.photos[2]?.url_max750"
                alt=""
                class="w-full max-w-[500px] max-h-[218px] rounded-[5px] object-cover transition duration-500 group-hover:opacity-90"
              />
            </a>
          </li>

          <li>
            <a href="#" class="group relative block">
              <img
                :src="hotelRooms?.photos[1].url_max750"
                alt=""
                class="w-full max-w-[500px] max-h-[218px] rounded-[5px] object-cover transition duration-500 group-hover:opacity-90"
              />
            </a>
          </li>

          <li class="lg:col-span-2 lg:col-start-1 lg:row-span-2 lg:row-start-1">
            <a href="#" class="group relative block">
              <img
                :src="hotelRooms?.photos[0].url_max1280"
                alt=""
                class="w-full max-w-[820px] max-h-[452px] rounded-[5px] object-cover transition duration-500 group-hover:opacity-90"
              />
            </a>
          </li>
        </ul>
        <div
          v-else
          class="bg-blue-100 text-blue-800 px-4 py-4 rounded"
          role="alert"
        >
          <strong class="font-bold text-xl mr-4">Info!</strong>
          <span class="block text-lg sm:inline max-sm:mt-1"
            >There is no available photos for this hotel
          </span>
        </div>
      </div>
      <div class="text-gray-1 font-normal mb-2">
        <a
          href="#overview"
          class="border-b-[3px] border-primary py-[10px] px-[14px] mr-[14px]"
        >
          Overview
        </a>
        <a href="#available-rooms" class="py-[10px] px-[14px]"> Rooms </a>
      </div>
    </div>
  </section>

  <section class="bg-[#F4F4F4]">
    <div class="max-w-[1240px] mx-auto">
      <div class="flex gap-[30px]">
        <div class="left-col flex flex-col mt-10">
          <h1
            class="text-secondary text-[2rem] font-bold title-font mb-3 tracking-[0.32px]"
          >
            {{ hotel.hotel_name }}
          </h1>

          <div
            class="review-rating flex font-normal text-sm text-gray-2 tracking-[0.28px] mb-3"
          >
            <ul class="flex">
              <li v-for="n in 5" :key="n">
                <img v-if="rating >= n" :src="star" />
                <img
                  v-else-if="rating >= n - 0.5 && rating < n"
                  :src="halfStar"
                />
              </li>
            </ul>
            <p class="ml-3">{{ rating }} ({{ totalReviews }} Reviews)</p>
          </div>

          <div class="mb-[31px] text-gray-1">
            <img
              class="inline mr-[6px]"
              src="@/assets/images/icon-location2.svg"
              alt=""
            />
            <span class="text-sm font-normal">
              {{ hotel.address }}
            </span>
          </div>

          <div
            class="bg-white text-gray-2 font-normal pt-6 pr-10 pb-10 pl-[30px] mb-10 rounded-md"
          >
            <h2
              id="overview"
              class="text-secondary text-lg font-medium tracking-[0.18px] mb-[26px]"
            >
              Overview
            </h2>
            <p class="mb-5 tracking-[0.32px]">
              {{ description[0]?.description }}
            </p>
            <p class="mb-11 tracking-[0.32px]">
              {{ description[1]?.description }}
            </p>
            <hr class="border-none h-[1px] bg-gray-5 mb-[26px]" />

            <h3
              class="text-secondary text-lg font-medium tracking-[0.18px] mb-[24px]"
            >
              Top facilities
            </h3>

            <div class="grid gap-3 text-[.9375rem]">
              <div
                v-for="(fac, index) in hotel.facilities_block?.facilities"
                :key="fac.name"
                :style="
                  'grid-column-start: ' +
                  ((index %
                    Math.ceil(hotel.facilities_block?.facilities.length / 3)) +
                    1)
                "
              >
                <div class="flex gap-3">
                  <img
                    src="@/assets/images/icon-like.svg"
                    class="w-[22px] h-[22px]"
                    alt=""
                  />
                  <p>{{ fac.name }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="right-col mt-10">
          <iframe
            class="w-[400px] h-[240px] rounded-md mb-[35px]"
            :src="`https://maps.google.com/maps?q=${hotel.latitude},${hotel.longitude}&z=15&output=embed`"
          ></iframe>

          <h2
            class="text-secondary text-lg font-medium tracking-[0.18px] mb-[22px]"
          >
            Explore the area
          </h2>
          <div class="flex justify-between text-gray-2 text-sm font-normal">
            <div class="flex flex-col">
              <div class="flex gap-3 mb-3">
                <img
                  src="@/assets/images/icon-plane.svg"
                  class="w-5 h-5"
                  alt=""
                />
                <p>The Marriott Mena House Hotel</p>
              </div>
              <div class="flex gap-3 mb-3">
                <img
                  src="@/assets/images/icon-location1.svg"
                  class="w-5 h-5"
                  alt=""
                />
                <p>The Steigenberger Golf Resort</p>
              </div>
              <div class="flex gap-3 mb-3">
                <img
                  src="@/assets/images/icon-location1.svg"
                  class="w-5 h-5"
                  alt=""
                />
                <p>Four Seasons Hotel Cairo</p>
              </div>
              <div class="flex gap-3 mb-3">
                <img
                  src="@/assets/images/icon-location1.svg"
                  class="w-5 h-5"
                  alt=""
                />
                <p>Ramses Hilton</p>
              </div>
              <div class="flex gap-3 mb-3">
                <img
                  src="@/assets/images/icon-location1.svg"
                  class="w-5 h-5"
                  alt=""
                />
                <p>The Nile Ritz-Carlton</p>
              </div>
            </div>
            <div class="flex flex-col">
              <p class="mb-3">2 min drive</p>
              <p class="mb-3">10 min drive</p>
              <p class="mb-3">15 min drive</p>
              <p class="mb-3">18 min drive</p>
              <p class="mb-3">32 min drive</p>
            </div>
          </div>
        </div>
      </div>

      <section class="mb-[172px]">
        <h2
          id="available-rooms"
          class="text-secondary text-2xl font-semibold mb-[32px]"
        >
          Available rooms
        </h2>

        <div class="flex gap-[15px]">
          <div
            class="flex pt-[35px] pl-[28px] pb-[14px] pr-[69px] bg-[linear-gradient(180deg,#4796FF,#2366BF)] rounded-md max-h-[340px]"
          >
            <div class="flex flex-col items-start mt-7">
              <div class="flex justify-center items-center mb-7">
                <img
                  class="white-icon"
                  src="@/assets/images/homePage/icon-plane.svg"
                  alt=""
                />
                <span class="ml-3 text-lg text-white">my Dream Place</span>
              </div>

              <p class="text-white font-bold text-2xl max-w-[195px]">
                20% off Use Promotional Coupon Code:
                <span class="text-[#FFD723]">Orlando</span>
              </p>
            </div>
            <img class="-ml-[60px]" src="@/assets/images/frame.svg" alt="" />
          </div>

          <div class="room-cards flex flex-wrap">
            <div
              v-for="(bed, index) in beds.bed_types"
              :key="index"
              class="bed-card bg-white shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] w-full max-w-[400px] font-[sans-serif] mx-auto"
            >
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/1280x900/206959369.jpg?k=3a339d8d4be6dec699dd5db1443a341780933ce1c75ae9d2a0bbb8f10bac0274&o="
                class="h-[200px] w-[400px] rounded-tl-md rounded-tr-md"
              />
              <div class="px-5 pb-6 pt-5">
                <h3 class="text-lg font-semibold mb-[18px]">
                  {{ bed.name || bed.name_with_count }}
                </h3>

                <div class="flex gap-3 mb-[10px]" v-if="bed.description">
                  <img
                    src="@/assets/images/icon-bag.svg"
                    class="w-5 h-w-5"
                    alt=""
                  />
                  <p>{{ bed.description }}</p>
                </div>
                <div class="flex gap-3 mb-[10px]" v-if="bed.count">
                  <img
                    src="@/assets/images/icon-lifebuoy.svg"
                    class="w-5 h-w-5"
                    alt=""
                  />
                  <p>Sleeps {{ bed.count }}</p>
                </div>
                <div class="flex gap-3 mb-6" v-if="bed.name_with_count">
                  <img
                    src="@/assets/images/icon-like.svg"
                    class="w-5 h-w-5"
                    alt=""
                  />
                  <p>{{ bed.name_with_count }}</p>
                </div>

                <router-link
                  :to="{
                    name: 'Checkout',
                  }"
                >
                  <AppButton
                    paddingY="py-[12px]"
                    width="w-full"
                    @click="updateTripProperties"
                  >
                    Reserve suite</AppButton
                  >
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AppNotice marginBottom="mb-[80px]" />

      <div class="invisible">filler</div>
    </div>
  </section>
</template>

<style scoped>
.gray-icon {
  filter: invert(53%) sepia(42%) saturate(0%) hue-rotate(202deg) brightness(88%)
    contrast(83%);
}
.white-icon {
  filter: brightness(0) invert(1);
}
</style>
