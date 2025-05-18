let a = 10
const b = 20
var c = 30

if (true) {
    let a = 10
    const b = 20
    var c = 30
}


// console.log(a);
// console.log(b);
// console.log(c);


function one (){
    const username = "bikram"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website); // error
    
    two()
}

one()

if(true){
    const username = "bikram"
    if(username === "bikram"){
        const website= "youtube";
        // console.log(username+website) 
    }
    // console.log(website); // error
    
}
// console.log(username); error

// ++++++++++++++++++++++++++++++++interesting +++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(addone(5))

function addone(num){
    return num+1
}

// addtwo(5) // hosting 

const addtwo = function(num){
   return num + 2 
}
