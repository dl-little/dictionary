import { faker } from '@faker-js/faker';

class USER {
  constructor() {
    this.name = faker.person.fullName();
    this.email = faker.internet.email({ firstName: this.name });
    this.phoneNumber = faker.phone.number();
    this.city = faker.location.city();
    this.state = faker.location.state({ abbreviated: true });
    this.country = 'United States';
    this.address = faker.location.streetAddress();
    this.secondaryAddress = faker.location.secondaryAddress();
    this.fullAddress = `${this.address}, ${this.secondaryAddress}, ${
      this.city
    }, ${this.state} ${faker.location.zipCode()}`;
  }
}

export default USER;
