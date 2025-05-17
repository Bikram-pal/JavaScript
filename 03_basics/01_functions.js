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
console.log(logInUserMessage());
