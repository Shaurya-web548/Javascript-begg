const user = {
    username: "Aman",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to the wbesite`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "sam";
// user.welcomeMessage()

// console.log(this); //empty => under node environment
// browser ke andar jo global object hai woh window object hai..

// function chai(){
//     let username = "Shaurya"
//     console.log(this.username);
    
// }
// chai()

const chai = () => {
   let username = "Shaurya"
   console.log(this);
}
// chai()

// const addTwo = (num1 , num2) => {
//     return num1 + num2;
// }
// const addTwo = (num1 , num2) => num1 + num2;

// const addTwo = (num1 , num2) => (num1 + num2)
const addTwo = (num1 , num2) => {
    (username = "Aman")
}
console.log(addTwo(3 , 4));


// const myArray = [2,3,5,6,7,8];

