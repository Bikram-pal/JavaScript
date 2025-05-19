// if 
const isloggedIn = true
const temparature = 41
// if(temparature<50){
//     console.log("less than 50");
    
// } else{
//     console.log("temperature is greater 50");

// }

// console.log("executed")

// 2 ==="2"
// <,>, <=, >=, ==, ===, !==

const score = 200
// if (score>100) {
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }

const balence = 1000
// if (balence > 500) console.log("test ")
    
// if(balence < 500){
//     console.log("less than");
    
// } else if (balence < 750 ) {
//     console.log(" less than 750");
    
// }  else if(balence < 950 ){
//     console.log(" less than 950");
    
// } else {
//     console.log();
    
// }

const userLoggedIn = true
const debitCard = true 
const loggedInfromEmail = true
const loggedInFromgoogle = false

if (userLoggedIn && debitCard) {
    console.log("allow to buy course");
}
if (loggedInFromgoogle||loggedInfromEmail) {
    console.log("user logged in");
}