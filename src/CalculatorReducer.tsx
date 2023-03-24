
export const setNum1 = (num: string) => {
  return {
    type: 'SET_NUM_1',
    payload: num,
  };
};

export const setNum2 = (num: string) => {
  return {
    type: 'SET_NUM_2',
    payload: num,
  };
};

interface Clear {
  type: 'CLEAR'
}

interface CalculatorState {
  result: number;
  num1: string;
  num2: string;
  operator: string;
}

interface SetNum1Action {
  type: 'SET_NUM_1';
  payload: string;
}

interface SetNum2Action {
  type: 'SET_NUM_2';
  payload: string;
}

interface SetResultAction {
  type: 'SET_RESULT';
  payload: number;
}

type CalculatorAction = SetNum1Action | SetNum2Action | SetResultAction | Clear;

const initialState: CalculatorState = {
  num1: "",
  num2: "",
  operator: "",
  result: 0,
};

export const calculatorReducer = (state = initialState, action: CalculatorAction) => {
  switch (action.type) {
    case 'SET_NUM_1':
      return { ...state, num1: state.num1 + action.payload };
    case 'SET_NUM_2':
      return { ...state, num2: state.num2 + action.payload };
    // case 'SET_OPERATOR':
    //     return {...state, operator: action.payload };
    case 'SET_RESULT':
      return { ...state, result: action.payload };
    case 'CLEAR':
      return {
        num1: '',
        num2: '',
        operator: '',
        result: 0
      };
    default:
      return state;
  }
};

export default calculatorReducer;