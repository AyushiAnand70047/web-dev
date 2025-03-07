let chaiTypes = ["Masala Chai","Ginger chai","Green Tea","Lemon Tea"];

console.log(chaiTypes[2]);

console.log(`Total chai Types: ${chaiTypes.length}`);

chaiTypes.push("Herbal Tea"); // Insert value at last
const data = chaiTypes.pop(); // delete last element and return it
console.log(data);

let index = chaiTypes.indexOf("Green Tea");

if(index !== -1){
    chaiTypes.splice(index,1)
}

console.log(chaiTypes);

chaiTypes.forEach((chai,index)=>{
    console.log(`${index + 1}. ${chai}`)
})

let moreChaiTypes = ["Oolong Tea","White Tea"];

let allChaiTypes = chaiTypes.concat(moreChaiTypes);

let newChaiTypes = [...chaiTypes,"Chamolina Tea"];
console.log(newChaiTypes);

// Object Literals
let chaiRecipe = {
    name: "Masala Chai",
    ingredients: {
        teaLeaves: "Assam Tea",
        milk: "Full Cream Milk",
        sugar: "Brown Sugar",
        spices: ["Daalchini","Ginger"]
    },
    instruction: "Boil water, add tea leaves, milk, sugar and spices"
}

console.log(chaiRecipe.ingredients.spices[1])

let updatedChaiRecepie = {
    ...chaiRecipe,
    instruction: "Boil water, add tea leaves, milk, sugar, spieces with some love"
}

console.log(updatedChaiRecepie)

// object and array destructuring 
let {name, ingredients} = chaiRecipe // name, ingredients mapping with chaiRecipe object
let [firstChai, secondChai] = chaiTypes

console.log(ingredients)
console.log(secondChai)