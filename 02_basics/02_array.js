const marvel = ["thor" , "iron man", "spiderman"]
const dc = ["flash", "superman", "batman"]

// marvel.push(dc);

// console.log(marvel);
// console.log(marvel[3][1]);

// const new_heros= marvel.concat(dc);
const new_heros= [...marvel, ...dc]

// console.log(new_heros);

const arr = [1,2,3,4,[2,3,4,5,[23,45,2]]]

const real_arr= arr.flat(Infinity)
console.log(real_arr);

console.log(Array.isArray("bikram"));
console.log(Array.from("bikram"));
console.log(Array.from({name: "bikram"})); // interesting 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
