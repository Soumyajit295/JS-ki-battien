/* Scope is current context of execution
   
   Global scope : Variables declared outside of any block or any function , Variables access from anywhere of the code
   Function scope : Variables declared inside of any function only accessable from the function
   Block scope : Variables declared with let and code inside {} accessable within the block
*/

let globalVar = "I am global variable"

function greet(){
    let localVar = "I am local variable"
    console.log(globalVar) // accessable
    console.log(localVar) // accessable
}

greet()
console.log(localVar) // Not accessable ReferenceError : localVar is not defined

/* Scope chain : Scope chain means if javascript want to access a variable then it first search in it's own scope then goes to it's parent and so on untill it reachs to null */

function outer(){
    let name = "Soumyajit"
    function inner(){
        let age = 22
        console.log(age)
        console.log(name) // can access name beacuse of scope chain
    }
    inner()
}

outer()

/* Lexical scope : Lexical scope means that a function scope is determined by it's original origin means where it is defined in the source scope not the scope where it is invoked */

function one(){
    let a = 7
    function two(){
        console.log(a)
    }
    return two
}

const func1 = one() // one() function runs and two() returned but also it can access value of a which is in the one() whcih is the laxical scope of two()
func1()