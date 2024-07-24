import EMPLOYEE from './employee.js';
import PRODUCT from './product.js';
import BANK_ACCOUNT from './bank_account.js';
import CREDIT_CARD from './credit_card.js';
import USER from './user.js';

class GENERATOR {
  constructor(numberOfDocs) {
    this.numberOfDocs = numberOfDocs;
  }

  execute(key) {
    let data = [];
    for (let i = 0; i < this.numberOfDocs; i++) {
      data.push(this[key]());
    }
    return data;
  }

  employee() {
    return { ...new EMPLOYEE() };
  }

  product() {
    return { ...new PRODUCT() };
  }

  credit_card() {
    return { ...new CREDIT_CARD() };
  }

  bank_account() {
    return { ...new BANK_ACCOUNT() };
  }

  user() {
    return { ...new USER() };
  }
}

const generate = (numberOfDocs, type) => {
  const generator = new GENERATOR(numberOfDocs);
  return generator.execute(type);
};

export default generate;
