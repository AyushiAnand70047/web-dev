// Hoisting => it appears that variable or function is declared before intialisation

console.log('Age is ',age);

// if age is not defined: ReferenceError: age is not defined

// if age is defined using var: before intilisation(before line 8) its value is undefined 
var age = 20;

// if age is defined before initilisation: ReferenceError: Cannot access 'age' before initialization (let is hoist but case of Temproral dead zone => age is unreachable)
// let age = 20;