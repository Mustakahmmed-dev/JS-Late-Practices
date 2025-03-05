// Two types of Functions: Regular Function & Arrow function

// Regular function
function callMyName(name){
    // console.log(`Hi ${name}`);
}
callMyName("Mustak Ahmmed");

// Arrow function
const myName = (name) => `Welcome back ${name}`;

// console.log(myName("Mustak"));

// Function default values setup
function sum(a, b=0){
    return a + b;
}
const result = sum(25);
console.log("Default value setup for addition", result);

// default value setup for multiplication
const multiply = (a, b=1) => a * b ;

console.log("The multiplication default value setup", multiply(10, 20));


// Default value setup for division using function
const divide = (a, b = 2) => {
    return a / b;
}
console.log(divide(20))