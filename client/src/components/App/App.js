import {useEffect, useState} from 'react';
import './App.css';
import socket from 'apiRequests/socket';
import { TickerList } from 'components';
import transformToCamelCase from 'helpers/transformToCamelCase';

const App = () => {
    const [tickers, setTickers] = useState([]);

  useEffect(() => {
      console.log('here!');

      socket.on('ticker', data => {
          setTickers(transformToCamelCase(data));
      });
      socket.emit('start');
  }, []);

  return (
    <div className="App">
        <TickerList tickers={tickers} />
    </div>
  );
}

export default App;
