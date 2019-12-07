const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    _id: String,
    text: String,
    date: Date,
    pathFile: String,
    idUser: String
  },
  {
    collection: "Message"
  }
);
