const CelsiusE1 = document.getElementById("Celsius");
const FahrenheitE1 = document.getElementById("Fahrenheit");
const KelvinE1 = document.getElementById("Kelvin");

function computeTemp(){
const currentValue =  event.target.value; 
console.log(currentValue)

switch (event.target.name){
  case "Celsius":
    var temp=currentValue;
    KelvinE1.value =  (currentValue*1)+273;
   FahrenheitE1.value = temp * 1.8 + 32;

  break;
  case "Fahrenheit":
    var temp=currentValue;
    CelsiusE1.value = (currentValue - 32)/1.8;
    KelvinE1.value = (temp - 32) /1.8 + 273.15;

  break;
  case "Kelvin":
    var temp=currentValue;
  CelsiusE1.value =  currentValue - 273.15;
   FahrenheitE1.value = (temp - 273.15)* 1.8 + 32;
  break;
  default:
    break;
}
}