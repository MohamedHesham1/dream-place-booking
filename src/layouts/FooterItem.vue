<script setup></script>

<template>
  <div class="max-w-[1240px] mx-auto mb-[60px]">
    <div class="flex items-start flex-wrap">
      <div>
        <router-link to="/" class="flex items-center">
          <img src="@/assets/images/homePage/icon-plane.svg" alt="" />
          <span class="ml-3 text-lg font-semibold text-[#1B1F2D]"
            >my Dream Place</span
          >
        </router-link>
        <p class="mt-[6px] ml-7 text-sm text-gray-2 tracking-[0.28px]">
          Your next goto companion for <br />
          travel
        </p>
      </div>

      <div class="flex pl-[90px] text-left flex-grow justify-between">
        <div>
          <h2 class="mb-5">Company</h2>
          <nav>
            <ul>
              <li>
                <a class="text-gray-2 text-sm">About</a>
              </li>
              <li>
                <a class="text-gray-2 text-sm">Jobs</a>
              </li>
              <li>
                <a class="text-gray-2 text-sm">Newsroom</a>
              </li>
              <li>
                <a class="text-gray-2 text-sm">Advertising</a>
              </li>
              <li>
                <a class="text-gray-2 text-sm">Contact us</a>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <h2 class="mb-5">Explore</h2>
          <nav>
            <ul>
              <li>
                <a class="text-gray-2 text-sm">Australia</a>
              </li>
              <li>
                <a class="text-gray-2 text-sm">New Zealand</a>
              </li>
              <li>
                <a class="text-gray-2 text-sm">United States America (USA)</a>
              </li>
              <li>
                <a class="text-gray-2 text-sm">Greece</a>
              </li>
              <li>
                <a class="text-gray-2 text-sm">Maldives</a>
              </li>
              <li>
                <a class="text-gray-2 text-sm">Singapore</a>
              </li>
              <li>
                <a class="text-primary text-sm">See more</a>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <h2 class="mb-5">Terms and Policies</h2>
          <nav>
            <ul>
              <li>
                <a class="text-gray-2 text-sm">Privacy Policy</a>
              </li>
              <li>
                <a class="text-gray-2 text-sm">Terms of use</a>
              </li>
              <li>
                <a class="text-gray-2 text-sm">Accessibility</a>
              </li>
              <li>
                <a class="text-gray-2 text-sm">Reward system policy</a>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <h2 class="mb-5">Help</h2>
          <nav>
            <ul>
              <li>
                <a class="text-gray-2 text-sm">Support</a>
              </li>
              <li>
                <a class="text-gray-2 text-sm">Cancel your bookings</a>
              </li>
              <li>
                <a class="text-gray-2 text-sm">Use Coupon</a>
              </li>
              <li>
                <a class="text-gray-2 text-sm">Refund Policies</a>
              </li>
              <li>
                <a class="text-gray-2 text-sm"
                  >International Travel Documents</a
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-gray-100 h-10">
    <div class="flex justify-end py-[10px] items-center pr-[205px]">
      <img src="@/assets/images/homePage/icon-copyright.svg" alt="" />
      <p class="text-gray-2 pl-[6px] text-sm">my Dream Place 2022</p>
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-weight: 500;
  color: #000;
  letter-spacing: 0.32px;
}
li {
  margin-bottom: 10px;
  cursor: pointer;
}
li a:hover {
  text-decoration: underline;
}
</style>
