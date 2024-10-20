const user =  {
    username: "akash",
    price: 899,
    Welcomemessages: function(){
       //console.log(`${this.username}, Welcome to the page`);
        //console.log(this)
    }

}
user.Welcomemessages()
user.username = "chockesh"
user.Welcomemessages();

function testingThis () {
    let name = "akash"
    //console.log(this.name);
    
    
}
testingThis()
//console.log(this)

const addtwo = (num1, num2) => ({username: "choco"})

console.log(addtwo(2, 4))