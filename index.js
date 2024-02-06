const userTemp = document.getElementById("input_temperature");
const celsiusToFahrenheitRadio = document.getElementById("celsius_to_fahrenheit");
const FahrenheitToCelsiusRadio = document.getElementById("fahrenheit_to_celsius");
const convertButton = document.getElementById("convert_button");
const temperatureOutput = document.getElementById("output")

convertButton.onclick = function(){
    if(celsiusToFahrenheitRadio.checked){
        temperatureOutput.innerHTML = ((Number(userTemp.value)) * 9 / 5 + 32).toFixed(1) + " °F";
    }
    else if(FahrenheitToCelsiusRadio.checked){
        temperatureOutput.innerHTML = ((Number(userTemp.value) - 32) * 5 / 9).toFixed(1) + " °C";
    }
    else{
        temperatureOutput.innerHTML = "please select a conversion"
    }

    
}