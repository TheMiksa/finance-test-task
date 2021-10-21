import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { tickerReducer } from './ticker';

const store = createStore(tickerReducer, composeWithDevTools());

export default store;
