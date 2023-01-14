(()=>{
  let prices = [100, 200, 300, 'hola', true];
  // prices.push('400'); // Error
  // prices.push(true); // Error
  // prices.push({}); // Error
  prices.push(400);
  // prices = [1, 2, 3];

  let products = ['Samsung Galaxy S10', 'iPhone X', 'Huawei P30',true];
  // products.push(100); // Error
  // products.push({}); // Error
  products.push(false);

  let mixed: (string | number | boolean | Object)[] = ['Samsung Galaxy S10', 100, true];
  mixed.push('iPhone X');
  mixed.push(200);
  mixed.push(false);
  mixed.push({});
  mixed.push([]);
})();