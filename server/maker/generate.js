import employee from './employee.js';

const generate = (numberOfDocs, type) => {
  let data = [];
  switch (type) {
    case 'employee':
      data = employee(numberOfDocs);
      break;
  }
  return data;
};

export default generate;
