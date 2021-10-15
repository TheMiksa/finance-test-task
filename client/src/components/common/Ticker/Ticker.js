import './Ticker.css';
import { ReactComponent as ArrowUp} from 'assets/icons/arrow-up.svg';
import { testId } from 'constants/testingConstants';

const Ticker = ({ data }) => {
   return (
       <div className="tickerBlock" data-testid={testId.ticker}>
          <div className="tickerName">{data.ticker}</div>
          <div className="tickerCompany">{data.company}</div>
          <div className="tickerPrice">{data.price}</div>
          <div className="tickerChange">{data.change}</div>
          <div className="tickerChange">
              <ArrowUp />
              {`${data.change_percent} %`}
          </div>
       </div>
   );
};

export default Ticker;
