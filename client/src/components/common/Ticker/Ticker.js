import './Ticker.css';
import { testId } from 'constants/testingConstants';
import { getChange, getChangePercent } from 'helpers';

const Ticker = ({ data }) => {
   return (
       <div className="tickerBlock" data-testid={testId.ticker}>
          <div className="tickerName">{data.ticker}</div>
          <div className="tickerCompany">{data.company}</div>
          <div className="tickerPrice">{data.price}</div>
          {getChange(data.change)}
          {getChangePercent(data.changePercent)}
       </div>
   );
};

export default Ticker;
