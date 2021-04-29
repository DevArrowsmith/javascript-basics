const createPerson = (name, age) => {
  return {
    name: name,
    age: age
  };
};

const getName = object => object.name;

const getProperty = (property, object) => object[property];

const hasProperty = (property, object) => object.hasOwnProperty(property);

const isOver65 = person => person.age > 65;

const getAges = people => people.map(person => person.age);

const findByName = (name, people) => people.filter(person => person.name === name)[0];

const findHondas = cars => {
  // your code here
};

const averageAge = people => {
  // your code here
};

const createTalkingPerson = (name, age) => {
  // your code here
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
