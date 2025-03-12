// dot operator help in accessing object properties
const obj = {x: 1,length: 1}
console.log(obj.x)

// dot operator is also working on array, string,...(other than object)
const arr = [1,2,3]
arr.push(4)
console.log(arr)

const str = 'Ayushi'
console.log(str.length)

// there is prototype which having all the properties which we can access using dot operator
// We can add any property in prototype and can call that function
Object.prototype.chai = function (){
    console.log('different type of chai')
}
const tea = {name: 'Green Tea'}
tea.chai()

// this .map function is written by someone in Array prototype, that's why we are able to access it
const arr1 = [4,2,3]
// if browser is not updated and not supporting .map function
if(!Array.prototype.map){
    // Fallback - Ployfill 
    Array.prototype.map = function(){}
}
console.log(arr1.map(a => a*3))