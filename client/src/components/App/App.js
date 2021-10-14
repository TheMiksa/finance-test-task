import { useEffect } from 'react';
import './App.css';
import socket from 'apiRequests/socket';

function App() {

  useEffect(() => {
      console.log('here!');

      socket.on('ticker', data => {
          console.log('data: ', data);
      });
      socket.emit('start');
  }, []);
  return (
    <div className="App">
      appj
    </div>
  );
}

export default App;
