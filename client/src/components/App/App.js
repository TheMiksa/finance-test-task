import {useEffect, useState} from 'react';
import './App.css';
import socket from 'apiRequests/socket';
import { TickerList } from 'components';

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
        <TickerList tickers={tickers} />
    </div>
  );
}

export default App;
