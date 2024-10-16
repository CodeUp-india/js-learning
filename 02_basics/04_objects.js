const  singletonObject = new Object()
//console.log(singletonObject);
const Tinderuser = {
    id: "12ab",
    name: "choco",
    email: "loco@gmail.com"
}

//console.log(Tinderuser);

const UserEntry = {

    fullname: {
        UserName: {
            firstName: "choco",
            lastName: "bar"
        }
    }
}
//console.log(UserEntry.fullname?.UserName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 2: "d"}
const obj3 = {...obj1, ...obj2}

console.log(obj3);

console.log(Object.keys(Tinderuser));



