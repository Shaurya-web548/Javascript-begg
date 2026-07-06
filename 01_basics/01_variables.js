const accountId = 144553;
let accountEmail = "shauryaagarwal787@gmail.com";
var accountPass = "12345";
accountCity = "Jaipur"; 
let accountState;//value will be undefined...
//accountId = 2; // not allowed

accountEmail = "hc@hc.com";
accountPass = "21345";
accountCity = "bengaluru";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId , accountEmail , accountPass , accountCity , accountState]);

