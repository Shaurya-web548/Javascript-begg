const name = "Shaurya";
const repoCount = 50

// console.log(name + repoCount + " Value"); //older version

//use backticks bcoz of string interpolation

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Hitesh-Amc');

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));


const newString =  gameName.substring(0,5);//Last value is not included.Means char at index 5.Can take negative values but start it from 0 only not from negative value.
// console.log(newString);


const anotherString = gameName.slice(-8,4); // We can negaive values in slice . if we give it will start from reverse.

// console.log(anotherString);

//Trim and replace

const newStringOne = "   aman   ";
// console.log(newStringOne);
// console.log(newStringOne.trim());//Removes the starting and end spaces from the string.

const url = "https://ECB.com/ECB%20English";

console.log(url.replace('%20', '-'));
console.log(url.includes('aj'));


console.log(gameName.split('-'));
