const arr = [1,2,3,4,5,6]

// Error: .forEach function does not exist on arr variable
// we now forEach is available so it will not go inside if, so for testing i am using myForEach as it is not existing in Array.prototype
if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(userFn){
        const originalArr = this

        for(let i=0;i<originalArr.length;i++){
            userFn(originalArr[i],i)
        }
    }
}

arr.myForEach(function(value,index){
    console.log(`My for each value at Index ${index} is ${value}`)
})

// first understand the signature
const ret = arr.forEach(function (value,index){
    console.log(`Value at Index ${index} is ${value}`)
})
console.log(ret) 
// forEach: No return, function as input, function parameter- value & index, calls my function for every value
