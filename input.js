let connection;


// establishes a connection with the game server
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", userInput);
  return stdin;
};

const userInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }

  if(key === 'w') {
    connection.write("Move: up");
  }

  if(key === 'a') {
    connection.write("Move: left");
  }

  if(key === 's') {
    connection.write("Move: down");
  }

  if(key === 'd') {
    connection.write("Move: right")
  }

  if(key === 'e') {
    connection.write("Say: I WILL EAT U!")
  }

  if(key === 'r') {
    connection.write("Say: nomnomyumyum")
  }
};

module.exports = { setupInput };