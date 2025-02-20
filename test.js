// Based on this case, obj values can be changed to cases while arrays aren't
let obj = {letters: "a,b,c,d,e,f,g"};
console.log(obj.letters.toUpperCase());

let arr = ["a,b,c,d,e,f,g,h,i,j"];
console.log("Arr: ", arr)
// console.log(arr.toUpperCase()); doesn't work

// 2: This case works
let sobLetters = [];
for(let i = 0; i < arr.length; i++){
    sobLetters.push(arr[i].toUpperCase());
}
console.log(sobLetters)