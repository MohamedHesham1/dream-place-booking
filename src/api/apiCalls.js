import fetchData from './fetchData';

export const getSearchDestination = async (citiesDetails) => {
  try {
    const data = await fetchData('hotels/searchDestination', {
      query: 'egypt',
    });

    citiesDetails.value = data.data.reduce((result, destination) => {
      if (destination.dest_type === 'city') {
        result.push({ name: destination.name, dest_id: destination.dest_id });
      }
      return result;
    }, []);
  } catch (error) {
    console.error(error);
  }
};

export const getSearchHotels = async (sortOption, searchValues) => {
  try {
    const response = await fetchData('hotels/searchHotels', {
      ...searchValues,
      sort_by: sortOption,
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getSortby = async (searchValues) => {
  try {
    const response = await fetchData('hotels/getSortBy', {
      ...searchValues,
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getHotelDetails = async (hotelId, checkInDate, checkOutDate) => {
  try {
    const response = await fetchData('hotels/getHotelDetails', {
      hotel_id: hotelId,
      arrival_date: checkInDate,
      departure_date: checkOutDate,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getDescriptionAndInfo = async (hotelId) => {
  try {
    const response = await fetchData('hotels/getDescriptionAndInfo', {
      hotel_id: hotelId,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
