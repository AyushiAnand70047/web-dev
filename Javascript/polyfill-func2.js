const arr = [1, 2, 3, 4, 5, 6]

// Error: .map function does not exist on arr variable
if(!Array.prototype.myMap){
    Array.prototype.myMap = function(userFn){
        const result = []
        for(let i=0;i<this.length;i++){
            const value = userFn(this[i],i)
            result.push(value)
        }
        return result
    }
}

// signature of .map => return a new array, iterate on each element and do some operation, does not change original array
const ret = arr.map((e) => e*2)
console.log(arr)
console.log(ret)

const myResult = arr.myMap((e) => e*2)
console.log(arr)
console.log(myResult)