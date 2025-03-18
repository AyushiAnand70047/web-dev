// function increment(){
//     let count = 0;
//     return function (){
//         count++;
//         return count;
//     }
// }

// const x = increment();

// console.log(x());
// console.log(x());
// console.log(x());
// console.log(x());

function createCounter(stepSize = 1, initialValue = 0){
    return function(){
        initialValue = initialValue + stepSize;
        return initialValue;
    }
}

let i1 = createCounter(3,10);

console.log(i1())
console.log(i1())
console.log(i1())
console.log(i1())
console.log(i1())
console.log(i1())

i1 = null; // garbage collector now remove i1 reference from memory