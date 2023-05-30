import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store/index';

const Calculator: React.FC = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.calculator);
 
  const handleClear = () => {
    dispatch({ type: 'CLEAR' });
  };

  const handleNumClick = (value: string) => {
    dispatch({ type: 'ADD_DIGIT', payload: value });
  };

  const handleDecimal = () => {
    dispatch({ type: 'ADD_DIGIT', payload: '.' });
  };

  const handleOperatorClick = (operator: string) => {
    dispatch({ type: 'SET_OPERATOR', payload: operator });
  };

  const handleEqualsClick = () => {
    dispatch({ type: 'CALCULATE_TOTAL' });
  };

  const displayValue = (
    typeof state === 'string'
      ? state 
        : state.num2 === ''
          ? state.operator
            : state.num2)

  return (
    <div className='inner'>
      <div id="display">{state ? displayValue : '0'}</div>
      <div className='buttons'>
        <div className='fat-col'>
          <div>
            <button id='one' className='btn clay' onClick={() => handleNumClick('1')}>1</button>
            <button id='two' className='btn clay' onClick={() => handleNumClick('2')}>2</button>
            <button id='three' className='btn clay' onClick={() => handleNumClick('3')}>3</button>
          </div>
          <div>
            <button id='four' className='btn clay' onClick={() => handleNumClick('4')}>4</button>
            <button id='five' className='btn clay' onClick={() => handleNumClick('5')}>5</button>
            <button id='six' className='btn clay' onClick={() => handleNumClick('6')}>6</button>
          </div>
          <div>
            <button id='seven' className='btn clay' onClick={() => handleNumClick('7')}>7</button>
            <button id='eight' className='btn clay' onClick={() => handleNumClick('8')}>8</button>
            <button id='nine' className='btn clay' onClick={() => handleNumClick('9')}>9</button>
          </div>
          <div>
            <button id='zero' className='btn clay' onClick={() => handleNumClick('0')}>0</button>
            <button id="decimal" className='btn clay' onClick={() => handleDecimal()}>.</button>
            <button id='divide' className='btn clay' onClick={() => handleOperatorClick('/')}>/</button>
          </div>
          <div>
            <button id='add' className='btn clay' onClick={() => handleOperatorClick('+')}>+</button>
            <button id='subtract' className='btn clay' onClick={() => handleOperatorClick('-')}>-</button>
            <button id='multiply' className='btn clay' onClick={() => handleOperatorClick('*')}>*</button>
          </div>
        </div>
        <div className='slimm-col'>
          <button id="clear" className='b clay' onClick={() => handleClear()}>C</button>
          <button id="equals" className='bb clay' onClick={handleEqualsClick}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;