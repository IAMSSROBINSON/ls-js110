
// Picks n random elements from an array,
// and returns a new array with those elements.
function random(array, n) {
  if (n === undefined) {
    n = 1;
  }

  let elements = array.slice();
  let randomElements = [];

  while (n > 0 && elements.length > 0) {
    let randomIndex = Math.floor(Math.random() * elements.length);
    let randomElement = elements[randomIndex];

    randomElements.push(randomElement);
    elements.splice(randomIndex, 1);
    n--;
  }

  return randomElements;
}

// Ingredients

let ingredients = ['rice', 'green bell pepper', 'mushrooms', 'carrot', 'kebab',
  'spinach', 'soy bean sprouts', 'mashed potatoes', 'corn', 'cucumber', 'peas'];

let spices = ['peri peri', 'cinnamon', 'nutmeg', 'cardamom', 'ground ginger',
  'poppy seed', 'cumin'];

let extras = ['peanuts', 'sesame seeds', 'egg', 'wasabi', 'soy sauce'];

// Name

let adjective  = ['Delicious', 'Hot', 'Exotic', 'Creative', 'Festive', 'Dark'];
let firstNoun  = ['Power', 'After Work', 'Holiday', 'Disco', 'Late Night'];
let secondNoun = ['Mix', 'Delight', 'Bowl', 'Chunk', 'Surprise', 'Bliss'];

// Generate!

let dishName = random(adjective) + random(firstNoun) + random(secondNoun);
let dish = random(ingredients, 3) + random(spices, 2) + random(extras, 1);

console.log('How about: ' + dishName.match(/[A-Z][a-z]*/g).join(' '));
// console.log('How about: ' + dishName.join(' '));
console.log('You need: ' + dishName.match(/[A-Z][a-z]*/g).join(', '));
// console.log('You need: ' + dish.join(', '));

/*

One bored and hungry evening we decided to randomly generate recipes. We can't wait to see the first suggestions, but JavaScript raises a TypeError, telling us that dishName.join is not a function. What is wrong?

On line 45 the `.join()` method is invoked on `dishName`. `dishName` is a string and `.join()` is an array method that can only be called on array prototypes to combine elements into a single string value. To fix the error the `.split()` method can be called on a string to coerce it to an array and the `.split()` method take a delimiter argument which is a character or sequence of characters used to be identified within the calling string to separate into smaller string elements delimited by the pattern.  

We can use the regEx .match() to return an array of matched elements
// We will use the pattern /[A-Z][a-z]* /g

// [A-Z] is presented first because we want to signify that any UpperCase character is what is required to be matched to match a string element.

// [a-z]* is presented after the uppercase pattern so that the uppercase character followed by 1 or more lowercase characters are to be included in the string delimited by the Uppercase character. The * states that the lowercase characters should not be 0 but 1 or more. 

// The `g` tells the regEx that we don't want to stop at the first match we want to continue for multiple.

*/