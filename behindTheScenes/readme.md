How JS works behind the scenes...

Github repo: -https://github.com/jonasschmedtmann/complete-javascript-course

What happens to our code???
  Our code is executed by a JS Engine:
  -1st goes through a parser and checks the code syntax
  -2nd Parser creates a data structure which is converted to machine code.
  -3rd code runs

Execution Contexts and Execution Stack:
  All JS code runs in an environment called an execution context
  The default execution context is the global context
  -In the browser, that's the window object //let lastName === window.lastName
  -Code that is not inside any function
  -Each time we call a function it gets its own execution context
    section 3 / 37

1. Creation Phase
  A) Creation of the variable object
  B) Creation of the scope chain
  C) Determine value of the `this` variable
2. Execution Phase
  -The code of the function is ran line by line

The variable object in the `creation phase`
    - the argument object is created
    - code is scanned for func declarations     - Hoisting
    - code is scanned for variable declarations - Hoisting

`Hoisting` in practice
