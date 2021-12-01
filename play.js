const {stdin} = require("process");
const {connect}= require("./client");
const {setupInput} = require('./input')

console.log("Connecting ...")
connect ();

setupInput();

// const setupInput = function () {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();
//   return stdin;
// };
// const handleUserInput = () => {
//   stdin.on("data", (key) => {
//     setupInput.stdin.write()
//       if (key === '\u0003') {
//         connect.exit()
//       }
//   })

// }

// stdin.on("data", handleUserInput);


