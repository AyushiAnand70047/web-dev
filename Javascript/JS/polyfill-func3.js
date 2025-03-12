const arr = [1,2,3,4,5,6]
// Error: .filter function does not exist on arr variable
if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function(userFun){
        const result = []
        for(let i=0;i<this.length;i++){
            if(userFun(this[i])){
                result.push(this[i])
            }
        }
        return result;
    }
}

const myResult = arr.myFilter((e) => e%2 == 0)
console.log(arr)
console.log(myResult)

// signature of .filter => return new array, take user function as input, if user function return true than add in new array
const ret = arr.filter((e) => e%2 == 0)
console.log(arr)
console.log(ret)