let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

console.log(typeof myDate); // object

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-11-2023")

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp= Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getDate());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1)

console.log
(newDate.toLocaleString("default",{
    weekday: "long"
}));


