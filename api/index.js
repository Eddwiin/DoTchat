const http = require("http");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const cluster = require("./lib/cluster");
const mongooseConnection = require("./lib/mongoose");
const loader = require("./utils/loader");

if (cluster()) {
} else {
  mongooseConnection();

  const app = express();

  app.use(logger("dev"));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(cors());

  loader.loadRoutes(app, __dirname + "/routes");

  const port = process.env.PORT || 5000;

  const server = http.createServer(app).listen(port, () => {
    console.log(`[INFO] Server is listening on port: ${port}`);
  });

  process.on("SIGINT", () => {
    server.close(() => {
      console.log("[INFO] Server close");
      process.exit(0);
    });
  });
}
