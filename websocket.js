const WebSocket = require("ws");
let socket = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@kline_1m");
socket.onmessage = function (event) {
  console.log(event.data);
};
