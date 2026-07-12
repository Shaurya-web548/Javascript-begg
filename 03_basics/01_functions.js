function sayMyName() {
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("U");
    console.log("R");
    console.log("Y");
    console.log("A");
}

// sayMyName()

// function addTwoNumbers(number1 , number2){

//     console.log(number1 + number2); 
// }

function addTwoNumbers(number1 , number2){
    //  let result = number1 + number2
    //  return result;
    return number1 + number2;
     console.log("Aman");//After return it will not work
     
}

const result = addTwoNumbers(3 , 5)

// console.log("Result:" , result);

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in.`
}

// console.log(loginUserMessage("Aman"));


function calculateCartPrice(val1 , val2 ,...num1){
  return num1
}

// console.log(calculateCartPrice(200, 400 ,500 , 2000));


const user = {
    username: "shaurya",
    prices: 199
}

function handleObject(anyObject){
   console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user);
handleObject({
    username: "Sam",
    price: 599
})


const myNewArr = [200 , 400 ,100 , 600]

function returnSecondValue(getArray){
   return getArray[1];
}
// console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([200, 400 , 100, 600]));

