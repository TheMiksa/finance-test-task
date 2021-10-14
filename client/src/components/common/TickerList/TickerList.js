import './TickerList.css';
import { Ticker } from 'components';

const TickerList = ({ tickers }) => {
    return (
        <div style={{ width: 800, padding: 10 }}>
            {!!tickers?.length && tickers.map(ticker => (
                <Ticker data={ticker} key={ticker.ticker} />
            ))}
        </div>
    )
};

export default TickerList;
