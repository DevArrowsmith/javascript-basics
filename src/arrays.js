const getNthElement = (index, array) => array[index%(array.length)];

const arrayToCSVString = array => array.join();

const csvStringToArray = string => string.split(",");

const addToArray = (element, array) =>{ 
  array.push(element);
};

const addToArray2 = (element, array) => [...array, element];

const removeNthElement = (index, array) => {
  array.splice(index, 1);
};

const numbersToStrings = numbers => numbers.map(num => {
  return num.toString();
});

const uppercaseWordsInArray = strings => strings.map(string => {
  return string.toUpperCase();
});

const reverseWordsInArray = strings => strings.map(string => {
  return string.split("").reverse().join("");
});

const onlyEven = numbers => numbers.filter(number => !(number%2));

const removeNthElement2 = (index, array) => array.filter(element => array.indexOf(element) !== index);

const elementsStartingWithAVowel = strings => strings.filter(string => /[aeiou]/gi.test(string[0]));

const removeSpaces = string => {
  // your code here
};

const sumNumbers = numbers => {
  // your code here
};

const sortByLastLetter = strings => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
