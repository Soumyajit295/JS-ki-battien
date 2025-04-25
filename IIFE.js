/* IIFE : Immediatly invoked function | Function whcih is immediatly invoked after creation and cannot be call in future */

(function(){
    console.log(`Immediatly invoked function`)
}
)();

// connectToDB() This is not possible : connctToDB is not defined

/* Why we use IIFE */

/* 1. To create a private scope : Variables declared inside an IIFE are not accessable outside of it */

(function(){
    const message = "Hello"
    console.log(message)
})();

console.log(message)

/* 2. For initialization code : If you have some logic which needs to run one time then we can use IIFE */

/* Like database connection logic */

(function connectToDB(){
    console.log(`Database connection successfull`)
})();

