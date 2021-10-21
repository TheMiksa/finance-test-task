import { ReactComponent as ArrowUp } from 'assets/icons/arrow-up.svg';
import { ReactComponent as ArrowDown } from 'assets/icons/arrow-down.svg';
import { getAbsValue } from 'helpers';

export const getChangePercent = changePercent => {
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

