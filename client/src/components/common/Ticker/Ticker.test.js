import { Ticker } from 'components';
import { screen, render } from '@testing-library/react';
import { testId } from 'constants/testingConstants';
import '@testing-library/jest-dom';

const mockedData = {
    ticker: 'ticker',
    price: 'price',
    change: 'change',
    change_percent: 'change_percent',
}

describe('<Ticker />', () => {
    it('should render <Ticker />', () => {
        render(<Ticker data={mockedData}/>)

        expect(screen.getByTestId(testId.ticker)).toBeInTheDocument();
    });
});
