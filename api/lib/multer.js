const multer = require("multer");
const fs = require("fs");
const path = require("path");

module.exports = ({ pathToSave }) => {
  return multer.diskStorage({
    destination: (req, file, cb) => {
      const dirToCheck = rootDirname + "/" + pathToSave;
      if (!fs.exists(dirToCheck)) {
        fs.mkdirSync(dirToCheck, { recursive: true });
      }
      cb(null, pathToSave);
    },

    filename: (req, file, cb) => {
      cb(
        null,
        file.fieldname +
          "-" +
          (req.params.id || req.query.id) +
          path.extname(file.originalname)
      );
    }
  });
};
