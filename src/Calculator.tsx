import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store/index';
import { CalculatorState } from './CalculatorReducer'


const Calculator: React.FC = () => {

  // const [operator, setOperator] = useState('');
  // const [displayValue, setDisplayValue] = useState('');
  // const [currentValue, setCurrentValue] = useState('');

  const [currentValue, setCurrentValue] = useState('');
  const dispatch = useDispatch();

  const result = useSelector((state: RootState) => state.calculator.result);
  const operator = useSelector((state: RootState) => state.calculator.operator);
  const num1 = useSelector((state: RootState) => state.calculator.num1);
  const num2 = useSelector((state: RootState) => state.calculator.num2);

  const handleClear = () => {
    dispatch({ type: 'CLEAR' });
    setCurrentValue('');
  };

  const handleNumClick = (value: string) => {
    setCurrentValue(currentValue + value);
  };

  const handleDecimal = () => {
    if (currentValue.indexOf('.') === -1) {
      setCurrentValue(currentValue + '.');
    }
  };

  const handleOperatorClick = (operator: string) => {
    dispatch({ type: 'SET_OPERATOR', payload: operator });
    if (currentValue !== '') {
      dispatch({ type: 'SET_NUM_1', payload: currentValue });
      dispatch({ type: 'SET_RESULT', payload: Number(currentValue) })
      setCurrentValue('');
    }
  };

  const handleEqualsClick = () => {
    let n2 = 0;
    if (currentValue !== '') {
      dispatch({ type: 'SET_NUM_2', payload: currentValue });
      n2 = Number(currentValue);
    }
    let n1 = result;
    let finalResult;

    switch (operator) {
      case '+':
        finalResult = n1 + n2;
        break;
      case '-':
        finalResult = n1 - n2;
        break;
      case '*':
        finalResult = n1 * n2;
        break;
      case '/':
        finalResult = n1 / n2;
        break;
      default:
        break;
    }
    setCurrentValue(String(finalResult));
    console.log(currentValue)
    dispatch({ type: 'SET_RESULT', payload: finalResult });
    dispatch({ type: 'SET_NUM_1', payload: '' });
    dispatch({ type: 'SET_NUM_2', payload: '' });
    dispatch({ type: 'SET_OPERATOR', payload: '' });
  };

  return (
    <div>
      <div id="display">{currentValue.length === 0 ? '' : currentValue}</div>
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