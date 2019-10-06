const EventEmitter = require('events').EventEmitter;

class RouteEvent extends EventEmitter {};

const routesLog = new RouteEvent();

routesLog.on('route-loaded', (event) => {
    console.log(`[INFO] ${event.pseudo} has loaded this route: ${event.route}`)
})

module.exports = routesLog;