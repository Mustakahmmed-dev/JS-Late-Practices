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
console.log("Way 2:", sum2)


