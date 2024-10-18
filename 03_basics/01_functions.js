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

