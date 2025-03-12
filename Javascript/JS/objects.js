const person = {
    x:10,
    firstname: 'Ayushi',
    lastname: 'Anand',
    hobbies: ['Coding','Travelling'],
    isMarried: false,
    getFullName: function(){
        return 'Ayushi Anand'
    },
    address: {
        hno: 1,
        street: 3,
        state: 'Bihar'
    }
}

console.log(person.x)
console.log(person.firstname)
console.log(person.lastname)
console.log(person.hobbies)
console.log(person.getFullName())
console.log(person.address.state)

let fname = 'Ayushi'
// Pass by Value
let fname2 = fname

fname2 = 'Anand'
console.log(fname)
console.log(fname2)

let p1 = {
    fname: 'Ayushi'
}
// p1, p2 poiniting to same location in memory
// Pass by Ref
let p2 = p1

p2.fname = 'Anand'
// p1, p2 poiniting to same location in memory
console.log(p1)
console.log(p2)

let p3 = {
    fname: p1.fname,
}
// now any change in p3 will not reflect in p1 as p1.fname is copying value but not address, if there is nested object than there will be problem as inner object reference will be passed not value
p3.fname = 'Ayushi'
console.log(p1)
console.log(p3)

// we can use spread operator
// Shallow Copy
let p4 = {
    ...p1
}

// Deep copy -> copy value for nested object also
const p1String = JSON.stringify(p1)
let p2 = p1String.parse(p1String)