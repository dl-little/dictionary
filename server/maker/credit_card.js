import { faker } from '@faker-js/faker';

class CREDIT_CARD {
  constructor() {
    this.creditCardNumber = faker.finance.creditCardNumber();
    this.creditCardCVV = faker.finance.creditCardCVV();
    this.creditCardIssuer = faker.finance.creditCardIssuer();
    this.zip = faker.location.zipCode();
  }
}

export default CREDIT_CARD;
