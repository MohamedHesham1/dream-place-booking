<script setup>
import { useTripStore } from '@/stores/tripStore.js';
import AppButton from '@/components/AppButton.vue';
import halfStar from '@/assets/images/icon-half-star.svg';
import star from '@/assets/images/icon-star.svg';

const tripStore = useTripStore();
</script>

<template>
  <div class="max-w-[1240px] mx-auto mt-[60px]">
    <h1
      class="text-secondary text-[2rem] font-bold title-font mb-[30px] tracking-[0.32px]"
    >
      Secure your reservation
    </h1>

    <div
      v-for="(trip, index) in tripStore.bookedTrips"
      :key="index"
      class="bg-white flex w-full relative rounded-[5px] py-5 pl-5 pr-6 border border-gray-5 max-w-[1030px] mb-6"
    >
      <img
        :src="trip.imgUrl"
        class="w-full h-full rounded-[5px] max-w-[285px] max-h-[200px] self-center"
      />
      <div class="pl-6 flex justify-between">
        <div>
          <div class="flex justify-between">
            <h2
              class="text-xl text-black-1 tracking-[0.2px] font-medium mb-[10px]"
            >
              {{ trip.hotelName }}
            </h2>
          </div>

          <div
            class="review-rating flex font-normal text-sm text-gray-2 tracking-[0.28px] mb-[17px]"
          >
            <ul class="flex">
              <li v-for="n in 5" :key="n">
                <img v-if="trip.hotelRating >= n" :src="star" />
                <img
                  v-else-if="
                    trip.hotelRating >= n - 0.5 && trip.hotelRating < n
                  "
                  :src="halfStar"
                />
              </li>
            </ul>
            <p class="ml-3">
              {{ trip.hotelRating }} ({{ trip.totalReviews }} Reviews)
            </p>
          </div>
          <div
            class="mb-[18px] text-gray-2 flex flex-col justify-between gap-2"
          >
            <p class="text-sm text-[#EB5757] tracking-[0.26px]">
              Non refundable
            </p>
            <p>Check in: {{ trip.arrivalDate }}</p>
            <p>Check out: {{ trip.departureDate }}</p>
            <p>{{ trip.nightStay }}</p>
          </div>
        </div>
        <div class="flex flex-col self-end absolute right-6">
          <div>
            <div class="flex gap-2 mb-[6px] justify-end">
              <p
                v-if="trip.strikethroughPrice"
                class="line-through text-[#EB5757] text-sm font-medium self-center"
              >
                ${{ strikethroughPrice }}
              </p>
              <p class="text-gray-1 text-xl font-medium">
                ${{ trip.grossPrice }}
              </p>
            </div>
            <p class="text-gray-1 text-sm font-normal mb-[16px]">
              Includes taxes and fees
            </p>
          </div>
          <router-link
            :to="{
              name: 'Hotel Details',
            }"
          >
            <AppButton paddingY="py-[10px]" @click="updateTripProperties">
              See availability</AppButton
            >
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
