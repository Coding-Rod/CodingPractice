import axios from 'axios';

(async () => {
  const delay = (ms: number) => {
    const promise = new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve('true');
      }, ms);
    });
    return promise;
  }

  const getProducts = async () => {
    const { data } = await axios.get('https://api.escuelajs.co/api/v1/products');
    return data;
  }

  const resolve = await delay(300);
  console.log('3 seconds later...');
  const products = await getProducts();
  console.log(products);
})();