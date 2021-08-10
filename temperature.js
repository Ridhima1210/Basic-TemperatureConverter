const celsius_input=document.querySelector('#celsius>input');
const fahrenheit_input=document.querySelector('#fahrenheit>input');
const kelvin_input=document.querySelector('#kelvin>input');

function roundNum(num){
    return Math.round(num*100)/100;
}

function cfk(){
    const ctemp=parseFloat(celsius_input.value);/*parse used to convert string to float*/
    const ftemp=(ctemp*(9/5))+32;
    const ktemp=ctemp+273.15;
    fahrenheit_input.value=roundNum(ftemp);
    kelvin_input.value=roundNum(ktemp);
}

function fck(){
    const ftemp=parseFloat(fahrenheit_input.value);/*parse used to convert string to float*/
    const ctemp=(ftemp-32)*(5/9);
    const ktemp=(ftemp+459.67)*5/9;
    celsius_input.value=roundNum(ctemp);
    kelvin_input.value=roundNum(ktemp);
}

function kcf(){
    const ktemp=parseFloat(kelvin_input.value);/*parse used to convert string to float*/
    const ctemp=ktemp-273.15;
    const ftemp=9/5*(ktemp-273)+32;
    celsius_input.value=roundNum(ctemp);
    fahrenheit_input.value=roundNum(ftemp);
}
celsius_input.addEventListener('input',cfk);
fahrenheit_input.addEventListener('input',fck);
kelvin_input.addEventListener('input',kcf);

