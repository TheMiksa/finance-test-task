import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import { TickerList } from 'components';
import { testId } from 'constants/testingConstants';

const mockedData = {
    ticker: 'ticker',
    price: 'price',
    change: 'change',
    change_percent: 'change_percent',
}

describe('<TickerList />', () => {
    it('should render <TickerList />', () => {
        render(<TickerList tickers={mockedData} />);

        expect(screen.getByTestId(testId.tickerList)).toBeInTheDocument();
    });
});
