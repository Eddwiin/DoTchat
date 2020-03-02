const ConversationController = require("./../controllers/conversation");

module.exports = app => {
  app.get("/private/getConversations", ConversationController.getConversations);
};
