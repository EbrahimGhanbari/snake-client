const net = require('net');

const connect = function() {

  const conn = net.createConnection({ 
    host: '135.23.222.148',
    port: 50541
  });

  conn.setEncoding('utf8'); 

  conn.on('connect', () => console.log('connection established'));
  conn.on('connect', () => {
    conn.write('Name: ABE');

    // conn.write('Move: up');
  });
  
  conn.on('data', (message) => {
    console.log('message from Server :>> ', message);
  })

  return conn;
}

module.exports = connect;
