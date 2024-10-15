//singleton

// object literals
const mysym = Symbol("key1")

const JsUser = {
    name: "akash",
    "full name": "akash singh",
    [mysym]: "mykey1",
    address: "101 bhakti park",
    age: 20,
    email: "chokesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "friday"]
}

//console.log(JsUser.email);
//console.log(JsUser["email"]);
//console.log(JsUser["full name"]);
//console.log(typeof JsUser[mysym]);

JsUser.email = "chokeshwari@choco.com"
//Object.freeze(JsUser)


console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello choki log");
    
}
console.log(JsUser.greeting());

 JsUser.greetingtwo = function(){
    console.log(`hello boy, ${this.name}`);
    

}
console.log(JsUser.greetingtwo());






