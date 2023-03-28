
export interface SetNum1Action {

    type: 'SET_NUM_1',
    payload: string,

}

export interface SetNum2Action {

    type: 'SET_NUM_2',
    payload: string,

}

export interface SetResultAction {
    type: 'SET_RESULT',
    payload: number,

}

export interface SetOperator {

    type: 'SET_OPERATOR',
    payload: string,

}

export interface Clear {
    type: 'CLEAR',
}



export type CalculatorAction = SetNum1Action | SetNum2Action | SetResultAction | Clear| SetOperator;