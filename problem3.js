// split a string value with non-numerics and sum up them using loop, converting strings to num,

let amount = "$512jl jdf5 03";
// let newValue = amount.split("");

// Looping way 1
let sum = 0;
for(let i of amount){   
  if(!isNaN(i) && i !== " "){
    sum += parseInt(i); 
  } 
}
console.log("Way 1: ", sum);


// Way 2
let amount2 = "$ 8 93 ";
let amount2Split = amount2.split("");
let sum2 = 0;
for(let i = 0; i < amount2Split.length; i++){
    if(!isNaN(amount2Split[i]) && amount2Split[i] !== " "){
        sum2 += parseInt(amount2Split[i]);
    }
}
// console.log("Way 2:", sum2)

// let numbers = "#232456";
// let number = numbers.split("");

// let sum3 = 0;
// for(let i = 0; i < number.length; i++){
//   let num = number[i];
//   if(!isNaN(num)){
//     sum3 += parseInt(num);
//   }
// }
// console.log(sum3);


// Bringing out the len and sum of string inputs
let numbers2 = "323 53#2 5$ 5rg34";

let emptyTotal = 0;
let totalNumValue = 0;
let specialChars = 0;
for(let num of numbers2){
  if(num === " "){
    emptyTotal += num.length;
  }
  else if(!isNaN(num)){
    totalNumValue += parseInt(num);
  }
  else{
    specialChars += num.length;
  }
}
console.log("Empty Spaces: ", emptyTotal);
console.log("Total Sum: ", totalNumValue);
console.log("Total Special Chars: ", specialChars);


