// Immediatley Invoked Function Expression (IIFE)

(function call(){
    //named IFFE
    console.log(`DB Connected`)
})();

((name) => {
    console.log(`${name}, Second DB Connected`);
})('akash')