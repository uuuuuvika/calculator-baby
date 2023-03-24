import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';
import { setNum1, setNum2 } from './CalculatorReducer'

const Calculator: React.FC = () => {
  const [operator, setOperator] = useState('');
  const [displayValue, setDisplayValue] = useState('');

  const result = useSelector((state: RootState) => state.calculator.result);
  const num1 = useSelector((state: RootState) => state.calculator.num1);
  const num2 = useSelector((state: RootState) => state.calculator.num2);
  const dispatch = useDispatch();

  const handleNumClick = (num: string) => {
    if (operator === '') {
      dispatch(setNum1(num));
      setDisplayValue(displayValue + num);
    } else {
      dispatch(setNum2(num));
      setDisplayValue(displayValue + num);
    }
  };

  const handleDecimal = () => {
    if (operator === '') {
      if (num1 === '' || !num1.includes('.')) {
        dispatch(setNum1('.'));
        setDisplayValue(displayValue + '.');
      }
    } else {
      if (num2 === '' || !num2.includes('.')) {
        dispatch(setNum2('.'));
        setDisplayValue(displayValue + '.');
      }
    }
  };

  const handleOperatorClick = (operator: string) => {
    setOperator(operator);
    setDisplayValue(displayValue + operator)
  };

  const handleEqualsClick = () => {
    let result = 0;
    switch (operator) {
      case '+':
        result = Number(num1) + Number(num2);
        break;
      case '-':
        result = Number(num1) - Number(num2);
        break;
      case '*':
        result = Number(num1) * Number(num2);
        break;
      case '/':
        result = Number(num1) / Number(num2);
        break;
      default:
        break;
    }
    dispatch({ type: 'SET_RESULT', payload: result });
    setOperator('');
    setDisplayValue(result.toString());
  };

  const handleClear = () => {
    dispatch({ type: 'CLEAR' });
    setDisplayValue('');
  };

  return (
    <div>
      <div id="display">{displayValue}</div>
      <div className='buttons'>
        <div>
          <div>
            <button id='one' className='btn' onClick={() => handleNumClick('1')}>1</button>
            <button id='two' className='btn' onClick={() => handleNumClick('2')}>2</button>
            <button id='three' className='btn' onClick={() => handleNumClick('3')}>3</button>
          </div>
          <div>
            <button id='four' className='btn' onClick={() => handleNumClick('4')}>4</button>
            <button id='five' className='btn' onClick={() => handleNumClick('5')}>5</button>
            <button id='six' className='btn' onClick={() => handleNumClick('6')}>6</button>
          </div>
          <div>
            <button id='seven' className='btn' onClick={() => handleNumClick('7')}>7</button>
            <button id='eight' className='btn' onClick={() => handleNumClick('8')}>8</button>
            <button id='nine' className='btn' onClick={() => handleNumClick('9')}>9</button>
          </div>
          <div>
            <button id='zero' className='btn' onClick={() => handleNumClick('0')}>0</button>
            <button id="decimal" className='btn' onClick={() => handleDecimal()}>.</button>
            <button id='divide' className='btn' onClick={() => handleOperatorClick('/')}>/</button>
          </div>
          <div>
            <button id='add' className='btn' onClick={() => handleOperatorClick('+')}>+</button>
            <button id='subtract' className='btn' onClick={() => handleOperatorClick('-')}>-</button>
            <button id='multiply' className='btn' onClick={() => handleOperatorClick('*')}>*</button>
          </div>
        </div>
        <div className='slimm-col'>
          <button id="clear" className='b' onClick={() => handleClear()}>C</button>
          <button id="equals" className='bb' onClick={handleEqualsClick}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;