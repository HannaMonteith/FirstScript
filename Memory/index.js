console.log('hi');

// define a name and show it on the screen
const name = 'Hermione';
const nameElement = document.getElementById('name');
console.log('name element', nameElement);
nameElement.textContent = name;

// define an age and show that on the screen
const age = 11;
const ageElement = document.getElementById('age');
ageElement.textContent = age;

//create css classes for is good/not
//show the right word/class styles on the screen depending
const isGood = true;
const goodClass = isGood ? 'good' : 'not good';
const isGoodElement = document.getElementById('isGood');
isGoodElement.textContent = isGood;