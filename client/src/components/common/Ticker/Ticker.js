import './Ticker.css';
import { ReactComponent as ArrowUp} from 'assets/icons/arrow-up.svg';

const Ticker = ({ data }) => {
   return (
       <div className="tickerBlock">
          <div className="tickerName">{data.ticker}</div>
           <div className="tickerPrice">{data.price}</div>
          <div className="tickerChange">{data.change}</div>
          <div className="tickerChange">
              <ArrowUp />
              {`${data.change_percent} %`}
          </div>
          {/*<div>{`Ticker dividend: ${data.dividend}`}</div>*/}
          {/*<div>{`Ticker exchange: ${data.exchange}`}</div>*/}
          {/*<div>{`Ticker last_trade_time: ${data.last_trade_time}`}</div>*/}
          {/*<div>{`Ticker yield: ${data.yield}`}</div>*/}
       </div>
   );
};

export default Ticker;
