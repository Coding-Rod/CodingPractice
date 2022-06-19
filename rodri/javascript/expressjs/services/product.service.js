const faker = require('faker');

class ProductService {
  constructor() {
    this.products = [];
    this.generate();
  }
  async generate(limit=100) {
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
  async create(body) {
    body['id'] = faker.datatype.uuid();
    this.products.push(body);
    return body;
  }
  async find(limit=this.products.length, offset=0) {
    limit = parseInt(limit, 10);
    offset = parseInt(offset, 10);
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.products.slice(offset, offset + limit)), 5000);
    })
    // return this.products.slice(offset, limit+offset);
  }
  async findOne(id) {
    const name = this.getTotal();
    return this.products.find(item => item.id === id);
  }
  async update(id, body) {
    const index = this.products.findIndex(item => item.id === id);
    if (index == -1)
      throw new Error(' Product not found: ' + id)
    else
      Object.assign(this.products[index], body);
    return this.products[index];
  }
  async delete(id) {
    this.products = this.products.filter(x=>x.id!=id)
  }
}

module.exports = ProductService;
