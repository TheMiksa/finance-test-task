import './TickerList.css';
import { Ticker } from 'components';
import { testId } from 'constants/testingConstants';
import { useSelector } from 'react-redux';

const TickerList = () => {
    const tickers = useSelector(state => state);

    console.log('tickers: ', tickers);

    return (
        <div className="tickerList" data-testid={testId.tickerList}>
            {!!tickers?.length && tickers.map(ticker => (
                <Ticker data={ticker} key={ticker.ticker} />
            ))}
        </div>
    )
};

export default TickerList;
