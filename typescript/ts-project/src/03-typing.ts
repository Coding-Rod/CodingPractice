// New scope from anonymous function automatically excecuted
(() => {
  let myProductName = "Product 1";
  let myProductPrize = 123;

  myProductName = "change";
  myProductName.toLowerCase();
  // myProductName = () => {}; // Error

  myProductPrize.toFixed();

  const myProductStock = 1000;
  const myProductName2 = "Product 2";
  // myProductStock = 2000; // Error
  // myProductName2 = "Product 3"; // Error

})();