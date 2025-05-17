// singleton
// Object.create

// object literals
const my_sym = Symbol("key1");
const user = {
    name : "Bikram",
    "full name" : "Bikram Pal",
    age : 18,
    [my_sym] : "mykey1",
    location: "kolkata",
    email: "bikrampal@gmail.com",
    isloggedIn: false,
    lastLogedinDays: ["Monday", "Saturday"],
}
// console.log(user.email);
// console.log(user["email"]);
// console.log(user["full name"]);
// console.log(user[my_sym]);

user.email = "oalbikram@gmail.com"
// Object.freeze(user)
user.email = "chatgpt@gmail.com";
// console.log(user);

user.greeting = function(){
    console.log("hello js user");
    
}
user.greetingTwo = function(){
    console.log(`hello users, ${this.name}`);
    
}
console.log(user.greeting());
console.log(user.greetingTwo());



