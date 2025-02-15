// Swap: interchanging reciprocal...
let num1 = 30;
let num2 = 40;
console.log(num1, num2);

// num1 = num2;
// num2 = num1;
// console.log(num1, num2); this doesn't work, we have to take a tempo variable to set
let tempo = num1;

num1 = num2;
num2 = tempo;
console.log(num1, num2);

// Second method: destructuring
let a = 5;
let b = 10;
console.log(a, b);

[a, b] = [b, a];
console.log(a, b);