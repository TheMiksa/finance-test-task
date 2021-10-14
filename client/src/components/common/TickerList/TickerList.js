import './TickerList.css';
import { Ticker } from 'components';
import { testId } from 'constants/testingConstants';

const TickerList = ({ tickers }) => {
    return (
        <div data-testid={testId.tickerList}>
            {!!tickers?.length && tickers.map(ticker => (
                <Ticker data={ticker} key={ticker.ticker} />
            ))}
        </div>
    )
};

export default TickerList;
