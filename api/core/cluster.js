const cluster = require('cluster');
const nbCPUs = require('os').cpus().length
const clusterEvent = require('./../events/cluster.event')(cluster);

module.exports = () => {
    if (cluster.isMaster) {
        for (let i = 0; i < nbCPUs; i++) {
            cluster.fork();
        }

   
    }

    return cluster.isMaster;
}