import { Subject } from 'rxjs';

// @ts-check

/**
 * @module cart
 */

/**
 * @typedef {import('./shop.js').ProductItem} ProductItem
 */


/**
 * @typedef Cart
 * @property {ProductItem[]} items
 */


 /**
  * @type Cart
  */
const cart = {
  items: []
};

export const stream$ = new Subject();

loadFromCache();

function loadFromCache () {
  const cache = localStorage.getItem('shopify-cart');
  if (cache) {

    /** @type Cart */
    const raw = JSON.parse(cache);
    cart.items = raw.items;
  } else {
    saveToCache();
  }
}

function saveToCache () {
  localStorage.setItem('shopify-cart', JSON.stringify(cart));
  stream$.next(cart.items);
}



/**
 * @return ProductItem[]
 */
export const getItems = () => {
  return cart.items;
}

/**
 * @param {ProductItem} productItem 
 */
export const addItem = (productItem) => {
  if (!productItem) return;
  const hasItem = cart.items.find(item => item.id === productItem.id);
  if (hasItem) {
    return;
  }
  cart.items.push(productItem);
  saveToCache();
}

/**
 * @param {ProductItem} productItem 
 */
export const removeItem = (productItem) => {
  cart.items = cart.items.filter(product => product.id !== productItem.id);
  saveToCache();
}


export const clearAll = () => {
  cart.items = [];
  saveToCache();
}
