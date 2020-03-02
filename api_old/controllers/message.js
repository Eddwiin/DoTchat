const MessageController = {};

MessageController.uploadImgMessage = (req, res) => {
  if (req.file && !req.file.path) {
    return res.status(500).json({ message: "Image not sent" });
  }

  return res.status(200).json(true);
};

module.exports = MessageController;
