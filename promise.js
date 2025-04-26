/*
 Promise: By definition, a Promise is an object that represents the eventual completion or failure of an asynchronous operation.
  
  In simple terms, a Promise is an object that contains:
  {
     PromiseState: pending,
     PromiseData: undefined
  }
 
 Once the asynchronous operation completes, the Promise object’s value changes. The PromiseState becomes fulfilled or rejected, and the PromiseData is updated with the data returned by the Promise:
  {
     PromiseState: fulfilled or rejected,
     PromiseData: returned data
  }
  
  A Promise has three states:
 
  1.Pending : The initial state, where the Promise is neither resolved nor rejected. The Promise's outcome is still unknown.
  2.Fulfilled : The state when the asynchronous operation completes successfully, and the Promise has a resulting value.
  3.Rejected : The state when the asynchronous operation fails, and the Promise has a reason for the failure.
 
  When a Promise is initiated, its state is initially pending, and the data part is undefined or unknown.
 
  As the asynchronous operation completes, two things can happen:
 
  1. If the asynchronous operation is successful, the Promise’s state becomes fulfilled, and the data part is filled with the actual data resolved by the Promise.
  2. If the asynchronous operation fails, the Promise’s state becomes rejected, and the data part is filled with the reason for the failure of the operation.

 */

const p1 = new Promise((resolve,reject)=>{
    const num = Math.floor(Math.random()*10)
    if(num > 5){
        resolve(`Number is grater than 5 Data is ${num}`)
    }
    else{
        reject(`Number is less than 5 Data is ${num}`)
    }
})

/* If promise p1 is resolved then .then() execute else .catch() */
p1
.then((data)=>console.log(data))
.catch((err)=>console.log(err))


/* Ellaborate async task with promise */

function createOrder(){
    return new Promise(function(resolve, reject){
        const order = {
            product : "Kurta",
            price : 799,
            orderid : Math.floor(Math.random()*10)
        };
        if(order.orderid){
            setTimeout(()=>{
                console.log(`Order id is : ${order.orderid}`);
                resolve({ success: true, orderData: order });
            }, 3000);
        } else {
            reject({ success: false, message: `Failed to forward the payment` });
        }
    });
}

function proccedToPayment(order){
    return new Promise(function(resolve, reject){    
        if(!order.success){
            console.log(order.message);
            reject({ success: false, message: `Failed to payment` });
        } else {
            setTimeout(()=>{
                const paymentid = Math.floor(Math.random() * 20+1);
                order.orderData.paymentid = paymentid;
                console.log("Order details : ", order.orderData);
                resolve(order.orderData);
            }, 2000);
        }
    });
}

function showOrderDetails(orderData){
    return new Promise(function(resolve, reject){
        if(!orderData.paymentid){
            reject({ success: false, message: `Failed to payment` });
        } else {
            setTimeout(()=>{
                console.log(`Order payment id : ${orderData.paymentid}`);
                resolve({ success: true });
            }, 1000);
        }
    });
}

function greet(){
    console.log(`Thank you for shopping with us`);
}


createOrder()
    .then(proccedToPayment)
    .then(showOrderDetails)
    .then(greet) 
    .catch((err) => console.log(err));


