//  (Immediately Invoked Function Expression)


(function chai(){
    // Named iife
    console.log(`DB Connected`);
    
})();
//Global Scope ke pollution se problem hoti hai , to remove the pollution we use the iife

((name) => {
console.log(`DB CONNECTED TWO ${name}`);

} )('Shaurya');