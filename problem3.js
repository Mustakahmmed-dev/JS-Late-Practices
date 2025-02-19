// split a string value with non-numerics and sum up them using loop, converting strings to num,

let amount = "$512jljdf503";
// let newValue = amount.split("");

// Looping way 1
let sum = 0;
for(let i of amount){   
  if(!isNaN(i)){
    sum += parseInt(i); 
  } 
}
// console.log("Way 1: ", sum);

