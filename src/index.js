import $ from 'jquery';
import 'normalize.css';
import './index.css';

import shoppingList from './shopping-list';
import api from 'api';

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
