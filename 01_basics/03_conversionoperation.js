let score = null
console.log(typeof score);

let convertString = Number(score)

// 45 => Number
// "45abc" => NaN
// "Akash" => String
// 1 => true, 0 => false
// null = 0

console.log(score)
console.log(typeof convertString);
console.log(convertString)


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let myYoutubeName = "VIP's"
let anotherName =  myYoutubeName
anotherName =  "choco"


console.log(myYoutubeName);
console.log(anotherName);



let userOne =  {
    email : "chocobar@google.com",
    phoneNumber : 4356783910
}

let userTwo = userOne

userTwo.email = "example@google.com"

console.log(userOne.email);
console.log(userTwo.email);




