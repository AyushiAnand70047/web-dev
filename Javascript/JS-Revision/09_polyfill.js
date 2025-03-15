if (!Array.prototype.myForEach) {
    Array.prototype.myForEach = function (cb) {
        for (let i = 0; i < this.length; i++) {
            cb(this[i], i)
        }
    }
}

if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (cb) {
        const result = []
        for (let i = 0; i < this.length; i++) {
            const value = cb(this[i], i)
            result.push(value)
        }
        return result
    }
}

if (!Array.prototype.myReduce) {
    Array.prototype.myReduce = function (cb, initialValue) {
        const start = initialValue ? 0 : 1
        let acc = initialValue || this[0]
        for (let i = start; i < this.length; i++) {
            acc = cb(acc, this[i])
        }
        return acc
    }
}

const arr = [2, 5, 1, 4]

arr.myForEach((value, index) => console.log(`At Index ${index}: ${value}`))

const trippledArray = arr.myMap((e) => e * 3)
console.log(trippledArray)

let sum = arr.myReduce((acc, curr) => acc + curr,0)
console.log(sum);