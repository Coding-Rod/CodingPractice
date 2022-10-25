(() => {
  let productPrice = 100;
  productPrice = 12;
  console.log('productPrice', productPrice);

  let custumerAge: number = 32;
  // custumerAge = '32'; // Error
  custumerAge += 1 ;
  console.log('custumerAge', custumerAge);

  let productInStock: number = 10;
  console.log('productInStock', productInStock); // Error
  // if (productInStock > 10) { // Error
  //   console.log('productInStock', productInStock);
  // }

  let discount: number = parseInt('100');
  console.log('discount', discount);
  console.log(discount<=200? "Apply discount": "No discount");

  let hex = 0xfff;
  console.log('hex', hex);

  let bin = 0b1010;
  console.log('bin', bin);
})();