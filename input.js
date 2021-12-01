const {stdin} = require("process");
const {connect} = require("./client");

const conn = connect();

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};
const handleUserInput = (key) => {
  // stdin.on("data", (key) => {
  //   process.stdin.write()
      if (key === '\u0003') {
        process.exit()
      };
      if (key === 'w') {
        conn.write("Move: up")
      };
      if(key === 's') {
        conn.write("Move: down")
      }
      if(key === 'a') {
        conn.write("Move: left")
      }
      if(key === 'd') {
        conn.write("Move: right")
      }
      if(key === 'q') {
        conn.write("Say: Runaway from me")
      }
      if(key === 'e') {
        conn.write("Say: Runaway from me baby")
      }
      if(key === 'r') {
        conn.write("Say: Runaway fast as you can")
      }
      if(key === 't') {
        conn.write("Say: Kanye West")
      }
  // })
}

stdin.on("data", handleUserInput);

module.exports = {
  setupInput,
}
