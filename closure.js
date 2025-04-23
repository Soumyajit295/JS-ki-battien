/* Closure is created when functions remembers it's laxical scope even after it is executed outside from it's original context */

/* Closure helpfull for 
    Data hiding
    Currying functions
*/

/* In the below example we have a outer function and inside it we have a fnction called inner and inner function access the outer function name now outer function returns the innerfuntion so outer funtion context is vanished but inner function still remembers it's laxical enviroment variable name because of closure */


function outer(){
    const name = "Soumyajit"
    function inner(){
        console.log("Hey my name is ",name)
    }
    return inner
}

const fun = outer()
fun()

/* Data hiding : It is most usefull application of closures. Here we store the sensitive data inside the function by which no one can change the data globally . In the below example function has a count variable which is only accessable within the function not from outside of the function */

function counter(){
    let count = 0
    return{
        increment : ()=>{count++},
        decrement : ()=>{count--},
        showCount : ()=>{console.log("Count is : ",count)}
    }
}

let c1 = counter()
c1.increment()
c1.showCount()

/* Currying : If any function takes multiple argument at a time then currying convert it in a function which takes one argument at a time and returns another function for next argument and so on */

function normalAdd(a,b,c){
    return a+b+c
}

/* currying */

function curriedAdd(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}

const value = curriedAdd(2)(3)(4)
console.log(value)

/* How currying function uses closure */

/* 
    curriedAdd(a) function 
    return a new function (b) -> {...}
    the value of a remembered via closure

    second function(b)
    return function(c) -> {...}
    it has access both a and b because of nested closures
    finally it returns a+b+c
*/