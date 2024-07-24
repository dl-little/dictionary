import { faker } from '@faker-js/faker';

class BANK_ACCOUNT {
  constructor() {
    this.accountName = faker.finance.accountName();
    this.accountNumber = faker.finance.accountNumber();
    this.accountBalance = faker.finance.amount({
      min: 5,
      max: 3000,
      dec: 2,
      symbol: '$',
      autoFormat: true,
    });
    this.accountPin = faker.finance.pin();
    this.routingNumber = faker.finance.routingNumber();
  }
}

export default BANK_ACCOUNT;
