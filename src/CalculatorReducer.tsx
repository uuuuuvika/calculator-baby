interface CalculatorState {
  result: number;
  num1: string;
  num2: string;
}

interface SetFirstNumber {
  type: 'SET_NUM_1';
  payload: string;
}

interface SetSecondNumber {
  type: 'SET_NUM_2';
  payload: string;
}

interface SetResultAction {
  type: 'SET_RESULT';
  payload: number;
}

type CalculatorAction = SetFirstNumber | SetSecondNumber | SetResultAction;

const initialState: CalculatorState = {
  result: 0,
  num1: '',
  num2: '',
};

const calculatorReducer = (state = initialState, action: CalculatorAction) => {
  switch (action.type) {
    case 'SET_NUM_1':
      return { ...state, num1: action.payload };
    case 'SET_NUM_2':
      return { ...state, num2: action.payload };
    case 'SET_RESULT':
      return { ...state, result: action.payload };
    default:
      return state;
  }
};

export default calculatorReducer;