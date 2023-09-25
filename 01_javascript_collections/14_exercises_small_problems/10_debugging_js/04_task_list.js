let todos = ['wash car', 'exercise', 'buy groceries', 'balance budget',
             'call plumber', 'feed fido', 'get gas',  'organize closet'];
             // declared global variable and initialized to an array object that contains multiple string elements

function addTask(task) { // receives a task (should be a single string)
  if (todos.includes(task)) { // if the arrayOfStrings includes taskString invoke if clause
    console.log('That task is already on the list.'); // print to console
  } else { // otherwise
    todos.push(task); // add the task to the end of the todosArray if take is not already included
  }
}

function completeTasks(n = 1) { // n parameter assigned to default value of 1
  let tasksComplete = 0; // variable declaration and initialization to number value 0

  while (todos.length > 0 && tasksComplete < n) { // defined while loop, condition to invocation: length of global todosArray is greater than 0 && logical comparison operator tasksCompleteLocalVariable < n(which is initialized to 1 so will execute at least on the first encounter)
    console.log(`${todos[0]} complete!`); // print the value at index 0(the first element) of the todosArray and use template literals to interpolate this value and construct a string literal to be output
    delete todos[0]; // remove the element at index 0 (the first element) // correct with this code to fix code: todos.splice(0, 1)
    todos.splice(0, 1); // the delete keyword should be used to remove Object literal properties, used in arrays the value of the element is removed but replaced with `undefined` and the element remains within the array so the .length property is the same as before since `undefined` is a value
    tasksComplete++; // increment the tasksComplete variable by +1 on each encounter
  }

  if (todos.length === 0) { // if the array is empty
    console.log('All tasks complete!'); // print this string to the console
  } else {  // otherwise
    console.log(`${tasksComplete} tasks completed; ${todos.length} remaining.`); // print this string and interpolate the values to the output string detailing how many tasks are complete and how many are left
  }
}

function displayTaskList() {

  console.log(`ToDo list (${todos.length} tasks):`); // use length of global variable in interpolated output string
  console.log('---------------------');

  for (let idx = 0; idx < todos.length; idx++) { // for the number of elements in the global array
    console.log(`-- ${todos[idx]}`); // print the element at the specified index position using array referencing
  }
}

// Utilizing our task manager

addTask('oil change'); // addTask function invocation, string argument passed to the function
// `oil change` is received by the function declaration on line 6 and assigned to the local parameter variable `task`.
// Since the string is not included as part of the global variable `todos` array the `else` clause is invoked and the stringValue is pushed to the array. The function does not have an explicit return value and thus returns `undefined` to the caller on line 46, this value is meaningless as it is not used in any way. The program resumes after the function invocation from line 42.

addTask('dentist'); // `addTask` function invocation passes the string `dentist` to the function as an argument.
// the string is received by the function and its value assigned to the local parameter variable `task`. 
// the global array from line 1 is checked to see if it includes the string. Since it does not the string value is pushed to the array and appended to the end. The function does not explicitly return a value and thus returns undefined, a meaningless value since it is not used in any way. The program resumes back to the caller after the function invocation from line 45.

addTask('homework');
// The same thing occurs with this third string value `homework`. It is not present in the global array and thus is added to the end of the global array as a new stringElement.

completeTasks(3); // `completeTasks` function invocation occurs and passes number 3 as an argument to the function. The value is received by the function declaration on line 13 and assigned to local parameter variable `n` and thus the default value is discarded.
// while loop encountered evaluates the condition `while (todos.length > 0 && tasksComplete < n)`. Since the length of the global todosArray is greater than 0 and tasksCompleted(0) variable is less than n(3) the condition evaluates to true and the while loop body is executed.
// the statement `console.log(`${todos[0]} complete!`)` prints the value of the first element within the global array and thus outputs to the console the string: `car wash complete!
// the statement ` delete todos[0]` then removes the value of the first element within the array however the array is not reindexed and instead the value of the first element is assigned to `undefined` and thus will still occupy space in the array as the first element.
// `tasksComplete` variable is then incremented by +1 from 0 to 1 using the additional assignment operator.
// the `if` statement from line 22 evaluates to false since the todos global array does not have strict equality to `0` and thus the else statement is executed and interpolates the value of the variable `tasksComplete`(1) and `todos.length`(11) to include output string constructed by the template literal syntax to output the string: `1 tasks completed; 11 remaining.`
// Since the `delete` statement will never fully remove the element from the array the length of the array will always remain the same.
// the `while loop` condition will evaluate to false after 2 more iterations for a total of `3` since this is when the value of `tasksComplete` variable will have strict equality to the value of `n(3)`.
// the next two iterations will thus output the string `undefined complete!` to the console with the following `else` clause outputting string `3 tasks completed; 11 remaining.` before the loop condition evaluates to false and the function implicitly returns the value `undefined` to the caller and the program resumes play after the function invocation from line 52(completeTasks(3).

displayTaskList(); // `displayTaskList` function invocation encountered. No arguments are passed to the function declaration on line 29.
// a console.log method is invoked and interpolates the value of the length of the global array from line 1(11) using template literal syntax to form the interpolated output string value: 
// `ToDo list 11 tasks:`
// ---------------------
// As previously stated the length of the array remains the same throughout since no element is truely removed.
// This function then iterates over the elements of the array to interpolate the value of each element to the output string passed to the `console.log` method invocation - outputting the strings:
// `-- undefined`
// `-- exercise`
// `-- buy groceries`
// `-- balance budget`
// `-- call plumber`
// `-- feed fido`
// `-- get gas`
// `-- organize close`
// `-- oil change`
// `-- dentist`
// `-- homework`

// To fix the code, the element from line 18 needs to be removed completely from the global array. We can achieve this with the `array.splice()` method. Since we want to remove the first element, we can pass the arguments (0, 1), which will remove the element at index 0 for a count of 1 element. Since `splice` is a mutating and destructive method, the global array will be modified, and the indices will be updated as intended.
// Line 18 should read: todos.splice(0, 1);

/*

We were asked to implement a task list and the following functionality:

adding a new task
completing a given number of existing tasks
displaying the task list
We decided to keep things simple and model the tasks as strings. Completing a task for us simply means deleting the string from the array of tasks.

Experimenting with our code reveals that it doesn't work exactly as we expected. Find the problem and fix it.

*/