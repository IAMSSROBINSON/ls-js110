function invokeObject () {
  return {
    PUSH: pushh,
    ADD : addd,
    SUB: subb,
    MULT: multt,
    DIV: divv,
    REMAINDER: remainderr,
    POP: popp,
    PRINT: printt
  };
}

function minilang (string) {
  let register = [0];
  let stack = [];
  let stringArray = string.split(' ');

  if (isNumber(stringArray[0])) {
    let functionReturned = invokeObject(register, stack);
    functionReturned.PRINT(register);
    return null;
  }

  for (let index = 0; index < stringArray.length; index++) {
    if (!isNumber(stringArray[index])) {
      register[0] = Number(stringArray[index]);
    } else {
      let methodToInvoke = invokeObject()[stringArray[index]];
      // console.log('methodToInvoke', methodToInvoke);
      methodToInvoke(register, stack);
    }
  }
}

function isNumber (element) {
 return Number.isNaN(Number(element)) === true;
}

function pushh (register, stack) {
  // PUSH : Push the register value onto the stack. Leave the value in the register.
  let registerValue = register[0];
  stack.push(registerValue);
}

function addd (register, stack) {
  // ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
 let valuePopped = stack.pop();
 let addedResult = valuePopped + register[0];
 register[0] = addedResult;
}

function subb (register, stack) {
  // SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
  let valuePopped = stack.pop();
  let registerValue = register[0];
  let subtractedResult = registerValue - valuePopped;
  register[0] = subtractedResult;
}

function multt (register, stack) {
  // MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
  let poppedValue = stack.pop();
  let multipliedResult = poppedValue * register[0];
  register[0] = parseInt(multipliedResult);
}

function divv (register, stack) {
  // DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
  let valuePopped = stack.pop();
  let dividedResult = register[0] / valuePopped;
  register[0] = parseInt(dividedResult);
}

function remainderr (register, stack) {
  // REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
  let valuePopped = stack.pop();
  let dividedResult = register[0] % valuePopped;
  register[0] = dividedResult;
}

function popp (register, stack) {
  // POP : Remove the topmost item from the stack and place it in the register.
  let valuePopped = stack.pop();
  register[0] = valuePopped;
}

function printt (register) {
  // PRINT : Print the register value.
  console.log(register[0]);
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6
/*
3
REGISTER 3
PUSH
STACK: 3
REGISTER 3
PUSH
STACK: 3, 3
REGISTER 3
7
REGISTER: 7
DIV
STACK: 3: 3
POP: 3
STACK: 3
OPERATION: 3 / 7 = 2.5
parseInt(2.5) = 2
REGISTER: 2
MULT
STACK 3
POP: 3
OPERATION: 2 * 3 = 6
REGISTER: 6
PRINT: 6

*/

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12


minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)

/*

A stack is a list of values that grows and shrinks dynamically. A stack may be implemented as an Array that uses two Array methods: Array.prototype.push and Array.prototype.pop.

A stack-and-register programming language is a language that uses a stack of values. Each operation in the language operates on a register, which can be thought of as the current value. The register is not part of the stack. An operation that requires two values pops the topmost item from the stack (i.e., the operation removes the most recently pushed value from the stack), operates on the popped value and the register value, and stores the result back in the register.

This sounds complex, but the behavior is straightforward and easy to walk through manually. Consider a MULT operation in a stack-and-register language. It removes the value from the stack, multiplies the removed stack value with the register value, then stores the result back in the register. For example, if we start with a stack of [3, 6, 4] (where 4 is the topmost item in the stack) and a register value of 7, the MULT operation mutates the stack to [3, 6] (the 4 is removed), and the result of the multiplication, 28, is left in the register. If we do another MULT at this point, the stack is mutated to [3], and the register is left with the value 168.

Write a function that implements a miniature stack-and-register-based programming language that has the following commands (also called operations or tokens):

n : Place a value, n, in the register. Do not modify the stack.
PUSH : Push the register value onto the stack. Leave the value in the register.
ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
POP : Remove the topmost item from the stack and place it in the register.
PRINT : Print the register value.
All operations are integer operations (which is only important with DIV and REMAINDER).

Programs will be supplied to your language function via a string argument. Your function may assume that all arguments are valid programs — i.e., they will not do anything like trying to pop a non-existent value from the stack, and they won't contain any unknown tokens.

Initialize the stack and register to the values [] and 0, respectively.

P: Understanding The Problem
Create a function that takes a string argument.
The function should deconstruct the string argument and implement the token(commands/operations) accordingly.
Register is a currentValue
Operation/token/Command requires two values: topMostValuePopped and registerValue
The topMostValuePopped is operated on by the registerValue and the result becomes the new registerValue

Input: String (with token(commands))
Output: Number (result of operations/token/command)
Rules:
  Explicit:
  - Create a function
  - Receive a string argument
  - make send of string argument
    - remove value from the stack
    - perform operation of stackValuePopped with registerValue
    - store result as newRegisterValue
  - Result of operation becomes new registerValue
  - no not modify the stack

  Tokens:
  - PUSH : Push the register value onto the stack. Leave the value in the register.
  - SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
  - MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
  - DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
  - REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
  - POP : Remove the topmost item from the stack and place it in the register.
  - PRINT : Print the register value.

  Implicit:
  - use key provided to determine command
  - Single print command with no values returns/prints 0
  - print command after a value prints that value

  - first value will be the registerValue
  - subsequent intValues are stackValues
  - All text tokens are commands

Questions:
- n/a


E: Examples and Test Cases
'3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT'
// 5
// 10
// 4
// 7
----
=> 3
assign as REGISTER VALUE
REGISTER: 3

=> PUSH: push register value to stack, leave value as register value
STACK: [3]
REGISTER: 3

=> 4
assign as REGISTER VALUE
REGISTER: 4

=> PUSH: push register value to stack, leave value as register value
STACK: [3, 4]
REGISTER: 4

=> 5
=> PUSH: push register value to stack, leave value as register value
STACK: [3, 4, 5]
REGISTER: 5

=> PRINT: print register value:
// REGISTER: 5

=> ADD: pop value from stack
STACK: [3, 4, 5]
pop: 5
STACK: [3, 4]
add to register value: 5 + 5 = 10, store result in register
REGISTER: 10

=> PRINT: print register value:
// REGISTER: 10

=> POP: remove last element from stack and place in register
STACK: [3, 4]
pop: 4
STACK: [3]

=> PRINT: print register value:
REGISTER: 4

=> ADD: pop value from the stack
STACK: [3]
pop: 3
STACK: []
add to register value: 4 + 3 = 7, store result in register
REGISTER: 7

=> PRINT: print register value:
REGISTER: 7
// REGISTER: 7


Mental Model:
receive string
split to elementArray
register value should be preset to 0
if first value is not int return register value
for each element if the element is int assign as register value, else match string to predefined object of commands that when the key is matched invokes a function pertaining to the keyName. Define the functions outside of the main calling function since they will have global scope they will be accessible. 


D: Data Structure:
Object: I am thinking an object data structure might be useful since the token commands are specific to their labelling. The token can trigger a method value that can perform the operation on a value if the token passed in is a match. The value returned would be the result of the token matched and thus the method invoked and the resulting value returned.


A: Algorithm:
- start
- set function: minilang
- receive stringValue
- set registerValue = [0];
- set stackValue = [];
- convert to stringArray of elements separated by space
- set guard clause
  - if stringArray[0] => validateIntStatus
    - if Number.isNaN(Number(stringArray[0]) === false) return registerValue[0]
    - the registerValue is an array element so we can mutate the array object value in place which cannot be done with a primitive value
  
  - loop over arrayElements 
    - since guard clause handled first element not being an int we can proceed to know the first element is an int 
    - if element is int assign Number(element) to registerValue[0]
    - else take element(STRINGCOMMAND) and match it to predefined objectKey and invoke the: functionValue
      - define the functions as per the descriptions so that each time either a command or int is encountered the corresponding action is performed 
- end


C: Code With Purpose

*/