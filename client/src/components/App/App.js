import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import socket from 'apiRequests/socket';
import { TickerList } from 'components';
import { subscribeToUpdateTickers } from 'store';

const App = () => {
    const dispatch = useDispatch();

  useEffect(() => {
      dispatch(subscribeToUpdateTickers());

      return () => socket.disconnect();
  }, []);

  return (
    <div className="App">
        <TickerList />
    </div>
  );
}

export default App;
