const ptaNhi = (fn, delay) => {
    let myId = null;
    return (...args) => {
        if(myId === null){
            fn(...args);
            myId = setTimeout(() => {
                myId = null
            },delay)
        }
    }
}

function greet(name){
    console.log(`Hello, ${name}`)
}

const sachMeNhiPta = ptaNhi(() => greet("Ayushi"),3000)

sachMeNhiPta()
sachMeNhiPta()
sachMeNhiPta()