const multer = require("multer");

// disk storage for local
const storageForLocal = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    // size and ratio and format check kr sakte ho

    console.log("diskstorage me file", file);
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// for server
const storageForServer = multer.memoryStorage();

const upload = multer({ storage: storageForServer })    

module.exports = upload;
