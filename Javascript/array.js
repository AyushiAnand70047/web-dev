let fruits = ["apple","cherry","banana"];
console.log(fruits);

// other way to declare array
let Fruits = new Array("apple","cherry","banana");
console.log(Fruits);

console.log(fruits.length);

console.log(fruits[0]);
fruits[0] = "Kiwi";
console.log(fruits);

// add item in starting
fruits.push("blue berry");
console.log(fruits);

// add item in last
fruits.unshift("dragon fruit");
console.log(fruits);

// delete last element and return it
console.log(fruits.pop());
console.log(fruits);