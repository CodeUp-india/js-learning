const marvel_heros =  ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "green lantren", "batman"]
//marvel_heros.push(dc_heros)
//console.log(dc_heros);
const merg = marvel_heros.concat(dc_heros)
//console.log(merg.toString());
const all_new_heros = [...marvel_heros, ...dc_heros]
//console.log(all_new_heros);


const big_arry = [1, 2, 3, 4, [5, 6, 7, [8, 9, 0]]]

const real_arry = big_arry.flat(Infinity)
//console.log(real_arry);

//console.log(Array.isArray("akash"));
//console.log(Array.from("akash"));
 
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
