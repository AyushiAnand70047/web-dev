// server call, rainy, cloudy, sunny

let weather = "rainy"

if(weather === "rainy"){
    console.log("It's raining, carry umbrella");
}
else if(weather == "cloudy"){
    console.log("It's cloudy, wear warm cloth");
}
else if(weather == "sunny"){
    console.log("Today is sunny");
}
else{
    console.log("unable to get weather");
}


let numberofGuest = 1;

let pizzaSize;

// smal <= 2, medium <=5 else large

if(numberofGuest <= 2){
    pizzaSize = "small";
}
else if(numberofGuest <= 5){
    pizzaSize = "medium";
}
else{
    pizzaSize = "large";
}

console.log(pizzaSize)