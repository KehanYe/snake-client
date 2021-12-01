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
  // })
}

stdin.on("data", handleUserInput);

module.exports = {
  setupInput,
}
