# `exec nameOfVariable` command

The `exec nameOfVariable` command can be used to access the value of variables that are in-scope at the moment in run-time when the command is executed. 

The `exec` command can also be used to evaluate expressions or execute functions.

- to execute a function with the `exec` command there needs to be a function invocation in the code and not just a standalone function definition


```JavaScript
// invoking functions
function sum () {
  let a = 1;
  let b = 2;
  return a + b;
}

> sum();

// inspect node mySumProgram
// debug>
// exec sum()
// > 3

// executing the exec command and calling the sum() function returns the function return value; 3 to the console
```

<br>

```JavaScript
// evaluating expressions:
function sum () {
  let a = 1;
  let b = 2;
  > debugger;
  return a + b;
}

sum();

// running command when inside the function can execute an expression: 
// exec a + b 
// > 3
``` 

<br>

## Debugger repl

When inside the debugger a `repl` can be made use of to execute expressions and functions. The `repl` can still only access the variables available in scope at the time of executing the `repl` command. This is used instead of the frequent use of the `exec` command and you can state the variables directly by name without prefixing with the `exec` command: 

```JavaScript
// run the repl command
// run `a`
// repl returns the value of variable `a` if it is in scope at the point of execution:
debug> repl

a

> 1
```

To get back to the debugger mode the repl can be exited by using the command `ctrl + c` once.