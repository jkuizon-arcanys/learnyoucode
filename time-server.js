"use strict";

const net = require("net");

function formatData(data) {
  return `0${data}`.slice(-2);
}

const server = net.createServer(function (socket) {
  const currentDatetime = new Date();
  const formattedMonth = formatData(currentDatetime.getMonth() + 1);
  const formattedDay = formatData(currentDatetime.getDate());
  const formattedHours = formatData(currentDatetime.getHours());
  const formattedMinutes = formatData(currentDatetime.getMinutes());

  socket.end(
    `${currentDatetime.getFullYear()}-${formattedMonth}-${formattedDay} ${formattedHours}:${formattedMinutes}\n`
  );
});
server.listen(process.argv[2]);
