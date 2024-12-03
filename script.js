let oruko = "joshua"
console.log(oruko)

let age=20
console.log(age)

let food = ["rice", "beans", "garri"]
let num = [1,2,3,4]
let studentData = {name:"joseph", age:20, class:"jss3"}


console.log(food)
console.log(num)

const numProp = num.length
console.log(numProp)


const addMap = num.map(n => n+2)
console.log(addMap)

food.push("corn")
console.log(food)

num.push(5)
console.log(num)

console.log(studentData["class"])

function sum(a, b){
    return a + b
}
const value = sum(5, 9)
console.log(value)


function subtract(num1, num2){
    return num1 - num2
}
const result = subtract(25, 7)
console.log(result)
 
function SayHi(){
    console.log("hello")
}
SayHi()

function test(a, b){
    console.log(a + b)
}
test(20, 20)


let user = "employee"
if(user === "guest"){
    console.log("login failed")
}
else if(user === "vistor"){
    console.log("login failed")
}
else if(user === "employee"){
    console.log("login successful")
}
else{
    console.log("try again later")
}

for(let i=1; i<=21; i++){
    if(i % 2 !==0){
        console.log(i);
    }
}
