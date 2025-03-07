function prepareChai(type){ // type is parameter
    if(type.toLowerCase() === "masala chai"){
        console.log("Adding spieces to the chai");
    } else{
        console.log("Preparing regular chai")
    }
}

prepareChai("Masala Chai"); // Masala Chai is argument
prepareChai("Ginger Chai")

/* Ek online store mein, agar customer ka total bill amount 1000 se zyada hai, toh 10% discount milta hai, Nahi toh, full amount pay karna parta hai. */
function calculateTotal(amt){
    // convert to number
    let amount = Number(amt);
    // if(amount > 1000){
    //     return amount * 0.9;
    // }
    // return amount;
    return amount > 1000 ? amount * 0.9 : amount; // ternary operator(if part? pass this if true: if false pass this)
}

let finalBill = calculateTotal(1208);
console.log(finalBill);

/* Ek traffic light system mein, agar light "red" hai, toh "Stop" print karo. Agar "yellow" hai, toh "Slow down" print karo. Agar "green" hai, toh "Go" print karo */

function trafficStatus(lightColor){
    let color = lightColor.toLowerCase();
    switch(color){
        case "red":
            console.log("Stop");
            //return;
            break;
        case "yellow":
            console.log("Slow Down");
            break;
        case "green":
            console.log("Go");
            break;
        default:
            console.log("Invalid");
    }
}

trafficStatus("Yellow");

function checkTruthyValue(value){
    if(value){
        console.log("Truthy");
    } else{
        console.log("Falsy");
    }
}

checkTruthyValue(1)
checkTruthyValue("ayushi")
checkTruthyValue([])
checkTruthyValue([1,2,5])
checkTruthyValue(0)
checkTruthyValue("")
checkTruthyValue(undefined)
checkTruthyValue(null)

function login(username, password){
    if(username === "admin" && password === "123"){
        console.log("Login Successful");
    } else{
        console.log("Invalid Credentials");
    }
}

login("admin","123");