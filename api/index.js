const http = require('http');
const express = require('express');

if (require('./core/cluster')()) {

} else {

    if (process.env.NODE_ENV !== 'production') {
        require('dotenv').config();
    }
    
    const app = express();
    const port = process.env.PORT || 4000;

    require('./routes/user.router')(app);

    const server = http.createServer(app).listen(port, () => {
        console.log(`[INFO] Server is listening on port: ${port}`)
    })

    process.on('SIGINT', () => {
        server.close(() => {
            console.log("[INFO] Server close")
            process.exit(0);
        })
    })
}


