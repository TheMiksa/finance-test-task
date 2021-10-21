import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TickerList } from 'components';
import { testId } from 'constants/testingConstants';
import { renderWithProviders } from 'helpers';

const mockedStore = [];


describe('<TickerList />', () => {
    it('should render <TickerList />', () => {
        renderWithProviders(<TickerList />, mockedStore);

        expect(screen.getByTestId(testId.tickerList)).toBeInTheDocument();
        expect(screen.getByTestId(testId.tickerList)).toBeInTheDocument();
    });
});
