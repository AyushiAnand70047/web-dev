let salesData = [
    {product: "Laptop", price: 1200},
    {product: "Smartphone", price: 800},
    {product: "Headphone", price: 150},
    {product: "Keyboard", price: 80},
];

let initialValue = 0;
let totalSales = salesData.reduce((acc,sale) => acc + sale.price,initialValue) // ()=>() automatic return value, ()=>{} we need to return value

console.log(totalSales);

let inventory = [
    {name: "Widget A", stock: 30},
    {name: "Widget B", stock: 120},
    {name: "Widget C", stock: 45},
    {name: "Widget D", stock: 70},
]

// items less than 50
let lowStockItems = inventory.filter((item)=> {
    return item.stock < 50
})
console.log(lowStockItems);

let userActivity = [
    {user: "Ayushi", activityCount: 45},
    {user: "Anand", activityCount: 62},
    {user: "Tauqueer",activityCount: 40},
]
// find most active user
let activeUser = userActivity.reduce((maxUser, user) => user.activityCount > maxUser.activityCount ? user : maxUser);
console.log(activeUser);