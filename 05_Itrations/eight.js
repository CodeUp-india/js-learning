const myNUms = [1, 2, 3]
const mygodo = myNUms.reduce( (acc, curr) => {
    //console.log(`acc : ${acc} and curr : ${curr}`);
    return acc + curr
}, 0)
//console.log(mygodo);

const ShoppingCart = [{
        ItemName: "JS books",
        price : 3000
},
{
    ItemName: "Android",
    price : 5000
},
{
    ItemName: "Data Science",
    price : 13000
},]

const shoppingTotal = ShoppingCart.reduce( (acc , item) => item.price + acc , 0 )
console.log(shoppingTotal)
