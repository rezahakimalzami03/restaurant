/* eslint-disable padded-blocks */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable no-multi-spaces */

const assert = require('assert');

/* eslint-disable no-undef */
Feature('Liking Disliking Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
  I.see('Maaf, belum ada restaurant yang kamu sukai🙏', '#restaurants');
});

async function likingResto(I) {
  I.amOnPage('/#/home');
  I.seeElement('.posts_item_title a');

  const firstRestaurant = locate('.posts_item_title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.posts_item_title a');

  const likedRestaurantTitle = await I.grabTextFrom('.posts_item_title');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

}

async function dislikingResto(I) {
  I.amOnPage('/#/favorite');
  I.seeElement('.posts_item_title a');
  I.click('.posts_item_title a');
  I.seeElement('#likedButton');
  I.click('#likedButton');
  I.amOnPage('/#/favorite');
  I.see('Maaf, belum ada restaurant yang kamu sukai🙏', '#restaurants');
  pause();
}

Scenario('liking resto', async ({ I }) => {
  await likingResto(I);
});

Scenario('disliking resto', async ({ I }) => {
  await likingResto(I);
  await dislikingResto(I);
});
