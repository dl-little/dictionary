import { faker } from '@faker-js/faker';

class EMPLOYEE {
  constructor() {
    this.name = faker.person.fullName();
    this.position = faker.person.jobTitle();
    this.descriptor = faker.person.jobDescriptor();
    this.area = faker.person.jobArea();
    this.level = faker.helpers.arrayElement(['intern', 'junior', 'senior']);
  }
}

export default EMPLOYEE;
