import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import socket from 'apiRequests/socket';
import { TickerList } from 'components';
import { transformToCamelCase } from 'helpers';
import { updateTickers } from 'store';

const App = () => {
    const dispatch = useDispatch();

  useEffect(() => {
      socket.on('ticker', data => {
          dispatch(updateTickers(transformToCamelCase(data)));
      });
      socket.emit('start');

      return () => socket.disconnect();
  }, []);

  return (
    <div className="App">
        <TickerList />
    </div>
  );
}

export default App;
