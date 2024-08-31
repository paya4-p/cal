function appendNumber(number) {
    const display = document.getElementById('display');
    display.value += number;
}

function appendOperator(operator) {
    const display = document.getElementById('display');
    display.value += operator;
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

// Funcion para mantener animacion de las teclas
function handleKeyboardInput(event) {
    const display = document.getElementById('display');
    const key = event.key;
    const buttons = document.querySelectorAll('.button'); // Selecciona todas las teclas

    // Elimina la clase de animacion de todos los botones
    buttons.forEach(button => button.classList.remove('animate__animated', 'animate__bounceIn'));

    // Añade diferentes clases de animaciones 
    const button = [...buttons].find(button => button.textContent === key || button.textContent === key.toUpperCase());
    if (button) {
        button.classList.add('animate__animated', 'animate__bounceIn');
        setTimeout(() => button.classList.remove('animate__animated', 'animate__bounceIn'), 1000);
    }

    if (!isNaN(key)) { //animacion para las teclas numericas
        appendNumber(key);
    } else if (['+', '-', '*', '/'].includes(key)) { //animacion para los operadores
        appendOperator(key);
    } else if (key === 'Enter') { //animacion para la tecla enter o igual
        calculate();
    } else if (key === 'Backspace') { 
        display.value = display.value.slice(0, -1); //animacion para la tecla esc
    } else if (key === 'Escape') { 
        clearDisplay();
    }
}

// Add event listener for keydown event
document.addEventListener('keydown', handleKeyboardInput);
