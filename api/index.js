const http = require('http');
const express = require('express');
const loader = require ('./core/loader.js');
const serverEvent = require('./events/server.event');
const env = require('./core/loader').getEnv();
const db = require('./core/mongo')

if (require('./core/cluster')()) {} 
else {
    
    const app = express();
    const port = process.env.PORT || env.server.port;

    loader.routes(app, __dirname + '/routes');

    const server = http.createServer(app).listen(port, () => {
        serverEvent.emit('open', { port: env.server.port });
    })

    process.on('SIGINT', () => {
        server.close(() => {
            serverEvent.emit('close')
        })
    })
}


