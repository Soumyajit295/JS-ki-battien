/* 
The event loop is mechanism in js that allows js to perform non-blocking asynchronus operation even though javascript is single threaded. It continously monitors the callstack and the callback queues if the callstack is empty and if there any callback in callbackqueue then it takes the callback from the queue and pushed it into callstack. 

Here's how it works:

1. Call Stack : Where function calls are pushed and being executed and popped after execution.

2. Web APIs : When async functions like setTimeout, fetch, etc. are called, they are passed to the browser's Web APIs, not executed immediately.

3. Callback Queues :

   - Macrotask Queue : For `setTimeout`, `setInterval`, `setImmediate`, `DOM events` callbacks
   - Microtask Queue : For `Promises`, `queueMicrotask`, `MutationObserver` callbacks
     Microtasks have higher priority than macrotasks.

4. Event Loop :
   - Constantly checks the call stack.
   - If the stack is empty:
     - First, it processes all microtasks (in order).
     - Then, it processes one macrotask (if any), then goes back to step 1.
   - This keeps repeating.

Result: JS can handle async tasks without blocking the main thread.
*/


/* Code1 */

// console.log("Start")

// setTimeout(()=>{
//     console.log("I am inside the setTimeout function")
// },0)

// console.log("End")

/* Code2 */

console.log("Start fetching data from the API")


setTimeout(()=>{
    console.log(`I am inside a setTimeout function`)
},1000)

fetch(`https://fakestoreapi.com/products/1`)
.then((rawData)=>rawData.json())
.then((data)=>console.log(data))
.catch((err)=>console.log(`Error is : ${err.message}`))

console.log("End fetching data from the API")