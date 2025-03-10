function greet(name){
    console.log(`Hello ${name}`);
}

greet("Ayushi")
greet("Tauqueer")

let globalVar = "I am global"

function modifyGlobal(){
    globalVar = "I am modified"
    let blockScopedVar = "I am blocked scoped"
    console.log(blockScopedVar)
}

modifyGlobal()
console.log(globalVar)

// immediatly envoked function expression (effy)
// (()=>{})()

let config = function(){
    let settings = {
        theme: "dark"
    }
    return settings
}() // execute once, initial setting

let person1 = {
    name: "Ayushi",
    greet: function(){
        console.log(`Hello ${this.name}`);
    }
}

let person2 = {
    name: "Tauqueer"
}

// call only call the function, bind return new function

person1.greet.call(person2)
person1.greet.call({name: "Anand"})

const bindGreet = person1.greet.bind(person2)
bindGreet()