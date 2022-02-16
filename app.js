function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin +'';
    if(pinString.length == 4){
    return pin;}
    else 
    return getPin();
}

function generatePin(){
    const pin = getPin();

    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click',function(e){
    const number = e.target.innerText
    const calc = document.getElementById('type-numbers')
    if(isNaN(number)){
        if(number == 'C')
        calc.value = ''
    }
    else{
    const preCalcNumber = calc.value
    const newCalcNumber = preCalcNumber + number
    calc.value = newCalcNumber
    }
})

function verifyPin(){
    const pin = document.getElementById('display-pin').value
    const typeNumbers = document.getElementById('type-numbers').value
    const notifySuccess = document.getElementById('notify-success')
    const failError = document.getElementById('notify-field')
    if(pin == typeNumbers){
        notifySuccess.style.display ='block'
        failError.style.display ='none'
    }
    else{
        failError.style.display ='block'
        notifySuccess.style.display ='none'
}
}