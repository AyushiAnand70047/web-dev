const obj1 = {
    fname: 'Ayushi',
    lname: 'Anand',
    getFullname: function(){
        return `${this.fname} ${this.lname}`
    }
};

console.log(obj1.getFullname());
// voilate DRY- Do not repeat yourself
const obj2 = {
    fname: 'Tauqueer',
    lname: 'Alam',
    // getFullname: function(){
    //     return `${this.fname} ${this.lname}`
    // }
}

// obj2 is pointing to prototype of obj1
// getFullname is not there in obj2 but it is still accessed by obj2
obj2.__proto__ = obj1

console.log(obj2.getFullname());

class Person {
    constructor(fname,lname) {
        this.fname = fname;
        this.lname = lname;
    }
    getFullname() {
        return `${this.fname} ${this.lname}`
    }
}

const p1 = new Person('Ayushi','Anand');
const p2 = new Person('Tauqueer','Alam');

console.log(p1.getFullname());
console.log(p2.getFullname());