const mongoose = require("mongoose");
const MessageSchema = require("./message");
const UserSchema = require("./user");

const ConversationSchema = new mongoose.Schema(
  {
    _id: String,
    creation_date: Date
  },
  {
    collection: "Conversation"
  }
);

module.exports = mongoose.model("Conversation", ConversationSchema);
