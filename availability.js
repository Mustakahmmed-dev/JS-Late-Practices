// Show how many items are there with the search query with length and items together

let products = [
    {name: "Super Book", model: "L1212", price: 25000, description: "This laptop is a well structured with good configurations and price efficiency"},
    {name: "phone", model: "P1414", price: 14000, description: "This phone is one of best phones in this market with overall performance"},
    {name: "walton phone", model: "P1414", price: 14000, description: "This phone is one of best phones in this market with overall performance"},
    {name: "lpatop", model: "L2022", price: 35000, description: "8GB RAM, 256GB SSD, Corei5 processor, 14.5in"},
    {name: "laptop", model: "L2023", price: 34000, description: "4GB RAM, 120GB SSD, Corei3 processor, 14.5in"},
    {name: "Kual Pora phone", model: "P1414", price: 14000, description: "This phone is one of best phones in this market with overall performance"},
    {name: "Noya phone", model: "P1414", price: 14000, description: "This phone is one of best phones in this market with overall performance"},
    {name: "Gaming Device", model: "L2023", price: 34000, description: "This laptop is a perfect device for gamers with a configuration of 8GB RAM, 120GB SSD, Corei3 processor, 14.5in"},
    {name: "Laptop", model: "L2023", price: 34000, description: "8GB RAM, 120GB SSD, Corei3 processor, 14.5in"},
    {name: "laptop", model: "L2024", price: 44000, description: "8GB RAM, 256GB SSD, Corei3 processor, 14.5in"},
    {name: "Laptop", model: "L2025", price: 64000, description: "16GB RAM, 256GB SSD, Corei7 processor, 14.5in"},
    {name: "laptop", model: "L2022", price: 24000, description: "4GB RAM, 120GB SSD, Corei3 processor, 14.5in"},
    {name: "Nokia phone", model: "P1414", price: 14000, description: "This phone is one of best phones in this market with overall performance"},
    {name: "Samsung phone", model: "P1414", price: 14000, description: "This phone is one of best phones in this market with overall performance"},
];

function showAvail(products, search){
    let matchedProducts = [];
    for(let product of products){
        if(product.name.toLowerCase().includes(search) || product.description.toLowerCase().includes(search)){
            matchedProducts.push(product)
        }
    }
    return matchedProducts;
}

let search = "aptop";
let result = showAvail(products, search.toLowerCase());
console.log("Found", result.length, result);