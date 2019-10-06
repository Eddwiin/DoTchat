const EventEmitter = require('events').EventEmitter;
class ServerEvent extends EventEmitter {}
const serverEvent = new ServerEvent();

serverEvent.on('open', (event) => {
    console.log(`[INFO] Server is listening on port: ${event.port}`)
})

serverEvent.on('close', (event) => {
    console.log("[INFO] Server close")
    process.exit(0);
});


module.exports = serverEvent;