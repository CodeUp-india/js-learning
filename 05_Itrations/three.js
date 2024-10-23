//for of 
//['','','']

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    //console.log(`value is ${num}`)
    
}

let greeting =  "hello choco";
for (const greet of greeting) {
    if (greet == " ") {
        //console.log("!! space detected !!");
        break
    }
   // console.log(`each char is ${greet}`);
    
}


//maps


const map = new Map()
map.set('IN', "India")
map.set('USA', "AMERICA")
map.set('RU', "RUSSIA")
//console.log(map);

for (const [key, value] of map) {
    console.log( key, ':- ', value);
}
