const myNUms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//console.log(myNUms.slice(6, 11))
//console.log(myNUms.splice(5, 7));
//console.log(myNUms);

//const newNum = myNUms.filter( (num) => num > 7 )
let newNum = []
myNUms.forEach( (num) => {
    if (num >7) {
        return newNum.push(num)
    }
 })
console.log(newNum);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

 let mybooks = books.filter( (bk) =>  bk.genre === "Non-Fiction")
 mybooks = books.filter( (bk) => {return bk.publish >= 1999})
 console.log(mybooks);
 





