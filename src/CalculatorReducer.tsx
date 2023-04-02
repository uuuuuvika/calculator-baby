import { CalculatorAction } from './store/actions'

export function calculateTotal(state: Expr | string): number {
  if (typeof state === 'string') {
    return Number(state);
  }
  const { num1, num2, operator } = state;
  if (num2 === null) {
    return calculateTotal(num1);
  }
  switch (operator) {
    case '+':
      return calculateTotal(num1) + calculateTotal(num2);
    case '-':
      return calculateTotal(num1) - calculateTotal(num2);
    case '*':
      return calculateTotal(num1) * calculateTotal(num2);
    case '/':
      return calculateTotal(num1) / calculateTotal(num2);
    default:
      return 0;
  }
}

export interface Expr {
  num1: Expr | string;
  num2: string | '';
  operator: string;
}

const initialState: Expr | string = '';

const calculatorReducer = (state: Expr | string = initialState, action: CalculatorAction) => {
  console.log(state, "STATE");
  console.log(action, "ACTION");
  switch (action.type) {
    case 'ADD_DIGIT':
      if (typeof state === 'string') {
        if (state === '0' && action.payload === '0' || ((state.includes('.') || state === '') && action.payload === '.')) {
          return state;
        }
        return state + action.payload;
      } else {
        if (state.num2 === '' || state.num2 === '0') {
          if (action.payload === '0') {
            return state;
          } else if (action.payload === '.') {
            return { ...state, num2: '0.' };
          }
          return { ...state, num2: action.payload };
        } else if (action.payload === '.' && state.num2.includes('.')) {
          return state;
        }
        return { ...state, num2: state.num2 + action.payload };
      }
    case 'SET_OPERATOR':
      if (typeof state === 'object' && state.num2 === '' && action.payload !== '-') {
        return {
          ...state,
          operator: action.payload
        }
      } else if (typeof state === 'object' && state.num2 === '' && action.payload === '-') {
        return {
          ...state,
          num2: '-'
        }
      } else if (typeof state === 'object' && state.num2 === '-') {
        return {
          ...state,
          num2: '',
          operator: action.payload
        } // 5* -5
      } else {
        return {
          num1: state,
          num2: '',
          operator: action.payload
        }
      }
    case 'CALCULATE_TOTAL':
      return state = String(calculateTotal(state));
    case 'CLEAR':
      return initialState;
    default:
      return state;
  }
};

export default calculatorReducer;
