const http = require('http');
const express = require('express');
// const loader = require ('./core/loader.js');
const serverEvent = require('./events/server.event');
const cors = require('cors');
const env = require('./core/loader').getEnv();
const { graphql, buildSchema } = require('graphql');

if (require('./core/cluster')()) {} 
else {
    
    const app = express();
    app.use(cors());

    const schema = buildSchema(`
        type Query {
            hello: String
        }
    `);

    const root = {
        hello: () => 'Hello World'
    }

    graphql(schema, "{hello}", root).then(console.log);
    
    const port = process.env.PORT || env.server.port;

    // loader.routes(app, __dirname + '/routes');

    const server = http.createServer(app).listen(port, () => {
        serverEvent.emit('open', { port: env.server.port });
    })

    process.on('SIGINT', () => {
        server.close(() => {
            serverEvent.emit('close')
        })
    })
}


