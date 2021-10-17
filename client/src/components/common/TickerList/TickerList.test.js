import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import { TickerList } from 'components';
import { testId, mockedTicker } from 'constants/testingConstants';


describe('<TickerList />', () => {
    it('should render <TickerList />', () => {
        render(<TickerList tickers={[mockedTicker]} />);

        expect(screen.getByTestId(testId.tickerList)).toBeInTheDocument();
        expect(screen.getByTestId(testId.tickerList)).toBeInTheDocument();
    });
});
