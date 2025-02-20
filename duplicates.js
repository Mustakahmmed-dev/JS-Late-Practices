// Find out the duplicates and its lenght

let products = [
    {name: "laptop", category: "electronics", price: 30000},
    {name: "mobile-backpart", category: "accessories", price: 100},
    {name: "desktop", category: "electronics", price: 40000},
    {name: "charger", category: "accessories", price: 1800},
    {name: "keyboard", category: "electronics", price: 700}
]

let electronics = [];
let accessories = [];

for(let product of products){
    if(product.category === "electronics"){
        electronics.push(product.name);
    }
    else if(product.category === "accessories"){
        accessories.push(product.name);
    }
}

console.log("Available in electronics", electronics.length, ":", electronics);
console.log("Accessories: ", accessories);