const name = "akash"
const repoCount = 50 

//console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("cho-co")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('c'));


const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-5, 3)
console.log(anotherString);


const newStringOne = "     Choco      "
console.log(newStringOne.trim());

const url = "https://choco.com/choco%20lelo"

console.log(url.replace('%20', '-'));






