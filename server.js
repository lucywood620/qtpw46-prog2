//importing from nodejs
const http = require('http');

//importing app
const app = require('./app');

//assigning a port for the project to run
const port = 3000;

//creating server with http command and passing in listenener as a paramater
const server = http.createServer(app);

//restart server and start listening on port 3000
server.listen(port);
