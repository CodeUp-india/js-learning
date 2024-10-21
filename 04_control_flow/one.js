// if 
const isUserLoggedIn =  true
const temperature =  38
if (temperature < 50) {
    console.log("less than 50");   
}
else{
    console.log("temperature is greater than 50");
}

/*const score = 200
if (score > 100) {
    let power = "Damage Nullification"
    console.log(`power : ${power}`);  
}*/
//console.log(`power = ${power}`);

const balance = 1000
//if (balance > 500) console.log("test"), console.log("test2");



/*if (balance < 500) {
    console.log("less than 500");
    
}else if (balance < 750) {
    console.log("less than 750");
    
}else if (balance < 900) {
    console.log("less than 900");
    
}else{
    console.log("less than 1200");
    
}*/

const UserLoggedIn =  true
const debitCard = true
if (UserLoggedIn && debitCard){
    console.log("Card Accepted");   
}

// Nullish Coalescing Operator (??): null undefined

 let val1;
// val1 = 5??10
// val1 = null?? 10
//val1= undefined ?? 15
val1 =  null ?? 20 ?? 10
 console.log(val1);

 // Ternary Operator

 const iceTeaPrice = 20
 iceTeaPrice <= 80 ? console.log("Price is low") : console.log("price is high");
 