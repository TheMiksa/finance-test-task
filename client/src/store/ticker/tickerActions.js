import { UPDATE_TICKERS } from './tickerTypes';

export const updateTickers = payload => ({
    type: UPDATE_TICKERS,
    payload,
});
