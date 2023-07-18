# Setting and Clearing Breakpoints

Setting a `debugger` keyword within the code is to set a breakpoint at which the debugger runtime execution will pause.

<br>

## Adding Breakpoints Within Debugger Mode

Breakpoints can be added and removed when inside and running the debugger mode instead of having to continuously exit the debugger to insert `debugger` keywords into the code.

- `setBreakpoint()` / `sb()`: sets a breakpoint on the current line(no argument required), or pass the line number as an argument to set a breakpoint on a specific line number
- `clearBreakpoint()` / `cb()`: removes a breakpoint. Take two arguments: 
  - the 'fileName.js' (as a string)
  - the lineNumberToRemoveBreakpointFrom


<br>

## `list()`

Running the `list()` command when in debugger mode will provide a list of the code landscape 5 lines above and 5 lines below the current position of the debuggers current position in the code cycle.

- you can call the `list(numberOfLines)` command and pass in a numberOfLines argument to see the lines of code above and below the current line.