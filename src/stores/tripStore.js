import { defineStore } from 'pinia';

const initialTripState = {};

export const useTripStore = defineStore('trips', {
  id: 'trip',

  state: () => ({
    currentTrip: {},
    bookedTrips: [],
  }),
  actions: {
    updateTripProperties(properties) {
      this.currentTrip = { ...this.currentTrip, ...properties };
    },

    bookTrip(trip) {
      this.bookedTrips.push(trip);
      this.resetCurrentTrip();
    },

    resetCurrentTrip() {
      this.currentTrip = { ...initialTripState };
    },
  },
  persist: true,
});
