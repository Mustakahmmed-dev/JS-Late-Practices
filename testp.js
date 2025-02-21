// Testing of redeclaration of obj with using const 
// const obj = {name: "Ali"};
// obj.age = 20;
// obj.name = "Ahmmed";
// obj = {name: "mustak", age: 30}
// // console.log(obj)

// Test 2: Obj and arrays are usable inside each other
// let obj2 = {Greeting: "Hi" ,names: ["Ahmmed is just here writing codes to test you", "Next text to test"]};
// console.log(obj2)

// Multi Dimentional array
let matrix = [
    [1, 3, 2, 5, 6, 19],
    [30, 4, 5, 3, 2, 1, 8],
    [2, 3, 1, 5, 6, 4, 9, 12, 21, 50]
  ];
//   console.log(matrix[0][2]); // 2 (Row 0, Column 2)
//   console.log(matrix[1][5]); // 1 (Row 1, Column 5)
//   console.log(matrix[2][7]); // 12 (Row 2, Column 7)


// Looping through an array
let fruits = ["mango", "jango", "dango", 'sango', 'lango', "hango"];
// fruits.forEach(fruit => console.log(fruit));

// Function in forEach() method
fruits.forEach(function(fruit, index){
    // console.log(index, fruit)
}
)

// using direct function for forEach method
function showElements(element, index){
    // console.log(index, element)
}
fruits.forEach(showElements);

// Simple way for the forEach() method
// fruits.forEach(fruit => console.log(fruit));


// Modify and Use forEach() method
let arrNumbers = [1, 2, 3, 4, 5];
let total = 0;
arrNumbers.forEach(num =>{
    let double = num * 2;
    total+= double;
    // console.log(double);
})
// console.log(total)


let users = [
    {name: "Mustak", age: 20},
    {name: "Unknown", age: 99}
]
users.forEach(user => user.age+= 2);
// console.log(users)


let numbers2 = [2, 3, 4, 5];
let doubledNumbers = numbers2.map(num =>(num*= 2));
console.log(doubledNumbers)