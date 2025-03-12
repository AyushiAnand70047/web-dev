let arr = [1, 2, 3, 4, 5];

//console.log(arr[-1]);

// let handler = {
//     get(target,prop){
//         const index = Number(prop)
//         if(index < 0){
//             return target[target.length + index]
//         }
//     }
// }

// let proxyArr = new Proxy(arr,handler);

// console.log(proxyArr[-1])

function negativeIndex(arr){
    return new Proxy(arr,{
        get(target, prop){
            const index = Number(prop)
            if(index < 0){
                return target[target.length+index]
            }
            return target[index]
        },
        set(target,prop,value){
            const index = Number(prop)
            if(index < 0){
                target[target.length + index] = value
            } else{
                target[index] = value
            }
            return true
        }
    })
}

// const proxyArray = negativeIndex(arr)

// if we want on change in proxyArray our original array does not changed
const proxyArray = negativeIndex([...arr])

console.log(proxyArray[-1]) // get the value

proxyArray[-1] = 10 // set the value

console.log(arr)
console.log(proxyArray)