const http = require('http');
const express = require('express');

if (require('./core/cluster')()) {

} else {

    if (process.env.NODE_ENV !== 'production') {
        require('dotenv').config();
    }
    
    const app = express();
    const server = http.createServer(app)
    const port = process.env.PORT || 4000;

    app.listen(port, () => {
        console.log(`[INFO] Server is listening on port: ${port}`)
    })
    
}


