import React, { useState } from 'react';
import './FactorialCalculator.css';

const FactorialCalculator = () => {
  const [inputNumber, setInputNumber] = useState('');
  const [factorialValue, setFactorialValue] = useState(null);

  const calculateFactorial = () => {
    const number = parseInt(inputNumber, 10);
    if (isNaN(number)) {
      alert('Please enter a valid number.');
      return;
    }

    if (number < 0) {
      alert('Factorial is not defined for negative numbers.');
      return;
    }

    let factorial = 1;
    for (let i = 1; i <= number; i++) {
      factorial *= i;
    }

    setFactorialValue(factorial);
  };

  return (
    <div className="factorial-calculator">
      <h3>Factorial Calculator</h3>
      <label>
        Enter a number:
        <input
          type="number"
          value={inputNumber}
          onChange={(e) => setInputNumber(e.target.value)}
        />
      </label>
      <button onClick={calculateFactorial}>Calculate Factorial</button>
      {factorialValue !== null && <p>Factorial: {factorialValue}</p>}
      {/* {error && <p className="error-message">{error}</p>} */}
    </div>
  );
};

export default FactorialCalculator;
