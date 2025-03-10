const person = {
    name: 'Ayushi',
    greet: function(){
        console.log(`Hello, ${this.name}`);
    }
}

console.log("Hello from JS");

// setTimeout(() => {
//     console.log('I am delayed by 5 second, wait for minimum 5 second')
// }, 5000);

setTimeout(person.greet.bind(person), 0) 

const num1 = 10;
const num2 = 20;

console.log('Sum ', num1+num2);

// Promise (priority is more than)
Promise.resolve().then(() => console.log('Promise is resolved'));

console.log('Bye Bye');