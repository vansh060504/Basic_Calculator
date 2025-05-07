// Get the display element
const display = document.getElementById('result');

// Variables to store calculator state
let currentInput = '';
let previousInput = '';
let operation = null;
let shouldResetScreen = false;

// Function to append numbers to the display
function appendNumber(number) {
    if (shouldResetScreen) {
        display.value = '';
        shouldResetScreen = false;
    }
    display.value += number;
}

// Function to append decimal point
function appendDecimal() {
    if (shouldResetScreen) {
        display.value = '0';
        shouldResetScreen = false;
    }
    if (!display.value.includes('.')) {
        display.value += '.';
    }
}

// Function to append operators
function appendOperator(op) {
    if (display.value === '') return;
    
    if (operation !== null) {
        calculate();
    }
    
    previousInput = display.value;
    operation = op;
    
    // Show the operation symbol in the display
    let displaySymbol = op;
    if (op === '*') displaySymbol = '×';
    display.value = `${previousInput} ${displaySymbol} `;
    shouldResetScreen = true;
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
    currentInput = '';
    previousInput = '';
    operation = null;
    shouldResetScreen = false;
}

// Function to perform calculations
function calculate() {
    if (operation === null || shouldResetScreen) return;
    
    // Extract the current number from the display (remove the previous number and operator)
    const displayParts = display.value.split(' ');
    const current = parseFloat(displayParts[displayParts.length - 1]);
    const previous = parseFloat(previousInput);
    
    if (isNaN(current) || isNaN(previous)) return;
    
    let result;
    
    // Perform the calculation based on the operation
    switch (operation) {
        case '+':
            result = previous + current;
            break;
        case '-':
            result = previous - current;
            break;
        case '*':
            result = previous * current;
            break;
        case '/':
            // Check for division by zero
            if (current === 0) {
                display.value = 'Error';
                return;
            }
            result = previous / current;
            break;
        default:
            return;
    }
    
    // Round the result to avoid floating-point precision issues
    result = Math.round(result * 1000000) / 1000000;
    
    // Update the display with the result
    display.value = result;
    operation = null;
    previousInput = '';
    shouldResetScreen = true;
}

// Add keyboard support
document.addEventListener('keydown', (event) => {
    if (event.key >= '0' && event.key <= '9') {
        appendNumber(event.key);
    } else if (event.key === '.') {
        appendDecimal();
    } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
        appendOperator(event.key);
    } else if (event.key === 'Enter' || event.key === '=') {
        calculate();
    } else if (event.key === 'Escape') {
        clearDisplay();
    }
}); 