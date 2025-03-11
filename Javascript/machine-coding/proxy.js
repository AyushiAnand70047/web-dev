const user = {
    name: "Ayushi",
    age: 20,
    password: "123"
}

const handler = {
    get(target,prop){
        if(prop === "password"){
            throw new Error("Acess Denied");
            
        }
        return target[prop]
    }
}

const proxyUser = new Proxy(user,handler)

console.log(proxyUser.password)

console.log(user.name)