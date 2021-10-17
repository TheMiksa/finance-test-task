import { Ticker } from 'components';
import {screen, render, fireEvent} from '@testing-library/react';
import { testId, mockedTicker } from 'constants/testingConstants';
import '@testing-library/jest-dom';

describe('<Ticker />', () => {
    it('should render <Ticker /> with plus-button and without minus-button', () => {
        render(<Ticker data={mockedTicker} />)

        const ticker = screen.getByTestId(testId.ticker);
        const plusButton = screen.getByTestId(testId.plusButton);
        const minusButton = screen.queryByTestId(testId.minusButton);

        expect(ticker).toBeInTheDocument();
        expect(plusButton).toBeInTheDocument();
        expect(minusButton).not.toBeInTheDocument();
    });
    it('should render <Ticker /> with minus-button and without plus-button after click on plus-button', () => {
        render(<Ticker data={mockedTicker} />)

        const ticker = screen.getByTestId(testId.ticker);
        const plusButton = screen.getByTestId(testId.plusButton);

        fireEvent.click(plusButton);
        const minusButton = screen.getByTestId(testId.minusButton);

        expect(ticker).toBeInTheDocument();
        expect(minusButton).toBeInTheDocument();
        expect(screen.queryByTestId(testId.plusButton)).not.toBeInTheDocument();
    });
    it('should render <Ticker /> without <TickerHistory />', () => {
        render(<Ticker data={mockedTicker} />)

        const ticker = screen.getByTestId(testId.ticker);
        const tickerHistory = screen.queryByTestId(testId.tickerHistory);

        expect(ticker).toBeInTheDocument();
        expect(tickerHistory).not.toBeInTheDocument();
    });
    it('should render <Ticker /> with <TickerHistory /> if you clicked on plus-button', () => {
        render(<Ticker data={mockedTicker} />)

        const ticker = screen.getByTestId(testId.ticker);
        const plusButton = screen.getByTestId(testId.plusButton);

        fireEvent.click(plusButton);
        const tickerHistory = screen.getByTestId(testId.tickerHistory);

        expect(ticker).toBeInTheDocument();
        expect(tickerHistory).toBeInTheDocument();
    });
    it('should render <Ticker /> without <TickerHistory /> if you clicked on minus-button', () => {
        render(<Ticker data={mockedTicker} />)

        const ticker = screen.getByTestId(testId.ticker);
        const plusButton = screen.getByTestId(testId.plusButton);

        fireEvent.click(plusButton);
        const minusButton = screen.getByTestId(testId.minusButton);

        fireEvent.click(minusButton);
        const tickerHistory = screen.queryByTestId(testId.tickerHistory);

        expect(ticker).toBeInTheDocument();
        expect(tickerHistory).not.toBeInTheDocument();
    });
});
