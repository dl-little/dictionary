import { faker } from '@faker-js/faker';

const employee = (numberOfDocuments) => {
  let employees = [];
  const levels = ['intern', 'junior', 'senior'];

  for (let i = 0; i < numberOfDocuments; i++) {
    let name = `${faker.person.firstName()} ${faker.person.lastName()}`;
    let newEmployee = {
      name: name,
      position: faker.person.jobTitle(),
      descriptor: faker.person.jobDescriptor(),
      area: faker.person.jobArea(),
      level: levels[Math.floor(Math.random() * levels.length)],
    };

    employees.push(newEmployee);
  }

  return employees;
};

export default employee;
