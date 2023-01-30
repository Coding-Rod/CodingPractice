const faker = require('faker');

const productsGenerator = (count) => {
    const products = [];
    for (let i = 0; i < count; i++) {
        products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        description: faker.commerce.productDescription(),
        });
    }
    const newProducts =[
        ...products,
        {
            id: 'a1b2c3d4e5f6g7h8i9j0',
            name: 'Product 1',
            price: 100,
            description: 'Product 1 description',
        },
    ]
    return newProducts;
};

const products = productsGenerator(100);

// If the function finds an array element where the function returns a true value, find() returns the value of that array element (and does not check the remaining values)
// If no true value is found, find() returns undefined
const findProduct = (id) => products.find((product) => product.id === id);
console.log(findProduct('a1b2c3d4e5f6g7h8i9j0'));

// If the function finds an array element where the function returns a true value, findIndex() returns the index of that array element (and does not check the remaining values)
// If no true value is found, findIndex() returns -1
const index = products.findIndex((product) => product.id === 'a1b2c3d4e5f6g7h8i9j0');
console.log(index);