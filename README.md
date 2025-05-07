# Basic Calculator

A modern, responsive calculator web application built with HTML, CSS, and JavaScript. This calculator features a clean user interface and supports both mouse and keyboard input.

## Features

- **Basic Arithmetic Operations**
  - Addition (+)
  - Subtraction (-)
  - Multiplication (×)
  - Division (/)
  - Decimal point support

- **User Interface**
  - Modern, responsive design
  - Custom background image
  - Semi-transparent calculator container with blur effect
  - Clear display of current operation
  - Error handling for division by zero

- **Input Methods**
  - Mouse click support
  - Keyboard input support:
    - Numbers (0-9)
    - Operators (+, -, *, /)
    - Decimal point (.)
    - Enter or = for calculation
    - Escape for clear

## Technologies Used

- HTML5
- CSS3
  - Flexbox
  - CSS Grid
  - CSS Variables
  - Modern CSS features (backdrop-filter, rgba)
- JavaScript (ES6+)
  - Event Listeners
  - DOM Manipulation
  - Error Handling

## Project Structure

```
Basic_Calculator/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── calc_bg.jpg         # Background image
└── README.md           # Project documentation
```

## Setup and Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/vansh060504/Basic_Calculator.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Basic_Calculator
   ```

3. Open `index.html` in your web browser

## How to Use

### Mouse Input
- Click the number buttons to input numbers
- Click operation buttons (+, -, ×, /) to perform calculations
- Click equals (=) to see the result
- Click clear (C) to reset the calculator

### Keyboard Input
- Use number keys (0-9) for input
- Use +, -, *, / for operations
- Press Enter or = for calculation
- Press Escape to clear
- Press . for decimal point

## Features in Detail

### Error Handling
- Division by zero shows "Error"
- Invalid operations are prevented
- Decimal point can only be used once per number

### Display
- Shows current operation being performed
- Displays results with 6 decimal precision
- Handles large numbers appropriately

## Contributing

Feel free to fork this project and submit pull requests for any improvements.

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

[Your Name]

## Acknowledgments

- Inspired by modern calculator designs
- Built as a practice project for web development skills 
