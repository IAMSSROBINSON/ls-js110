function lightsOn(switches) {
  // ...
  let arrayOfLights = initialize(switches);
  for (let count = 1; count <= switches; count++) {
    arrayOfLights = toggle(arrayOfLights, count);
  }

  let onLights = [];
  arrayOfLights.forEach((element, index) => {
    if (element === true) {
      onLights.push(index + 1);
    }
  });
  return onLights;
}

function toggle (arrayOfLights, count) {
  return arrayOfLights.map((element, index) => {
    return (index + 1) % count === 0 ? !element : element;
  });
}

function initialize (numberOfLights) {
  let arrayOfLights = [];

  for (let index = 0; index < numberOfLights; index++) {
    arrayOfLights.push(false);
  }
  return arrayOfLights;
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]


/*

You have a bank of switches before you, numbered from 1 to count. Every switch is connected to exactly one light that is initially off. You walk down the row of switches and toggle every one of them, that is, you flip every switch. All the lights are now on. You walk back to the beginning of the row and start another pass. On this second pass, you toggle switches 2, 4, 6, and so on. Now, every other light is on. On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. You continue to repeat this process until you have made count passes.

Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after count passes.


P: Understanding The Problem
Create a function that accepts the numberOfSwitches number argument.
The numberOfSwitches represent lights and all are initially off and start at a count of 1 to n(numberOfSwitches)

FirstPass => From the first switch to the last - turn them all on.
SecondPass => switches 2, 4, 6(every other light) is toggled on(does this mean that on each pass they all reset to off?)
ThirdPass => 3, 6, 9 (every multiple of 3) is toggled on.
Repeat => repeat the process until Count passes(numberOfSwitches = count)

The function should return the lights that are on at the end of all passes in an array.

Input: Number(n: numberOfSwitches)
Output: Array(the light elements that are on after the function operation)
Rules:
  Explicit:
  - Create a function
  - Receive argument(numberOfSwitches)
  - numberOfSwitchesArgument is also the numberOfPasses/count
  - Initially all lights are off
  - first iteration: all turned on
  - Return the on lights at the end in an array
  
  Implicit:
  - numberOfSwitches can be any number greater than 1

Questions:
argument: 5


E: Examples and Test Cases
lightsOn(5) returns [1, 4]



Mental Model:
receive argument
loop from 1 to argumentCount(5)
initialize array with 0(representing off)
[false, false, false, false, false]

loop, idx:0; while idx < array.length; idx++
array.map(element, index)
return index + 1 % count === 0 ? !element : element;

iterate over the array and return the index of the element with the value === true



D: Data Structure
Array: I will utilize an array data structure for this since labels are of no real value.


A: Algorithm
- start
- set function: lightsOn
- receive argument(numberOfLights)
- set function initialize(numberOfLights)
  - loop for numberOfLights and push false to array
  - return array: [false, false, false, false, false]
- loop: count = 1 while count <= numberOfLights
  - set function toggle(array, count)
    - loop index = 0; while index < array.length; index++ 
    - index + 1 % count === 0 ? !array[index] : array[index]
    - return array
- set result = []
  - loop over arrayOfLights
    - if element === true
    - push index + 1
- return result
- end


C: Code With Intent

*/