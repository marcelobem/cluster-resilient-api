/**
 * Module dependencies.
 */

import dotenv from 'dotenv'
dotenv.config()
const processId = process.pid

import app from './app.js'
import debugLib from 'debug';
const logger = debugLib(`server:${processId}`)
import http from 'http'

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app)

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port)
    .once('listening', () => {
        logger('Server Listening')
        console.log(`Server started in process`, processId)


    })

process.on('SIGTERM', () => {
    console.log('Server ending', new Date().toISOString())
    server.close(() => process.exit())
})

process.stdout.on('error', function (err) {
    console.log('PIPE ERROR')
    if (err.code == "EPIPE") {
        process.exit(0);
    }
});



/**
 * Normalize a port into a number, string, or false.
 */

 function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}