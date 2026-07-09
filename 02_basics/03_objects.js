// singleton - when we declare from literals than there is no formation of singleton.When made from constructor than singleton will form.
// Object.create => constructor

//object literals

const mySym = Symbol("key1");

const Jsuser = {
    name : "Shaurya",
    "full name" : "Shaurya Agarwal",
    [mySym] : "mykey1",//imp!!
    age : 18,
    location : "Jaipur",
    email : "shaurya@google.com",
    isLoggedIn : false,
    lastLoggedINDays : ["Monday" , "Wednesday"]
}

// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mySym]);

Jsuser.email = "aman@gpt.com";
// Object.freeze(Jsuser)//Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello Js User");   
}
Jsuser.greetingTwo = function(){
    console.log(`Hello Js user , ${this.name}`);   
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());




