function sayMyName() {
    console.log("B");
    console.log("i");
    console.log("k");
    console.log("r");
    console.log("a");
    console.log("m");
} // defination
// sayMyName() // reference / eexecution

// function add(number1, number2){

//     console.log(number1 + number2);
// }
function add(number1, number2){

    // let result = number1+ number2
    // return result
    return number1 +number2
}

const result = add(3, 5)

// console.log("result: ",result);
// ++++++++++++++++++++++++++++++++++++++++++

function logInUserMessage(username ="sam"){
    // if(username === undefined){
    //     console.log("Please enter a number!");
    //     return 
    // }
    if(!username){
        console.log("Please enter a number!");
        return 
    }
    return `${username} justed logged in`
}
// console.log(logInUserMessage("bikram"));
// console.log(logInUserMessage());

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000))
// ... is the rest operator 

const user = {
    username: "bikram",
    price : 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject({
    username: "sam",
    price: 399
})



const myNewArray = [200,300,400,600]

function returnSecondValue(array){
    return array[1]
}

console.log(returnSecondValue(myNewArray));

