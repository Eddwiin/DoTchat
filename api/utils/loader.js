const fs = require("fs");

module.exports = {
  loadRoutes: (app, path) => {
    fs.readdir(path, (err, items) => {
      if (err) return console.error(`[ERROR] ${err}`);
      for (let i = 0; i < items.length; i++) {
        const newPath = path + "/" + items[i];

        fs.stat(newPath, (err, stats) => {
          if (err) return console.error(`[ERROR] ${err}`);

          if (stats.isFile()) {
            require(newPath)(app);
          }
        });
      }
    });
  }
};
