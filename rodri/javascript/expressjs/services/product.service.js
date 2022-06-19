const faker = require('faker');

class ProductService {
  constructor() {
    this.products = [];
    this.generate();
  }
  generate(limit=100) {
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      })
    }
    console.log(this.products)
  }
  create(body) {
    body['id'] = faker.datatype.uuid();
    this.products.push(body);
    return body;
  }
  find(limit=this.products.length, offset=0) {
    limit = parseInt(limit, 10);
    offset = parseInt(offset, 10);
    return this.products.slice(offset, limit+offset);
  }
  findOne(id) {
    return this.products.find(item => item.id === id);
  }
  update(id, body) {
    const index = this.products.findIndex(item => item.id === id);
    if (index == -1)
      throw new Error(' Product not found: ' + id)
    else
      Object.assign(this.products[index], body);
    return this.products[index];
  }
  delete(id) {
    this.products = this.products.filter(x=>x.id!=id)
  }
}

module.exports = ProductService;
