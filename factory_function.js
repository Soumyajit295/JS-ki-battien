/* Factory function is a function which returns a object */

function createUser(name,age){
    return {
        name,
        age,
        greet(){
            console.log(`Hello my name is ${name}`)
        }
    }
}

const u1 = createUser("Soumyajit",22)
console.log(u1)
u1.greet()

/* Factory function helps to genarate multiple objects without any repetation */

function student(name,roll,department){
    return {name,roll,department}
}

const s1 = student("Ram",21,"Computer science")
const s2 = student("Rohit",24,"Electronics")

console.log(s1,s2)

/* Data encapsulation : Here we create a createAccount factory function which creates a account using username and password but the password is not accessable it encapsulate the password */

function createAccount(username,password){
    return {
        getUserName(){
            return username
        },
        checkPassword(pass){
            return pass === password
        }
    }
}

const c1 = createAccount("admin","1234")
console.log(`Username ${c1.getUserName()}`)
console.log(`Username password ${c1.password}`) // Undefined : means not accessable
