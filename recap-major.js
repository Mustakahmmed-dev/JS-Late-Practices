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

// ====================================================

// Spread operator
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(...months);

const natoks = {
    name: "hakku",
    role: "acting",
    figure: "boli boli muta"
};
const natok2 = {
    name2: "Aziz",
    role2: "motivations",
    figure3: "normal",
}
const allNatoks = {...natoks, ...natok2}
console.log(allNatoks);


// ============================================
// Common use cases/options in obj
const newObj = {
    name: "Mustak",
    age: 20,
    country: "Myanmar"
};
newObj.passion = "Tech";
Object.seal(newObj); //properties can't be added and deleted anymore
delete newObj.name;

newObj.age = 50;
Object.freeze(newObj); //values can't be added or changed anymore

newObj.passion = "Tech";
// console.log(Object.entries(newObj))
// console.log(Object.keys(newObj))
console.log("Only the values from the Obj", Object.values(newObj));

// Loop through the object
for(let key in newObj){
    console.log("key: ", key, "Values: ", newObj[key])
}

//Second
for(let [key, value] of Object.entries(newObj)){
    console.log("Last details: ", "key: ", key, " Value: ", value);
}