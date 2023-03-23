import React, { useState } from 'react';

const Calculator: React.FC = () => {
  const [result, setResult] = useState<number>(0);
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');

  const handleNumClick = (num: string) => {
    if (num1 === '') {
      setNum1(num);
    } else if (num2 === '') {
      setNum2(num);
    }
  };

  const handleAddition = () => {
    setResult(Number(num1) + Number(num2));
  };

  const handleSubtraction = () => {
    setResult(Number(num1) - Number(num2));
  };

  const handleMultiplication = () => {
    setResult(Number(num1) * Number(num2));
  };

  const handleDivision = () => {
    setResult(Number(num1) / Number(num2));
  };

  return (
    <div>
      <div>
        <button onClick={() => handleNumClick('1')}>1</button>
        <button onClick={() => handleNumClick('2')}>2</button>
        <button onClick={() => handleNumClick('3')}>3</button>
      </div>
      <div>
        <button onClick={() => handleNumClick('4')}>4</button>
        <button onClick={() => handleNumClick('5')}>5</button>
        <button onClick={() => handleNumClick('6')}>6</button>
      </div>
      <div>
        <button onClick={() => handleNumClick('7')}>7</button>
        <button onClick={() => handleNumClick('8')}>8</button>
        <button onClick={() => handleNumClick('9')}>9</button>
      </div>
      <div>
        <button onClick={() => handleNumClick('0')}>0</button>
      </div>
      <div>
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
        <button onClick={handleMultiplication}>*</button>
        <button onClick={handleDivision}>/</button>
      </div>
      <div>
        <p>Result: {result}</p>
      </div>
    </div>
  );
};

export default Calculator;

