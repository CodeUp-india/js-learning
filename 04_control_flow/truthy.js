const userEmail =  []
if (userEmail){
    console.log("Got the user Email");
    
}else{
    console.log("Don't have user email");
    
}
//falsy values
//false, 0, -0, BigInt, null, undefined, NaN, ""

//turthy Values
// "0", 'false', " ",[], {}, functoin(){}
if (userEmail.length === 0) {
    console.log("array is empty");
    
}
const objOne = {}

if (Object.keys(objOne).length === 0) {
    console.log("Object is empty");
    
}