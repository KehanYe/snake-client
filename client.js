const net = require('net')
const { IP, PORT} = require("./constants")

// establishes connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

// interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("We're now in the grid");
    conn.write("Name: Yee");
  })

  // conn.on("connect", () => {
  //   setInterval(() => {
  //     conn.write("Move: up")
  //   }, 500);
  // })

  conn.on("data", (data) => {
    console.log(data);
  })

  

  return conn;
};


module.exports = {
  connect,
};