let fname = 'Ayushi';

// Cannot redeclare block-scoped variable 'fname'
// let fname = 'Anand';

function sayName(){
    // global fname is existing in function scope
    //console.log('The value of fname inside fn is',fname)
    
    // in different scope we can redeclare, if it is not redeclare it search fname in parent scope
    let fname = 'Tauqueer'
    let lname = 'Alam'
    console.log('Name is',fname,lname)

}

console.log('value of fname is',fname);
sayName();


// Lexical Scope in javascript is a convention that determines how variables are accessible in a block of code

// In javascript, a closure is a function that has access to the variables of its outer function, even after the outer function has finished executing

// A function returning a function with its lexical scope binded is known as closure function.