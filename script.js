let currentInput = '0';
let operator = null;
let previousInput = null;

const screen = document.getElementById('screen');

// Update screen
const updateScreen = () => {
    screen.textContent = currentInput;
    changeBackgroundColor();
};

// Change background color
const changeBackgroundColor = () => {
    const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    document.body.style.backgroundColor = randomColor;
};

// Button clicks
const press = (value) => {
    if (value === 'C') {
        currentInput = '0';
        operator = null;
        previousInput = null;
    } else if (value === '=') {
        if (operator && previousInput !== null) {
            currentInput = calculateResult().toString();
            operator = null;
            previousInput = null;
        }
    } else if ('0123456789'.includes(value)) {
        currentInput = currentInput === '0' ? value : currentInput + value;
    } else if ('+-*/'.includes(value)) {
        if (previousInput === null) {
            previousInput = currentInput;
            currentInput = '0';
            operator = value;
        } else {
            currentInput = calculateResult().toString();
            previousInput = currentInput;
            operator = value;
        }
    }
    updateScreen();
};

// Calculate based on what operation is being clicked
const calculateResult = () => {
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 === 0 ? 'Error' : num1 / num2;
        default:
            return currentInput;
    }
};

updateScreen();



 





