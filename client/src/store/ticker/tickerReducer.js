import { UPDATE_TICKERS } from './tickerTypes';

const initialState = [{}];

export const tickerReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case UPDATE_TICKERS:
            return [action.payload];
        default:
            return [...state]
    }
};
