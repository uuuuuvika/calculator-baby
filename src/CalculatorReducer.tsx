import { CalculatorAction } from './store/actions'

export function calculateTotal(state: Expr | number): number {
  if (typeof state === 'number') {
    return state;
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
  num1: Expr | number;
  num2: number | null;
  operator: string;
}

const initialState: Expr | number = 0;

const calculatorReducer = (state: Expr | number = initialState, action: CalculatorAction) => {
  console.log(state, "STATE");
  //console.log(action, "ACTION");
  switch (action.type) {
    case 'ADD_DIGIT':
      if (typeof state === 'number') {
        return Number(String(state) + action.payload);
      } else {
        return {
          ...state,
          num2: Number(String(state.num2 || "0") + action.payload)
        }
      }
    case 'SET_OPERATOR':
      if (typeof state === 'object' && state.num2 === null && action.payload !== '-') {
        return {
          ...state,
          operator: action.payload
        }
      } else if (typeof state === 'object' && state.num2 === null && state.operator !== '-' && action.payload === '-') {
        return {
          ...state,
          num1: Number('-' + String(state.num1))
        }
      } else if (typeof state === 'object' && state.num2 === null && action.payload === '-') {
        return {
          ...state,
          num1: Number('-' + String(state.num1))
        }

      } else {
        return {
          num1: state,
          num2: null,
          operator: action.payload
        }
      }
    case 'CALCULATE_TOTAL':
      return state = calculateTotal(state);
    case 'CLEAR':
      return initialState;
    default:
      return state;
  }
};

export default calculatorReducer;
