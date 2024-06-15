//Object literals
const user={
    name:"Anurag Singh",
    age:"32",
    mail:"anurag@gmail.com",
    isLogin:false,
    last_login_days:["Monday","Thursday"]
}

//first way to access key of object

console.log(user.name)

//2nd way to access key of object if key is defined in string like: {"name":"Anurag Singh"}

console.log(user["name"])

//add a Symbol in key of Object

const mySymbol=Symbol("key1")

const MyNewObj={
    [mySymbol]:"MyKey1"
}

console.log("Print Symbol : ",MyNewObj)


//freeze an object ....can't change
Object.freeze(user)
user.age="35"
console.log(user["age"])