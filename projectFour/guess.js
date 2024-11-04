let randomNumber = parseInt(Math.random()*100 +1)
//console.log(randomNumber);


const submit = document.querySelector('#submit')
const UserInput = document.querySelector('#guessField')
const GuessSlot = document.querySelector('.guesses')
const Remaining = document.querySelector('.lastResult')
const loworHi = document.querySelector('.LOWorHI')
const startOver = document.querySelector('.results')


const p = document.createElement('p')

let prevGuess = []
let playGame = true
let numGuess = 1

if (playGame) {
    submit.addEventListener('click', (e)=>{
        e.preventDefault()
        const guess = parseInt(UserInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please Enter a valid Number")
    }else if (guess < 1) {
        alert("Please Enter a Number greater than 1")
    }else if (guess > 100) {
        alert("Please Enter a Number less than 100")
    }else{
        prevGuess.push(guess)

        if(numGuess === 11){
            displayGuess(guess)
            diplayMessages(`Game Over. Random Number Was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
        
    }
}


function checkGuess(guess) {
    if (guess === randomNumber) {
        diplayMessages(`You guessed it right, ${randomNumber} is the random number`)
        endGame()
    } else if (guess < randomNumber) {
        diplayMessages('Guess is too Low')
    }else if (guess > randomNumber) {
        diplayMessages('Guess is too high')
    }     
}

function displayGuess(guess) {
    UserInput.value = '';
    if (numGuess <= 9) {
        GuessSlot.innerHTML += `${guess}, `
    }else{
        GuessSlot.innerHTML += `${guess}.`
    }
    Remaining.innerHTML = `${11 - numGuess}`
    numGuess++;
}
function diplayMessages(messages) {
    loworHi.innerHTML = `<h3>${messages}</h3>`
}
function endGame() {
    UserInput.value = ''
    UserInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<button id="newGame">Start Over</button>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}
function newGame() {
    const newGame = document.querySelector('#newGame')
    newGame.addEventListener('click', (e)=>{
        randomNumber = parseInt(Math.random()*100 +1)
        prevGuess = []
        numGuess = 1
        GuessSlot.innerHTML = ''
        Remaining.innerHTML = `${11 - numGuess}`
        UserInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}
