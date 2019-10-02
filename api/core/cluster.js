const cluster = require('cluster');
const nbCPUs = require('os').cpus().length

module.exports = () => {
    if (cluster.isMaster) {
        for (let i = 0; i < nbCPUs; i++) {
            cluster.fork();
        }

        cluster.on('fork', (worker) => {
            console.log(`[INFO] worker ${worker.process.pid} fork`);
        });

        cluster.on('listening', (worker) => {
            console.log(`[INFO] worker ${worker.process.pid} listening`);
        })
        cluster.on('exit', (worker, code, signal) => {
            console.error(`[ERROR] worker ${worker.process.pid} died`)
        });
    }

    return cluster.isMaster;
}