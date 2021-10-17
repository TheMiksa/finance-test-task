'use strict';
const express = require('express');
const http = require('http');
const io = require('socket.io');
const cors = require('cors');

const FETCH_INTERVAL = 5000;
const PORT = process.env.PORT || 4000;

const tickers = [
  { ticker: 'AAPL', company: 'Apple', change_history: [] },
  { ticker: 'GOOGL', company: 'Alphabet', change_history: [] },
  { ticker: 'MSFT', company: 'Microsoft', change_history: [] },
  { ticker: 'AMZN', company: 'Amazon', change_history: [] },
  { ticker: 'FB', company: 'Facebook', change_history: [] },
  { ticker: 'TSLA', company: 'Tesla', change_history: [] },
];

function randomValue(min = 0, max = 1, precision = 0) {
  const random = Math.random() * (max - min) + min;
  return random.toFixed(precision);
}

function utcDate() {
  const now = new Date();
  return new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
}

function getQuotes(socket) {

  const quotes = tickers.map(({ change_history, ...ticker}) => {
    const change = randomValue(-100, 200, 2);
    const change_percent = randomValue(-1, 1, 2);
    change_history.push({
      change,
      change_percent,
    });

    if (change_history.length > 50) {
      change_history.splice(0, change_history.length - 50);
    }

    return ({
      ...ticker,
      change_history,
      exchange: 'NASDAQ',
      price: randomValue(100, 300, 2),
      change,
      change_percent,
      dividend: randomValue(0, 1, 2),
      yield: randomValue(0, 2, 2),
      last_trade_time: utcDate(),
    })
  });

  socket.emit('ticker', quotes);
}

function trackTickers(socket) {
  // run the first time immediately
  getQuotes(socket);

  // every N seconds
  const timer = setInterval(function() {
    getQuotes(socket);
  }, FETCH_INTERVAL);

  socket.on('disconnect', function() {
    clearInterval(timer);
  });
}

const app = express();
app.use(cors());
const server = http.createServer(app);

const socketServer = io(server, {
  cors: {
    origin: "*",
  }
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

socketServer.on('connection', (socket) => {
  socket.on('start', () => {
    trackTickers(socket);
  });
});

server.listen(PORT, () => {
  console.log(`Streaming service is running on http://localhost:${PORT}`);
});
