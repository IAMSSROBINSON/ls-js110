# Debugging

- check your temperament 
  - patient
  - systematic
- read error messages
- search the error online
  - search stack overflow
- check the documentation
- reproduce the error
- determine the boundaries of the error
- trace the code
- understand the problem well 
- implement a fix
  - suppress the error with `try, catch, finally`
  - fix one problem at a time
  - test the fix
- read the code line by line
- explain what the code is doing to a rubber duck
- take a walk and relax


<br>

## Inspect The Code With a Debugger

- Node.js comes with a debugger
- You can pause the program during execution and perform actions from that point in program execution (e.g. inspect values at runtime)

<br>

## How To Use The Debugger

- run the node command
- add the inspect argument
- state the program to run on 
  - e.g. `node inspect myProgram.js

- the console will produce some output:

```JavaScript
let counter = 1;

while (counter <= 5) {
  console.log(counter);
  counter += 1;
}

// the start of the output will look something like this. This is not very relevant so it can be ignored:
< Debugger listening on ws://127.0.0.1:9229/b10fd7a6-fcbd-4bc7-a3ae-1cca97a01859
< For help, see: https://nodejs.org/en/docs/inspector
< 
< Debugger attached.

// after this the output will mat state:
// - Break on start in while_loop_debug.js:1
// this means the program stopped execution on line 1 of the code
// the debugger will usually stop execution when it first encounters the first expression or function call
// the first expression on line 1 is: `let counter = 1;` 

// the console output will show an indicator for where the execution > paused :
// > 1 let counter = 1;

// within the console we can access the variables that are within scope by running the command:
// `exec nameOfVariable`
// this will output the value of the variable stated
```


<br>

## Commands
- `node inspect nameOfFile.js`: to run the debugger
- `exec nameOfVariable`: to get the value of a variable in scope at runtime
- `next` or `n`: to move to the next expression
- `c` for continue, this will auto progress / unpause the program execution and continue running it until the end of the program or until an error occurs or until a `debugger` statement is found within the code (where strategically place) whereby it will then pause runtime execution again
- `run`: for restarting program execution from the beginning
- `restart`: for restarting program execution from the beginning
- `.exit`: for quitting the debugger
- `CTRL+C` x2 : for quitting the debugger
- `CTRL+D` : for quitting the debugger
- `debugger` statement in the code: valid JavaScript syntax for pausing the program execution and setting a breakpoint when encountered within the code when running the debugger program
<br>

## End of Debugger
When this message and prompt are encountered in the console the debugger has finished executing the program:

`Waiting for the debugger to disconnect...
debug>`

From here the program can be re-started using the `run` command