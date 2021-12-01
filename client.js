const net = require('net')

// establishes connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

// interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("We're know in the grid");
  })

  conn.on("connect", () => {
    conn.write("Name: Yee");
  })

  conn.on("data", (data) => {
    console.log(data);
  })

  

  return conn;
};


module.exports = {
  connect,
};