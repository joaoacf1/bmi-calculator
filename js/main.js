import { Modal } from "./modal.js";
import { AlertError } from "./alertError.js";
import { notNumber, bmiCalculator } from "./utils.js";

const form = document.querySelector('form');
const inputWeight = document.querySelector('#inputWeight');
const inputHeight = document.querySelector('#inputHeight');

inputWeight.oninput = () => AlertError.close();
inputHeight.oninput = () => AlertError.close();

form.onsubmit = (event) => {
    event.preventDefault();

    const weight = inputWeight.value;

    const height = inputHeight.value;

    const showAlertError = notNumber(weight) || notNumber(height);
    
    if (showAlertError) {
        AlertError.open();
        return;
    }
        
    const result = bmiCalculator(weight, height);
    displayResultMessage(result);

}

function displayResultMessage(result) {
    const message = `Your BMI is ${result}`

    Modal.message.innerText = message;
    Modal.open();
}
