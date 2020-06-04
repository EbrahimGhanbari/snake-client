const connect = require("./client");

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const handleUserInput = (data) => {
  if (data === '\u0003') {
    process.exit();
  }
};

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on("data", handleUserInput); // stdin.on(event, function)



  return stdin;
}



// === '\u0003'
// Handling CTRL + C User Input
// Create a function handleUserInput and register it as the "data" callback handler for stdin.

// We should register this event handler within the setupInput function, prior to returning the stdin object.

// handleUserInput should check for the ctrl + c input and terminate the game. This is something that we've done in previous exercises, so feel free to draw from that prior experience.

// Run the code to ensure that there are no errors and that we can terminate the game using ctrl + c.



console.log('Connecting ...');
connect();
setupInput();