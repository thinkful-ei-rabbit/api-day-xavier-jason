export default {
  getItems
};

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/xavier-jason';

function getItems() {
    return fetch(`${BASE_URL}/items`);
}
