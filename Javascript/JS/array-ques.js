// Problem: Create an array containing different types of teas.
const teas = ["Masala Tea","Ginger Tea","Oolong Tea","Adrak Tea","Herbal Tea"];
console.log(teas);

// Problem: Add "Chamomile Tea" to the existing list of teas
teas.push("Chamomile Tea");
// teas.unshift("Chamomile Tea");
console.log(teas)

// Problem: Remove "Oolong Tea" from the list of teas.
const index = teas.indexOf("Oolong Tea");
if(index > -1){
    teas.splice(index,1);
}
console.log(teas);

// Problem: Filter the list to only include teas that are caffeinated.
// we now accept herbal tea rest are caffinated
const caffeinatedTeas = teas.filter(tea => tea !== "Herbal Tea");
console.log(caffeinatedTeas);

// Problem: Sort the list of teas in alphabetical order.
console.log(teas.sort());

// Problem: Use a for loop to print each type of tea in the array
for(let i=0;i<teas.length;i++){
    console.log(teas[i]);
}

// Problem: Use a for loop to count how many teas are caffeinated(teas excluding "Herbal Tea")
let caffinatedTeasCount = 0;
for(let i=0;i<teas.length;i++){
    if(teas[i] !== "Herbal Tea"){
        caffinatedTeasCount++;
    }
}
console.log(caffinatedTeasCount);

// Problem: Use a for loop to create a new array with all tea name in uppercase
const uppercaseTeas = []
for(let i=0;i<teas.length;i++){
    uppercaseTeas.push(teas[i].toUpperCase());
}
console.log(uppercaseTeas);

// Problem: Use a for loop to find the tea name with the most characters
let longestTea = "";
for(let i=0;i<teas.length;i++){
    if(teas[i].length > longestTea.length){
        longestTea = teas[i];
    }
}
console.log(longestTea);

// Problem: Use a for loop to reverse the order of teas in the array.
const reversedArray = [];
for(let i=teas.length-1;i>=0;i--){
    reversedArray.push(teas[i]);
}
console.log(reversedArray);