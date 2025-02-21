// Nesting obj testing
let products = [
    {name: "keyboard", price: 990},
    car = {
        name: "BMW",
        model: ["B2020", "B2021", "B2025"],
    }
];
// console.log(products[1].model[0]);

// Grabbing the matched items/ search query
let items = [
    {name: "maxpro phone", price: 21000},
    {name: "HP Laptop", price: 21000},
    {name: "Nokia phone", price: 31000},
    {name: "Itel phone", price: 2000},
    {name: "Laptop ZBook", price: 34000},
    {name: "Walton Laptop", price: 55300},
    {name: "Kuwal pura phone", price: 32323},
    {name: "One Time phone", price: 91000},
    {name: "second time laptop", price: 121000},
    {name: "all time laptop pro", price: 221000}

];


function searchItems(matched, search){
    let matchedItems = [];
    let laptops = [];
    for(let item of matched){
        if(item.name.toLowerCase().includes(search.toLowerCase())){
            matchedItems.push(item);
        }
        else{
            laptops.push(item);
        }
    }
    return matchedItems;
    return laptops;
}

let result = searchItems(items, "Phone");
let laptops = searchItems(items, "laptop");
console.log("Phones: ", result);
console.log("Laptops: ", laptops);