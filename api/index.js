const http = require('http');
const express = require('express');
const serverEvent = require('./events/server.event');
const cors = require('cors');
const env = require('./core/loader').getEnv();
const loader = require('./core/loader');
const bodyParser = require('body-parser');

if (require('./core/cluster')()) {} 
else {
    
    const app = express();
    app.use(cors());
    app.use(bodyParser.json())
    
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


