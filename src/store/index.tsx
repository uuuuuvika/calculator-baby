import { combineReducers, createStore } from 'redux';
import calculatorReducer from '../CalculatorReducer';

const rootReducer = combineReducers({
  calculator: calculatorReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
