// Higher order function -> function which return a function
function ptaNhi(fn, delay){
    let myId;
    return function(...args){
        clearTimeout(myId)
        myId = setTimeout(()=>{
            fn.apply(this,args)
        },delay)
    }
}

function greet(name){
    console.log(`Hello ${name}`)
}

// ptaNhi(() => greet("Ayushi"),5000)
// ptaNhi(() => greet("Ayushi"),5000)
// ptaNhi(() => greet("Ayushi"),5000)

const sachMeNhiPta = ptaNhi(() => greet("Ayushi"),3000)

// remove a past request => keep a reference of it
// fire a new request

sachMeNhiPta()
sachMeNhiPta()
sachMeNhiPta()