// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Bikram"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regular_user = {
    email : "bikrampal@gmail.com",
    name1 : {
        fullname:{
            firstname : "bikram",
            lastname : "pal"
        }
    }
}
// console.log(regular_user);
// console.log(regular_user.name1)
// console.log(regular_user.name1.fullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4}

// console.log(obj3);

const user = [
    object1 = {
        email1 :" 34456"
    },
    object2 = {
        email2:"1233  "

    },
    object3 = {
         email3:"1233 455 "

    }
]
// console.log(user[1].email2);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // ==> arrays
// console.log(Object.values(tinderUser)); // ==> arrays
// console.log(Object.entries(tinderUser)); //==> arrays under arrays


const course = {
    course : "js in hindi",
    course_teacher : "Bikram"
}

const {course_teacher : teacher} = course

// console.log(course_teacher);
console.log(teacher);

// {
//     "name": "hitesh",
//     "courseName": "js in hindi",
//     "price": "free"
// }// jason .. it an api

// [
// {},
// {},
// {}

// ]
// random user me ... ==> famous api