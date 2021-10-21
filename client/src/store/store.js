import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { tickerReducer } from './ticker';

const store = createStore(tickerReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
