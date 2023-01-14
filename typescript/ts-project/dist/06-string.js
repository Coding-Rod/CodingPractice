"use strict";
(() => {
    let productTitle = 'Samsung Galaxy S10';
    productTitle = 'Samsung Galaxy S10+';
    console.log('procutTitle', productTitle);
    const productDescription = 'The best smartphone in the world';
    console.log('productDescription', productDescription);
    let productPrice = 100;
    let isNew = false;
    const summary = `
  Product: ${productTitle}
  Description: ${productDescription}
  Price: ${productPrice}
  Is New: ${isNew}
  `;
    console.log('summary', summary);
})();
