const MessageController = require("./../controllers/message");
const multer = require("multer");
const multerLib = require("./../lib/multer.js");
const upload = multer({
  storage: multerLib({ pathToSave: "public/images/messages" })
});

module.exports = app => {
  app.post(
    "/private/uploadImageMessage",
    upload.single("images"),
    MessageController.uploadImgMessage
  );
};
