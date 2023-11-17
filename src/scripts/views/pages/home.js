/* eslint-disable linebreak-style */
import TheRestaurantDBSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <section class="content">
      <div class="content-element">
      <h1 class="content-label">Explore Restaurant</h1>
      <div class="resto-content" id="restaurant-list"></div>
      </div>
    </section>
  `;
  },

  async afterRender() {
    const listRestaurant = await TheRestaurantDBSource.restaurantList();
    const restaurantContainer = document.querySelector('.resto-content');

    listRestaurant.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
