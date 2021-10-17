export const getChange = change => {
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

