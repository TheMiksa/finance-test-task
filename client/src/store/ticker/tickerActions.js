import { UPDATE_TICKERS } from './tickerTypes';
import socket from 'apiRequests/socket';
import { transformToCamelCase } from 'helpers';

export const updateTickers = payload => ({ type: UPDATE_TICKERS, payload });

export const subscribeToUpdateTickers = () => dispatch => {
    socket.on('ticker', data => {
        dispatch(updateTickers(transformToCamelCase(data)));
    });
    socket.emit('start');
};
