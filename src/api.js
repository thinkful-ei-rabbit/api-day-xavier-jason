export default {
  getItems,
  createItem,
  updateItem,
  deleteItem
};

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/xavier-jason';

function getItems() {
  return fetchRequests(`${BASE_URL}/items`);
}

function createItem(name) {
  let object = {name: name};
  let newItem = JSON.stringify(object);
  return fetchRequests(`${BASE_URL}/items`, {method:'POST',headers:{'Content-Type': 'application/json'}, body: newItem});
}

function updateItem(id, obj) {
  let newItem = JSON.stringify(obj);
  return fetchRequests(`${BASE_URL}/items/${id}`, {method:'PATCH',headers:{'Content-Type': 'application/json'}, body: newItem});
}

function deleteItem(id) {
  return fetchRequests(`${BASE_URL}/items/${id}`, {method:'DELETE'});
}

function fetchRequests(...args){
  let error;
  return fetch(...args)
    .then(res => {
      if (!res.ok) {
        error = { code: res.status };
        if (!res.headers.get('content-type').includes('json')) {
          error.message = res.statusText;
          return Promise.reject(error);
        }
      }
      return res.json();
    })
    .then(data =>{
      if (error) {
        error.message = data.message;
        return Promise.reject(error);
      }
      return data;
    });
}
