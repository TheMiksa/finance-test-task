import { useState } from 'react';
import './Ticker.css';
import { testId } from 'constants/testingConstants';
import { ReactComponent as PlusIcon} from 'assets/icons/plus.svg';
import { ReactComponent as MinusIcon} from 'assets/icons/minus.svg';
import { getChange, getChangePercent } from 'helpers';
import { Button, TickerHistory } from 'components';

const Ticker = ({ data }) => {
   const [isHistoryOpen, setIsHistoryOpen] = useState(false);

   return (
       <div className="tickerWrapper" data-testid={testId.ticker}>
           <div className="tickerBlock">
               <div className="tickerName">{data.ticker}</div>
               <div className="tickerCompany">{data.company}</div>
               <div className="tickerPrice">{data.price}</div>
               {getChange(data.change)}
               {getChangePercent(data.changePercent)}
               {isHistoryOpen ? (
                   <Button onClick={() => setIsHistoryOpen(false)} data-testid={testId.minusButton}>
                       <MinusIcon />
                   </Button>
               ) : (
                   <Button onClick={() => setIsHistoryOpen(true)} data-testid={testId.plusButton}>
                       <PlusIcon />
                   </Button>
               )}
           </div>
           {isHistoryOpen && <TickerHistory data={data.changeHistory} />}
       </div>
   );
};

export default Ticker;
