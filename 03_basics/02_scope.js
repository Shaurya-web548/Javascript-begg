// var c = 90
let a  = 300 // global scope
{} //scope - when it comes with any function or any if else do not consider it with object
if(true){//block scope
let a = 10
const b = 20
// var c = 30
// console.log("INNER: " , a);
}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Aman"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
     two()
}
// one()

if(true){
    const username = "Aman"
    if(username === "Aman"){
        const website = " youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}

// console.log(username);
// +++++++++++++++++++++++ INTERESTING +++++++++++++++++++++

function addone(num){
  return num+1
}
addone(5)


const addtwo = function(num){
    return num + 2
}

addtwo(5)