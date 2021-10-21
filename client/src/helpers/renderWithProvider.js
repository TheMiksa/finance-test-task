import React from 'react';

import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';


const mockStore = configureStore([]);

export const renderWithProviders = (ui, state) => {
    const store = mockStore({ ...state });
    const dispatchSpy = jest.spyOn(store, 'dispatch');

    return {
        ...render(<Provider store={store}>{ui}</Provider>),
        state: store,
        dispatchSpy,
    };
};
