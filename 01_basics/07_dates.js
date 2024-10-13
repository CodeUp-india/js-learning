// Dates
 
let myDate =  new Date()
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(typeof myDate);


let myCreatedDate =  new Date("2023-05-25")
//console.log(myCreatedDate.toDateString());
let myTimeStamp =  Date.now()

//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Date.now()/1000);

let newDate = new Date();

newDate.toLocaleString('default', {

   weekday: 'narrow'
})
console.log(newDate);




