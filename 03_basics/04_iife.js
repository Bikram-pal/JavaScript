// Immediately Invoked Function Expressions (IIFE)

(
function chai(username){
    // named IIFE
    console.log(`DB CONNECTED ${username}`);
    
})('bikram pal');

( (name)=>{
console.log(`db connected ${name}`);

} )('hitesh');
