import { CalculatorAction } from './store/actions'

export interface CalculatorState {
  num1: string;
  num2: string;
  operator: string;
  result: number
}

const initialState = {
  num1: "",
  num2: "",
  operator: "",
  result: 0,
};

const calculatorReducer = (state = initialState, action: CalculatorAction) => {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case 'SET_NUM_1':
      return { ...state, num1: state.num1 + action.payload };
    case 'SET_NUM_2':
      return { ...state, num2: state.num2 + action.payload };
    case 'SET_OPERATOR':
      return { ...state, operator: action.payload };
    case 'SET_RESULT':
      console.log(action.payload);
      return { ...state, result: action.payload };
    case 'CLEAR':
      return {
        num1: "",
        num2: "",
        operator: '',
        result: 0
      };
    default:
      return state;
  }
};

export default calculatorReducer;