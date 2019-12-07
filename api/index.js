const http = require("http");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const session = require("express-session");
const path = require("path");
const MongoDBStore = require("connect-mongodb-session")(session);
require("dotenv").config();

const cluster = require("./lib/cluster");
const mongooseConnection = require("./lib/mongoose");
const loader = require("./utils/loader");

global.rootDirname = __dirname;

if (cluster()) {
} else {
  mongooseConnection();

  const app = express();
  const store = new MongoDBStore({
    uri: process.env.DTB_URL || "mongodb://localhost:27017/dotchat",
    collection: "Session"
  });

  app.use(logger("dev"));
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(cors());
  app.use(helmet());
  app.use(
    session({
      secret: "my session in node js",
      saveUninitialized: false,
      resave: false,
      store: store
    })
  );

  app.use("/public", express.static(path.join(__dirname, "public")));

  app.get("/private/**", (req, res, next) => {
    if (!req.session.user) {
      // User try to access a page without the rights
      return res.status(403).json({ message: "User not auth" });
    }
    next();
  });

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
