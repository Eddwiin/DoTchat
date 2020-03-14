const mongoose = require("mongoose");

module.exports = () => {
  mongoose.connect(process.env.DB_URL || "mongodb://localhost:27017/dotchat", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
  });

  const db = mongoose.connection;

  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function() {
    console.log("Database connection successful ...");
  });
};
