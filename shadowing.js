/* When a variable has same name as outer scope or global scope then this variable is shadowed or override within the block only this is known as shadowing */

let outerVar = "I am outer variable from global scope"

if(true){
    let outerVar = "I am outer variable from block scope"
    console.log(outerVar) // I am outer variable from block scope
}

console.log(outerVar) // I am outer variable from global scope

/* But here we can see that although we shadow the outervar , the effect of shadow is only within the block scope.
But if we create the variable using var then it changes the global scope variable because var is blocked scope. when we create the same name variable using var keyword then it's points to the same variable of the global scope.
*/

var name = "Soumyajit"

if(true){
    var name = "Jit"
    console.log("Name inside the scope is : ",name)
}

console.log("Name outside of the scope is : ",name)


/* Illegal shadowing : When any variable is already declared with let or const and we again want to create the same name variable inside a block using var keyword then this is known as illegal shadowing */

let accountNo = "1234"

if(true){
   // var accountNo = "3214" // Illegal shadowing : accountNo is already declared
}