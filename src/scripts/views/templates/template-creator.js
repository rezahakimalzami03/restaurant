/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="restaurant__detail">  
    <h2 class="restaurant__title">${restaurant.name}</h2>
    <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" style="width: 100%; height: auto;" />
        <div class="restaurant__information">
        <h3 class="label__information">Information</h3>
            <h4>Nama Restaurant</h4>
            <p>${restaurant.name}</p><br>
            <h4>Alamat</h4>
            <p>${restaurant.address}</p><br>
            <h4>Kota</h4>
            <p>${restaurant.city}</p><br>
            <h4>Deskripsi</h4>
            <p class="detail__deskripsi">${restaurant.description}</p><br>
            <h4>Menu Makanan</h4>
            <ul id="list">
            ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
            </ul>
            <h4>Menu Minuman</h4>
            <ul id="list">
            ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
            </ul><br>
            <h4>Rating</h4>
            <p>⭐️${restaurant.rating}</p><br>
            <h4>Customer Reviews</h4><br>
            ${restaurant.customerReviews.map((review) => `
            <h5>From ${review.name}</h5>
            <p>Komentar : ${review.review}</p>
            <p>Tanggal : ${review.date}</p><br>
            `).join('')}
            </div>
        </div>
    `;

const createRestaurantItemTemplate = (restaurant) => `
    <div class="posts">
    <img id="posts_thumb" class="lazyload" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" style="width: 100%; height: auto;" title="${restaurant.name}">
        <div class="posts_city">Kota : ${restaurant.city}</div>
            <div class="posts_item">
                <p class="posts_item_rate"><a href="#">⭐️ ${restaurant.rating}</a></p>
                <h1 class="posts_item_title"><a href="#/detail/${restaurant.id}">${restaurant.name}</a></h1>
                    <div class="posts_item_description">${restaurant.description}</div>
            </div>
        </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likedButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export { createRestaurantDetailTemplate, createRestaurantItemTemplate, createLikeButtonTemplate, createLikedButtonTemplate };
