const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection(PORT, IP);

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Server says:", data)
  })

  conn.on("connect", (connect) => {
    console.log("connection successful")
    conn.write("Name: IOT");
    connect;
  })

  return conn;
};

module.exports = { connect };