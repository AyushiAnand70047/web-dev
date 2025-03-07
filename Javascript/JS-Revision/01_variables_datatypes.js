// Variable
var name = "Ayushi Anand" // var is not used now because of scope issue
let myName = "Ayushi Anand"
const pi = 3.14 // const can't be changed

// Data types
let number = 42; // Number
let text = "Hello"; // String
let isTrue = true; // Boolean
let nothing = null; // Object
let undefinedVar = undefined; // undefined
let symbolVar = Symbol(); // Symbol

console.log(typeof nothing);

// Objects
let person = {
    name: "Ayushi",
    age: 20,
    isStudent: true
}

// data conversion
let num = "42";
let convertedNum = Number(num); // standard way
// let convertedNum = +num;
// let convertedNum = parseInt(num);
console.log(convertedNum);
console.log(typeof convertedNum);

let str = 123;
let convertedString = String(str);
console.log(convertedString);
console.log(typeof convertedString);

// Operations
let num1 = 10;
let num2 = 3;

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
let remainder = num1 % num2;
let power = num1 ** num2;

// data comparison 
let x = "10";
let y = 10;

// Equal to(==), Not Equal to(!=), greater than(>), less than(<), greater than equal to(>=), less than equal to(<=)
console.log(x == y); // only check data
console.log(x === y); // strict comparison, check both data and data type

// JS Library -> math, DateTime
console.log(Math.max(5,10));
console.log(Math.random()); // return random number between 0 and 1
console.log(Math.floor(Math.random()*10));

// String Operation
let firstName = "Ayushi";
let lastName = "Anand";

let fullName = firstName + " " + lastName;
console.log(fullName);

let message = "Hello World";
console.log(message.length);
console.log(message.toLowerCase());
console.log(message.indexOf("Wor")); // give index of substring
console.log(message.slice(0,4)) // give substing in a given string

// template literals
let greeting = `Hello, ${firstName} ${lastName}`;
console.log(greeting);