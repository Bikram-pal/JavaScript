let score= "33";

console.log(typeof score);//string
console.log(typeof (score));//string 

let valueOfNumber= Number(score);
console.log(typeof valueOfNumber);//number

let point="abc33"
convertNumberOfPoint=Number(point);
console.table([typeof convertNumberOfPoint,convertNumberOfPoint]) // number,NaN

let temp= null;
let temp1= undefined;
let temp2= true;

console.table([temp,temp1,temp2]); // null, undefined, true
// "33"==> 33
// "33abc"==> NaN
// true==> 1; false==> 0;

let isLoggedIn= 1;

let booleanIsLoggedIn= Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) // true
// 1==> true;
// 0==> false;
// ""==> false;
// "bikram"==> true;