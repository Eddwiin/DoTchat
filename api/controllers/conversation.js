const ConversationModel = require("./../models/conversation");
const helpers = require("./../utils/helpers");

const ConversationController = {};

ConversationController.getConversations = (req, res) => {
  ConversationModel.find({}, (err, conversations) => {
    if (err) helpers.catchError(conversations, err);

    return res.status(200).json(res);
  });
};

module.exports = ConversationController;
