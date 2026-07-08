//Arrays

const myArr = [0 , 1 , 2 , 3 , 4, 5];

const myHeros = ["Spiderman" , "Batman"];

const myArr2 = new Array(1 , 2, 3, 4);
// console.log(myArr[1]);

//Array Methods

// myArr.push(7);
// myArr.push(9);
// myArr.pop();
// myArr.pop();

// myArr.unshift(4); //Elements to insert at the start of the array.

// myArr.shift(); //Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

// const newArr = myArr.join() //Adds all the elements of an array into a string, separated by the specified separator string.

// console.log(myArr);
// console.log(newArr);

//slice , splice

console.log("A" , myArr);

const mynewArr1 = myArr.slice(1,3) //The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
 console.log(mynewArr1);
 console.log("B" , myArr);
 
 const mya2 = myArr.splice(1,3) //Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
 console.log("C" , myArr);
 
 console.log(mya2);
 