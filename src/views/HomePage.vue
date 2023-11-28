<script setup>
import australia from '@/assets/images/homePage/australia.webp';
import downloadBanner from '@/assets/images/homePage/download-banner.webp';
import greece from '@/assets/images/homePage/greece.webp';
import hotel1 from '@/assets/images/homePage/hotel1.webp';
import hotel2 from '@/assets/images/homePage/hotel2.webp';
import hotel3 from '@/assets/images/homePage/hotel3.webp';
import hotel4 from '@/assets/images/homePage/hotel4.webp';
import japan from '@/assets/images/homePage/japan.webp';
import newZealand from '@/assets/images/homePage/new-zealand.webp';
import overlay1 from '@/assets/images/homePage/overlay1.webp';
import overlay2 from '@/assets/images/homePage/overlay2.webp';
import overlay3 from '@/assets/images/homePage/overlay3.webp';
import BookingSearchForm from '@/components/BookingSearchForm.vue';
import DestinationCard from '@/components/DestinationCard.vue';
import OverlayCard from '@/components/OverlayCard.vue';

const cards = [
  {
    id: 1,
    imageUrl: australia,
    title: 'Australia',
    description: '2246 properties',
  },
  {
    id: 2,
    imageUrl: japan,
    title: 'Japan',
    description: '1278 properties',
  },
  {
    id: 3,
    imageUrl: newZealand,
    title: 'New Zealand',
    description: '480 properties',
  },
  {
    id: 4,
    imageUrl: greece,
    title: 'Greece',
    description: '320 properties',
  },
];
const promoCards = [
  {
    id: 1,
    imageUrl: overlay1,
    title: 'Sydeny’s 10 most fashionable 5 star hotels',
    description:
      'Browse the fastest growing tourism sector in the heart of Australia tourism capital ....',
  },
  {
    id: 2,
    imageUrl: overlay2,
    title: 'Top cities for Vegan Travelers',
    description:
      'Top sites where you do not have to worry about being a vegan. Our tourist guide is here...',
  },
  {
    id: 3,
    imageUrl: overlay3,
    title: 'World’s top destinations during and post covid timeline',
    description:
      'Pandemic is still intact and will be here for a longer time. Here’s where your next destination...',
  },
];
const popularCards = [
  {
    id: 1,
    imageUrl: hotel1,
    title: 'Lakeside Motel Warefront',
    description: '2246 properties',
  },
  {
    id: 2,
    imageUrl: hotel2,
    title: 'Recce Graham resort',
    description: '1278 properties',
  },
  {
    id: 3,
    imageUrl: hotel3,
    title: 'Fireside Dinners',
    description: '480 properties',
  },
  {
    id: 4,
    imageUrl: hotel4,
    title: 'Oculous Inn Stay',
    description: '320 properties',
  },
];
</script>

<template>
  <div class="max-w-[1240px] mx-auto">
    <section class="mb-[82px]">
      <div class="flex flex-col h-[500px] relative justify-center items-center">
        <img
          alt="sydney city"
          class="w-full h-full object-cover object-bottom absolute rounded-[10px]"
          src="@/assets/images/homePage/cover-banner.webp"
        />
        <div class="text-center text-white relative z-10">
          <h1 class="text-[2rem] font-bold title-font mb-5">
            Enjoy Your Dream Vacation
          </h1>
          <p class="leading-7 font-normal text-xl tracking-[0.4px]">
            Plan and book our perfect trip with expert advice, travel tips,
            destination <br />
            information and inspiration from us
          </p>
        </div>
        <BookingSearchForm position="195px" />
      </div>
    </section>
    <div
      class="flex items-center py-[25px] w-full bg-[#FCEFCA] rounded-lg tracking-[0.32px] mb-[50px]"
    >
      <img
        src="@/assets/images/homePage/icon-danger.svg"
        alt=""
        class="mr-[19px] ml-6"
      />
      <p>
        Check the latest COVID-19 restrictions before you travel.
        <a href="#" class="text-primary hover:underline"> Learn more </a>
      </p>
    </div>
    <section class="mb-[60px]">
      <div>
        <h2 class="font-semibold mb-4 text-[28px] text-black-default">
          Enjoy your dream vacation
        </h2>
        <p class="tracking-[0.32px] mb-[30px]">
          Plan and book our perfect trip with expert advice, travel tips,
          destination information and inspiration from us
        </p>

        <ul class="flex gap-5 flex-wrap">
          <li v-for="card in cards" :key="card.id" class="">
            <DestinationCard
              :image-url="card.imageUrl"
              :title="card.title"
              :description="card.description"
            />
          </li>
        </ul>
      </div>
    </section>

    <section class="mb-[60px]">
      <div>
        <h2 class="font-semibold mb-6 text-[28px] text-black-default">
          Get inspiration for your next trip
        </h2>
        <ul class="flex flex-wrap gap-5">
          <li v-for="card in promoCards" :key="card.id">
            <OverlayCard
              :image-url="card.imageUrl"
              :title="card.title"
              :description="card.description"
            />
          </li>
        </ul>
      </div>
    </section>

    <section class="mb-[60px]">
      <div>
        <h2 class="font-semibold mb-6 text-[28px] text-black-default">
          Popular hotels
        </h2>
        <ul class="flex flex-wrap gap-5">
          <li v-for="card in popularCards" :key="card.id">
            <DestinationCard
              :image-url="card.imageUrl"
              :title="card.title"
              :description="card.description"
            />
          </li>
        </ul>
      </div>
    </section>
    <!-- needs to be fixed -->
    <div
      class="h-[280px] rounded-lg mb-[60px]"
      :style="{
        backgroundImage: `url(${downloadBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }"
    >
      <!-- <div class="py-[64px] pl-[69px]">
        <h2 class="text-white font-semibold text-[28px]">
          Download the mobile application for bonus <br />
          coupons and travel codes
        </h2>
        <AppButton> Download mobile app </AppButton>
      </div> -->
    </div>

    <div class="text-center mb-20">
      <h2 class="font-semibold mb-4 text-[28px] text-secondary">
        Explore the world with My Dream place
      </h2>
      <a href="#" class="text-primary hover:underline"
        >Discover new places and experiences</a
      >
    </div>
  </div>
</template>

<style scoped></style>
