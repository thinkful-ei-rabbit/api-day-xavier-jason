export default {
  getItems,
  createItem
};

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/xavier-jason';

function getItems() {
  return fetch(`${BASE_URL}/items`);
}

function createItem(name) {
  let object = {name: name};
  let newItem = JSON.stringify(object);
  return fetch(`${BASE_URL}/items`, {method:'POST',headers:{'Content-Type': 'application/json'}, body: newItem});
}