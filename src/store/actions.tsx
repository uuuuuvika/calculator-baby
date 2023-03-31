
export interface SetDigit {
    type: 'ADD_DIGIT',
    payload: string,
}

export interface SetOperator {
    type: 'SET_OPERATOR',
    payload: string,

}

export interface SetTotal {
    type: 'CALCULATE_TOTAL',
}

export interface Clear {
    type: 'CLEAR',
}



export type CalculatorAction = SetDigit | Clear| SetOperator | SetTotal;