const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')
    
    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please Enter Valid Height ${height} `    
    }
    else if  (weight === '' || weight < 0 || isNaN(weight)) {  
    }
    else{
        const bmi = (weight / ((height*height) / 10000)).toFixed(2)
        result.innerHTML = `<span>${bmi}<span>`
        if (bmi <= 18.9) {
            result.innerHTML = `Your BMI is ${bmi} Put on some weight you skinny AF`
        } else if (bmi >= 18.9 && bmi <= 24.8) {
            result.innerHTML = `Your BMI is ${bmi}, You are fine `
        }else{
            result.innerHTML = `Damm!!!! ${bmi} is your BMI. Go to GYM you Caesho looking fat motherfucker`
        }
    }


})