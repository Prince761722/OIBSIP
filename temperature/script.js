
function convertTemperature() {
    const tempValue = parseFloat(document.getElementById("tempValue").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    let result = "";


    if (isNaN(tempValue)) {
        result = "Please enter a valid number!";
    } else {
    
        if (fromUnit === "C" && toUnit === "F") {
            result = (tempValue * 9/5) + 32;
        } else if (fromUnit === "C" && toUnit === "K") {
            result = tempValue + 273.15;
        } else if (fromUnit === "F" && toUnit === "C") {
            result = (tempValue - 32) * 5/9;
        } else if (fromUnit === "F" && toUnit === "K") {
            result = ((tempValue - 32) * 5/9) + 273.15;
        } else if (fromUnit === "K" && toUnit === "C") {
            result = tempValue - 273.15;
        } else if (fromUnit === "K" && toUnit === "F") {
            result = ((tempValue - 273.15) * 9/5) + 32;
        } else {
            
            result = tempValue;
        }
    }

    
    document.getElementById("resultText").textContent = `Result: ${result.toFixed(2)} ${toUnit}`;
}


document.getElementById("convertButton").addEventListener("click", convertTemperature);
