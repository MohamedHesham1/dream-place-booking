<script setup>
import halfStar from '@/assets/images/icon-half-star.svg';
import star from '@/assets/images/icon-star.svg';
import AppButton from '@/components/AppButton.vue';
import { useTripStore } from '@/stores/tripStore.js';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const searchParams = new URLSearchParams(useRoute().query);

const tripStore = useTripStore();

const props = defineProps({
  hotel: {
    type: Object,
    required: true,
  },
});

const hotelName = computed(() => props.hotel.property.name);
const imgUrl = computed(() => props.hotel.property.photoUrls[0]);
const description = computed(() => props.hotel.accessibilityLabel);
const benefitBadge = computed(
  () => props.hotel.property.priceBreakdown.benefitBadges[0]?.text
);
const grossPrice = computed(() =>
  Number(props.hotel.property.priceBreakdown.grossPrice.value.toFixed(1))
);
const strikethroughPrice = computed(() =>
  Number(
    props.hotel.property.priceBreakdown.strikethroughPrice?.value.toFixed(1)
  )
);
const reviewRating = computed(() => props.hotel.property.reviewScore);
const totalReviews = computed(() => props.hotel.property.reviewCount);

const discountPercent = computed(() => {
  return Math.ceil(
    ((strikethroughPrice.value - grossPrice.value) / grossPrice.value) * 100
  );
});
const rating = computed(() => {
  return reviewRating.value / 2;
});

const arrivalDate = searchParams.get('checkInDate').slice(0, 10);
const departureDate = searchParams.get('checkOutDate').slice(0, 10);

function dateDiffInDays() {
  const arrivalParts = arrivalDate.split('-');
  const departParts = departureDate.split('-');
  const diffDays = Math.abs(departParts[2] - arrivalParts[2]);

  return `${diffDays} night stay`;
}

const updateTripProperties = () => {
  tripStore.updateTripProperties({
    hotelName,
    hotelId: props.hotel.property.id,
    imgUrl,
    arrivalDate,
    departureDate,
    hotelRating: rating.value,
    totalReviews,
    nightStay: dateDiffInDays(),
    grossPrice,
    strikethroughPrice,
  });
};
</script>

<template>
  <div
    class="bg-white flex w-full rounded-[5px] py-5 pl-5 pr-6 border border-gray-5"
  >
    <img
      :src="imgUrl"
      class="w-full h-full rounded-[5px] max-w-[285px] max-h-[200px] self-center"
    />
    <div class="pl-6 flex justify-between">
      <div>
        <div class="flex justify-between">
          <h2
            class="text-xl text-black-1 tracking-[0.2px] font-medium mb-[10px]"
          >
            {{ hotelName }}
          </h2>

          <div
            class="text-white text-[0.8125rem] font-medium tracking-[0.26px] px-2 py-1 bg-[#EB5757] rounded-md"
            v-if="benefitBadge"
          >
            {{ benefitBadge }}
          </div>
        </div>

        <div
          class="review-rating flex font-normal text-sm text-gray-2 tracking-[0.28px] mb-[17px]"
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
        <div class="mb-[18px] flex justify-between">
          <p class="text-[13px] text-gray-2 tracking-[0.26px]">
            {{ description }}
          </p>
          <div
            v-if="discountPercent"
            class="text-white text-[13px] font-medium tracking-[0.26px] px-2 py-1 bg-[#219653] rounded-md"
          >
            {{ discountPercent }}% off
          </div>
        </div>
        <div class="flex justify-between">
          <router-link
            :to="{
              name: 'Hotel Details',
            }"
          >
            <AppButton paddingY="py-[10px]" @click="updateTripProperties">
              See availability</AppButton
            >
          </router-link>
          <div>
            <div class="flex gap-2 mb-[6px ]">
              <p
                v-if="strikethroughPrice"
                class="line-through text-[#EB5757] text-sm font-medium self-center"
              >
                ${{ strikethroughPrice }}
              </p>
              <p class="text-gray-1 text-xl font-medium">${{ grossPrice }}</p>
            </div>
            <p class="text-gray-1 text-sm font-light">
              Includes taxes and fees
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
