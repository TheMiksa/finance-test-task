import './Ticker.css';
import { ReactComponent as ArrowUp} from 'assets/icons/arrow-up.svg';
import { ReactComponent as ArrowDown} from 'assets/icons/arrow-down.svg';
import { testId } from 'constants/testingConstants';
import getAbsValue from 'helpers/getAbsValue';

const Ticker = ({ data }) => {
   const getChange = change => {
       if (+change === 0) {
           return (
               <div className="tickerChange">
                   {`${change}$`}
               </div>
           )
       }

       return (change >= 0) ? (
           <div className="tickerChange tickerChangeUp">
               {`+${change}$`}
           </div>
       ) : (
           <div className="tickerChange tickerChangeDown">
               {`${change}$`}
           </div>
       )
   };
   const getChangePercent = changePercent => {
       if (+changePercent === 0) {
           return (
               <div className="tickerChangePercent">
                   {`${changePercent} %`}
               </div>
           )
       }

       return (changePercent >= 0) ? (
           <div className="tickerChangePercent tickerChangePercentUp">
               <ArrowUp />
               {`${changePercent} %`}
           </div>
       ) : (
           <div className="tickerChangePercent tickerChangePercentDown">
               <ArrowDown />
               {`${getAbsValue(changePercent)} %`}
           </div>
       )
   };
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
