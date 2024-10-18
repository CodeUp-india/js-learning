// Function basics

function print(){
    console.log("a");
    console.log("k");
    console.log("a");
    console.log("s");
    console.log("h"); 
}
//print()

function addTwoNumbers(num1, num2){
    return num1 + num2
}
const result = addTwoNumbers()
//console.log(result);

function UserLoggedInMessages(username) {
    if(!username){
        console.log("please enter name");
        
    }else { 
    return console.log(`${username} Just logged in `)}
}
UserLoggedInMessages()



// shoping kart

function caluclateKartPrice(...num1){

    return num1

}
 console.log(caluclateKartPrice(255, 23, 533, 454));

 const user = {
    username : "lali",
    price : 784
}

function getUserdata(getData){
        console.log(`Username is ${getData.username} and the price is ${getData.price}`);
}
//getUserdata(user)
getUserdata({
    username : "chokender",
    price : 899
})

const myArray = [12, 45, 55, 24]

function getThirdValue(newarray) {
    return newarray[2]
}
//console.log(getThirdValue(myArray))
console.log(getThirdValue([234, 45, 456, 232]));

