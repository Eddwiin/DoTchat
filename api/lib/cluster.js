const cluster = require("cluster");
const nbCPUs = require("os").cpus().length;

module.exports = () => {
  if (cluster.isMaster) {
    for (let i = 0; i < nbCPUs; i++) {
      cluster.fork();
    }
  }

  return cluster.isMaster;
};
