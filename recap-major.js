// Two types of Functions: Regular Function & Arrow function

// Regular function
function callMyName(name){
    // console.log(`Hi ${name}`);
}
callMyName("Mustak Ahmmed");

// Arrow function
const myName = (name) => `Welcome back ${name}`;

// console.log(myName("Mustak"));

// ================================================
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
console.log("division: ", divide(20))

//========================================
// Obj and Arr destruction
const myProperties = {
    item1: "Desktop",
    item2: "Laptop",
    item3: "Second Laptop",
    item4: "Mouse",
    item5: "Keyboard",
    item6: "Mousepad",
    item7: "Books",
    item8: "Pens",
    item9: "Table",
    item10: "Chairs"
};
// destructuring means to extract values from Obj and Arr to a distinct variable...
const {item1, item2, item3, item4, item5, item6, item7, item8, item9, item10} = myProperties;
console.log("Item1 from spread op: ", item1);


// array destructuring: This works based on the index num of the array
const fruits = ["mango", "banana", "apple", "orange", "grapes", "plum", "dates", "pineapple", "guava"];
const [fruit1, fruit2, fruit3] = fruits;

console.log("Fruit from arr destructuring: ", fruit2)

