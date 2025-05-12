// # primitive 

//  7 types : String, Number, Boolean, Null, undefined, Symbol, Bigint

const score= 100
const scoreValue= 100.3

const isLoggedIn= false
const outsideTemp = null
let userEmail;

const id= Symbol('123')
const anotherid= Symbol('123')
console.log(id===anotherid);

const number=1234567887654565544877665n

// Referance type (non primitive)

// Array, Objects, Functions

const heros = ["ironman","superman", " thor"]
let myobj={
    name:"bikram",
    age: 22
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof myFunction)


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack(primitive), heap(Non-primitive)
// example of stack
let name= "bikram";
let name2= name;

name2="roy";
console.log(name2);
console.log(name);
// example of heap
let object= {
    number: 12,
    email: "pqlbikram557@gmail.com",
}

let output= object
console.log(output)

output.email= "bikrama"

console.log(object)