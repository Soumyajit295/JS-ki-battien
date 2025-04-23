/* Execution Context : Refers to the enviroment where js codes become executed and eveluated */

/* Two types of execution context : 1) global execution context which is automatically created when js engine starts , 2) function execution context whcih is created when any function is invoked */

/* Components of Execution context

    step 1 : Memory allocation phase
    Memory is allocated
    variables and functions are hoisted
    var variables are hoisted with undefined
    let/const variables are in temporal dead zone
    functions are hoisted with function code body

    step 2 : code execution phase
    code executed line by line
    values are assigned into the variables
    if any function invokation then function execution context create which also have same 2 steps

*/

/* Callstack : It's keeps the record of function calls in js which is pushed into callstack then it's immediately execute and after execution function popped from stack */

/* When we run the code global execution context is created and pushed into callstack then in the memory allocation phase variable x is hoisted with value undefined and function greet is hoisted with it's code body
Now in the code execution part code start execute line by line assigned 10 into variable x and while function invocation new function execution context is created(pushed in to the callstack) and in memory allocation phase variable y is hoited with undefined and code execution phase 20 is assighed to y and print 20 in console after function execute successfully so it's context is vanished and it popped from the stack

*/
var x = 10;
function greet() {
  var y = 20;
  console.log(x + y);
}
greet();


/* In the below example we see how callstack look like while running the below code */

function one() {
    two();
  }
  
function two() {
    console.log("Hello");
}
  
one();

/* 
    Global() -> pushed
    one() -> pushed
    two() -> pushed
    console.log("Hello") -> runs
    two() -> popped
    one() -> popped
    Global() -> popped

*/
  