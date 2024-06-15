// function Example1(num1 , num2){
//     console.table([num1+num2,num1-num2,num1*num2,num1/num2])
// }
//log doesn't mean that function return that params for returning the calulation we should write a return operation

function Example1(num1 , num2){
   return num1+num2
}

let result = Example1(99,40)

console.log(result)

function calculateCart(...num){
    return num
}
//if we have multiple numbers in our cart we have to call REST operator in above function(...),it will return array of items

//We denote rest and spred operator in same way it's depend on use cases
let cartResult=calculateCart(3,7,8,1,3)

console.log(cartResult)

//Below pass an object to a function

const myObj={
    name:"Anurag",
    designation:"Android"
}

function objectFunction(anyObject){
console.log(`User Name is ${anyObject.name} and designation is ${anyObject.designation}`)
}

objectFunction(myObj)