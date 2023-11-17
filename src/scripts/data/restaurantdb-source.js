/* eslint-disable linebreak-style */
import API_ENDPOINT from '../globals/api-endpoint';

class TheRestaurantDBSource {
  static async restaurantList() {
    const response = await fetch(API_ENDPOINT.RESTAURANTS);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailList(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async addReview() {
    const response = await fetch(API_ENDPOINT.ADD_REVIEW);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }
}

export default TheRestaurantDBSource;
