import { faker } from '@faker-js/faker';

class PRODUCT {
  constructor() {
    this.department = faker.commerce.department();
    this.isbn = faker.commerce.isbn();
    this.price = faker.commerce.price({ max: 200, symbol: '$' });
    this.product = faker.commerce.productName();
    this.description = faker.commerce.productDescription();
    this.material = faker.commerce.productMaterial();
  }
}

export default PRODUCT;
