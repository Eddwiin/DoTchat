const http = require('http');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const flash = require('express-flash');
const cors = require('cors');

const serverEvent = require('./events/server.event');
const env = require('./core/loader').getEnv();
const loader = require('./core/loader');

if (require('./core/cluster')()) {} 
else {
    
    const app = express();
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(flash());
    app.use(cors())
    app.use(session({ 
        secret: 'session secret key',
        resave: true,
        saveUninitialized: true 
    }))

    const port = process.env.PORT || env.server.port;

    loader.routes(app, __dirname + '/routes');

    const server = http.createServer(app).listen(port, () => {
        serverEvent.emit('open', { port: port });
    })

    process.on('SIGINT', () => {
        server.close(() => {
            serverEvent.emit('close')
        })
    })
}


