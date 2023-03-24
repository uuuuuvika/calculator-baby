export interface CalculatorState {
    result: number;
    num1: string;
    num2: string;
    operator: string;
  }
  
  export interface SetNum1Action {
    type: 'SET_NUM_1';
    payload: string;
  }
  
  export interface SetNum2Action {
    type: 'SET_NUM_2';
    payload: string;
  }
  
  export interface SetOperatorAction {
    type: 'SET_OPERATOR';
    payload: string;
  }
  
  export interface SetResultAction {
    type: 'SET_RESULT';
    payload: number;
  }
  
  export type CalculatorAction = SetNum1Action | SetNum2Action | SetOperatorAction | SetResultAction;