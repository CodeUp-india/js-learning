const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
};
console.log(randomColor());
let stopChange
const startChangingcolor = function(){
     if (!stopChange) {
        stopChange = setInterval(changeBgColor, 1000)
     }
    function changeBgColor() {
        document.body.style.backgroundColor = randomColor()
    }
}

const stopChangingcolor = function (){
    clearInterval(stopChange)
}
document.querySelector('.start').addEventListener('click', startChangingcolor)
document.querySelector('.stop').addEventListener('click', stopChangingcolor)