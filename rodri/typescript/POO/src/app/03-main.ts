import { ProductHttpService } from "./services/product-http.service";


(async () => {
  const productService = new ProductHttpService();
  console.log('--'.repeat(10));

  const products = await productService.getAll();
  console.log(products.length);


  const productID = products[0].id;
  const product = await productService
    .update(productID, {
      title: 'Product 1 updated',
    })
    .catch((err) => console.log(err));
  console.log(product);

  const product2 = await productService
    .findOne(productID);
  console.log(product2);
})();
