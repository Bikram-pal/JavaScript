const user={
    username: "bikram",
    price: 999,

    welcomeMessage : function(){
        console.log(`${this.username}, wellcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // ==> {}

// function chai(){
//     let username= "hitesh"
//     // console.log(this.username); // undefined
    
// }
// chai()

// const chai = function () {
//     let username= "hitesh"
//     // console.log(this.username); // undefined
// }

const chai =  ()=> {
    let username= "hitesh"
    console.log(this.username); // undefined
}

// chai()
// basic arrow function

// const addTwo=(num1,num2) => {
//     return num1+ num2
// }

// implicit return 
// const addTwo=(num1,num2) => num1+ num2

// const addTwo = (num1,num2) => (num1+num2)

const addTwo = (num1,num2) => ({username: "bikram"})

console.log(addTwo(2,3));

