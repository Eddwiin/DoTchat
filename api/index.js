const http = require('http');
const express = require('express');
const loader = require ('./core/loader.js');
const serverEvent = require('./events/server.event');
const db = require('./core/mongo')

if (require('./core/cluster')()) {} 
else {

    if (process.env.NODE_ENV !== 'production') {
        require('dotenv').config();
    }
    
    const app = express();
    const port = process.env.PORT || 4000;

    loader.routes(app, __dirname + '/routes');

    const server = http.createServer(app).listen(port, () => {
        serverEvent.emit('open', { port: port });
    })

    db.then(console.log)

    process.on('SIGINT', () => {
        server.close(() => {
            serverEvent.emit('close')
        })
    })
}


