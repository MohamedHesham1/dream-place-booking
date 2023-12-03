<script setup>
import AppNotice from '@/components/AppNotice.vue';
import AppButton from '@/components/AppButton.vue';
import { useTripStore } from '@/stores/tripStore.js';

const tripStore = useTripStore();

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const expOptions = ['2023', '2024', '2025', '2026', '2027', '2028'];

const bookTrip = () => {
  tripStore.bookTrip(tripStore.currentTrip);
};
</script>

<template>
  <section>
    <div class="max-w-[1240px] mx-auto">
      <h1
        class="text-secondary text-[2rem] font-bold title-font mb-[30px] tracking-[0.32px]"
      >
        Secure your reservation
      </h1>

      <AppNotice marginBottom="mb-[30px]" />

      <div>
        <div class="left-col flex flex-col">
          <div class="checkout-card border rounded-md max-w-[810px] mb-[30px]">
            <div
              class="flex items-center p-[18px] bg-primary rounded-t-md rounded-b-none text-white"
            >
              <img
                class="w-5 h-5 mr-[16px]"
                src="@/assets/images/icon-profile.svg"
                alt=""
              />
              <h2 class="text-base font-medium mr-[16px] tracking-[0.16px]">
                Room 1
              </h2>

              <p>2 adults, 1 double bed and 1 twin bed, Non-smoking</p>
            </div>

            <div class="pl-[18px] bg-white pr-5 pt-[18px] pb-5">
              <div class="flex">
                <div class="flex flex-col mr-5">
                  <label
                    class="text-secondary text-xs font-medium tracking-[0.28px] mb-1"
                    for="email"
                    >First name</label
                  >
                  <input
                    class="px-3 pt-[11px] pb-3 bg-gray-6 mb-5 rounded"
                    id="email"
                    v-model="email"
                    type="email"
                    required
                  />
                </div>
                <div class="flex flex-col">
                  <label
                    class="text-secondary text-xs font-medium tracking-[0.28px] mb-1"
                    for="email"
                    >Last name</label
                  >
                  <input
                    class="px-3 pt-[11px] pb-3 bg-gray-6 mb-5 rounded"
                    id="email"
                    v-model="email"
                    type="email"
                    required
                  />
                </div>
              </div>

              <div class="flex items-center mb-5">
                <div class="number-list mr-5 flex-[2]">
                  <div>
                    <label
                      for="HeadlineAct"
                      class="block text-sm font-medium text-gray-900"
                    >
                      Mobile number
                    </label>

                    <div class="relative mt-1.5">
                      <input
                        type="text"
                        list="countryCodes"
                        id="HeadlineAct"
                        class="px-3 pt-[11px] pb-3 bg-gray-6 rounded w-full border-gray-300 pe-10 text-gray-700 sm:text-sm [&::-webkit-calendar-picker-indicator]:opacity-0"
                        placeholder="+20"
                      />
                      <span
                        class="absolute inset-y-0 end-0 flex w-8 items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="h-5 w-5 text-gray-500"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                          />
                        </svg>
                      </span>
                    </div>
                    <datalist name="HeadlineAct" id="countryCodes">
                      <option value="+20">Egypt</option>
                      <option value="+840">USA</option>
                      <option value="+250">FRA</option>
                      <option value="+826">UK</option>
                    </datalist>
                  </div>
                </div>

                <div class="flex flex-col self-end grow-[2]">
                  <input
                    class="px-3 pt-[11px] pb-3 bg-gray-6 rounded w-full"
                    id="email"
                    v-model="email"
                    type="email"
                    required
                  />
                </div>
              </div>

              <div class="flex items-center">
                <input
                  id="checkbox1"
                  type="checkbox"
                  class="w-4 h-4 mr-3 focus:ring-1 focus:ring-offset-slate-200 focus:ring-offset-4 focus:ring-[#007bff]"
                />
                <label for="checkbox1" class="text-black text-sm"
                  >Receive text alerts about this trip.</label
                >
              </div>
            </div>
          </div>

          <div class="checkout-card border rounded-md max-w-[810px] mb-[30px]">
            <div
              class="flex items-center p-[18px] bg-primary rounded-t-md rounded-b-none text-white"
            >
              <img
                class="w-5 h-5 mr-[16px]"
                src="@/assets/images/icon-credit.svg"
                alt=""
              />
              <h2 class="text-base font-medium mr-[16px] tracking-[0.16px]">
                Payment options
              </h2>
            </div>

            <div class="pl-[18px] bg-white pr-5 pt-[18px] pb-5">
              <div class="text-gray-1 text-sm font-normal mb-2">
                <a
                  href="#overview"
                  class="border-b-[3px] border-primary py-[10px] px-[14px] mr-[14px]"
                >
                  Debit/Credit Card
                </a>
              </div>

              <hr class="border-none h-[1px] bg-gray-5 mb-[26px]" />

              <div class="flex flex-col">
                <div class="badges flex gap-[6px] mb-[26px]">
                  <div
                    class="flex items-center justify-center rounded-[5px] bg-gray-6 p-2"
                  >
                    <img src="@/assets/images/image 6.svg" alt="" />
                  </div>
                  <div
                    class="flex items-center justify-center rounded-[5px] bg-gray-6 p-2"
                  >
                    <img src="@/assets/images/image 7.png" alt="" />
                  </div>
                  <div
                    class="flex items-center justify-center rounded-[5px] bg-gray-6 p-2"
                  >
                    <img src="@/assets/images/image 10.png" alt="" />
                  </div>
                  <div
                    class="flex items-center justify-center rounded-[5px] bg-gray-6 p-2"
                  >
                    <img src="@/assets/images/image 8.png" alt="" />
                  </div>
                </div>
                <div class="flex flex-col max-w-[500px]">
                  <label
                    class="text-secondary text-xs font-medium tracking-[0.28px] mb-1"
                    for="email"
                    >Name on card</label
                  >
                  <input
                    class="px-3 pt-[11px] pb-3 bg-gray-6 mb-5 rounded"
                    id="email"
                    v-model="email"
                    type="email"
                    required
                  />
                </div>
                <div class="flex flex-col max-w-[500px]">
                  <label
                    class="text-secondary text-xs font-medium tracking-[0.28px] mb-1"
                    for="email"
                    >Debit/Credit card number</label
                  >
                  <input
                    class="px-3 pt-[11px] pb-3 bg-gray-6 mb-5 rounded"
                    id="email"
                    v-model="email"
                    type="email"
                    required
                  />
                </div>

                <div class="flex gap-5">
                  <div class="flex flex-col">
                    <label for="month">Security Code</label>
                    <select
                      id="month"
                      name="month"
                      aria-label="Where are you going?"
                      class="w-[126px] bg-gray-6 py-[10px] px-3"
                      required
                    >
                      <option
                        v-for="month in months"
                        :key="month"
                        :value="month"
                        :disabled="month.disabled"
                        :hidden="month.hidden"
                      >
                        {{ month }}
                      </option>
                    </select>
                  </div>

                  <div class="flex flex-col">
                    <label for="month">Billing Zip code</label>

                    <select
                      id="year"
                      name="year"
                      aria-label="Where are you going?"
                      class="w-[126px] bg-gray-6 py-[10px] px-3"
                      required
                    >
                      <option
                        v-for="option in expOptions"
                        :key="option"
                        :value="option"
                        :disabled="option.disabled"
                        :hidden="option.hidden"
                      >
                        {{ option }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="border bg-white rounded-md max-w-[810px] mb-[60px]">
          <div
            class="flex items-center p-[18px] bg-[#F2C94C] rounded-t-md rounded-b-none text-secondary"
          >
            <h2 class="text-base font-medium mr-[16px] tracking-[0.16px]">
              Important information about your booking
            </h2>
          </div>
          <div class="px-10 pt-8">
            <ol class="list-decimal">
              <li>
                This rate is non-refundable. If you change or cancel your
                booking you will not get a refund or credit to use for a future
                stay.
              </li>
              <li>Stay extensions will require a new reservation.</li>
              <li>Front desk staff will greet guests on arrival</li>
              <li>
                No refunds will be issued for late check-in or early check-out.
              </li>
            </ol>
          </div>

          <div class="text-gray-2 font-normal tracking-[0.28px] mt-5 px-6 pb-6">
            <p class="mb-5">
              By clicking the button below, I acknowledge that I have reviewed
              the
              <a class="text-primary underline" href="#">Privacy Statement</a>
              and have reviewd and accept the
              <a class="text-primary underline" href="#"
                >Rules and Restrictions
              </a>
              <a class="text-primary underline" href="#">and Terms of Use. </a>
            </p>

            <router-link
              :to="{
                name: 'My Trips',
              }"
            >
              <AppButton paddingY="py-[12px]" width="w-full" @click="bookTrip">
                Complete Booking</AppButton
              >
            </router-link>
          </div>
        </div>
        <div class="right-col"></div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
