import {useEffect, useState} from 'react';
import './App.css';
import socket from 'apiRequests/socket';
import { Ticker } from 'components';

function App() {
    const [tickers, setTickers] = useState([]);

  useEffect(() => {
      console.log('here!');

      socket.on('ticker', data => {
          setTickers(data);
      });
      socket.emit('start');
  }, []);

    console.log('ticker data: ', tickers?.[0]);
  return (
    <div className="App">
        <div style={{ width: 800, padding: 10 }}>
            {!!tickers?.length && tickers.map(ticker => (
                <Ticker data={ticker} key={ticker.ticker} />
            ))}
        </div>
    </div>
  );
}

export default App;
