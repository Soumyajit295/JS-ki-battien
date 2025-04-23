/* In js hoisting is a default behaviour where declaration are moved to the top of the current scope. var is hoisted and initialized with undefined | let/const are hoisted but remains uninitialized and in temporal dead zone until the actual declaration is encountered. function defination is hoisted with it's original code body but function expression are not */

/* Temporal dead zone : It refers to the time between where variables are hoisted and actullay declared in the source code if we want to access inthis time then javascript gives us Reference error : cannot access variable before initialization */


console.log(name) // undefined
sayHello1() // Valid prints Hello!

var name = "Soumyajit"

console.log(name) // Soumyajit

function sayHello1(){
    console.log("Hello!")
}


console.log(age) // Reference Error : cannot access age before initialization
sayHello2() // Reference Error : cannot access sayHello2 before initialization

let age = 22

let sayHello2 = ()=>{
    console.log("Hello!")
}