module.exports = (cluster) => {

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


