let myArray = [1,4,2,3,5,6];

function sum(myArray){
    let sum = 0;
    for(let i=0;i<myArray.length;i++){
        sum += myArray[i];
    }
    return sum;
}

let result = sum(myArray);
console.log(result);

let anotherResult = sum([5,8,2,4,1]);
console.log(`My result is ${anotherResult}`);