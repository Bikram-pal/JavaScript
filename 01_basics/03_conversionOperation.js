let score= "33";

// console.log(typeof score);//string
// console.log(typeof (score));//string 

let valueOfNumber= Number(score);
// console.log(typeof valueOfNumber);//number

let point="abc33"
convertNumberOfPoint=Number(point);
// console.table([typeof convertNumberOfPoint,convertNumberOfPoint]) // number,NaN

let temp= null;
let temp1= undefined;
let temp2= true;

// console.table([typeof temp,typeof temp1,typeof temp2]); // null, undefined, true
// "33"==> 33
// "33abc"==> NaN
// true==> 1; false==> 0;

let isLoggedIn= 1;

let booleanIsLoggedIn= Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn) // true
// 1==> true;
// 0==> false;
// ""==> false;
// "bikram"==> true;

// **************************** Operation **************************

let value=3
let negValue= -value
// console.log(negValue); // -3

// console.log(2+2);
// console.log(2*2);
// console.log(2-2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1="hello";
let str2= " Bikram";
let str3= str1+str2;

// console.log(str3);
// console.log(1+"2");
// console.log("2"+1);
// console.log(1+1+"2");
// console.log("2"+1+1);

// console.log(+true);
// console.log(+"");

let num1, num2, num3;

num1 = num2= num3= 2+2

let gamecounter = 100
gamecounter++;
// console.log(gamecounter);