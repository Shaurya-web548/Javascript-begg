// Primitive Data Types

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 23986492696392668723678756n


//JavaScript is dynamically typed.

// Refrence (Non Primitive)

 // Arrays , Objects , Functions

const heros = ["Spiderman" , "Batman" , "Superman"];
let myObj = {
    name : "Shaurya",
    age : 20,
}

const myFunction = function () {
  console.log("Hello World!");
  
}

console.log(typeof bigNumber);
console.log(typeof myFunction);
console.log(typeof heros);

/*
array = object
null = object
string = string
function = function

*/