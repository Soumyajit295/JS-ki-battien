/* Callback function is passed to another function . Callback is used to perform asynchronus task in javascript

But there is some problem with callback which is known as callback hell
Callback hell happens when we nest to many callbacks with each other 
1. Code that is hard to read
2. Code that is hard to maintain
3. Pyramid of doom - When we nest to many callbacks with each each other then the code starts grow to the right looks like a pyramid which is known as pyramid of doom

*/

function createOrder(proccedToPayment){
    setTimeout(()=>{
        let order = {
            product : "Kurta",
            price : 799,
            orderid : Math.floor(Math.random()*10)
        }
        console.log(`Create order with orderid ${order.orderid}`)
        proccedToPayment(order)
    },2000)
}

function proccedToPayment(order,showOrderDetails){
    setTimeout(()=>{
        if(!order.orderid){
            console.log(`Failed to proceed payment`)
            return
        }
        console.log("Order details : ",order)
        const paymentId = Math.floor(Math.random()*100)
        order.paymentId = paymentId
        showOrderDetails(order)
    },3000)
}

function showOrderDetails(order,greet){
    setTimeout(()=>{
        if(!order.paymentId){
            console.log(`Payment failed`)
            return
        }
        console.log(`Payment id : ${order.paymentId}`)
        greet()
    },1000) 
}

function greet(){
    console.log(`Thank you for shoping from us`)
}

createOrder((order)=>{
    proccedToPayment(order,(order)=>{
        showOrderDetails(order,()=>{
            greet()
        })
    })
})