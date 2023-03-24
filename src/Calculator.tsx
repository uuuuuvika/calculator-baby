import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store'

const Calculator: React.FC = () => {

  const result = useSelector((state: RootState) => state.calculator.result);
  const num1 = useSelector((state: RootState) => state.calculator.num1);
  const num2 = useSelector((state: RootState) => state.calculator.num2);
  const dispatch = useDispatch();

  const handleNumClick = (num: string) => {
    if (num1 === '') {
      dispatch({ type: 'SET_NUM_1', payload: num });
    } else if (num2 === '') {
      dispatch({ type: 'SET_NUM_2', payload: num });
    }
  };

  const handleAddition = () => {
    dispatch({ type: 'SET_RESULT', payload: Number(num1) + Number(num2) });
  }; const handleSubtraction = () => {
    dispatch({ type: 'SET_RESULT', payload: Number(num1) - Number(num2) });
  };

  const handleMultiplication = () => {
    dispatch({ type: 'SET_RESULT', payload: Number(num1) * Number(num2) });
  };

  const handleDivision = () => {
    dispatch({ type: 'SET_RESULT', payload: Number(num1) / Number(num2) });
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




