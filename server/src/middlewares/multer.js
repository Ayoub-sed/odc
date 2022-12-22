const express = require('express');
const multer = require('multer');

const app = express();

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

app.post('/upload', upload.single('file'), (req, res) => {
  // req.file is the file that was uploaded
  console.log(req.file);
  res.send('File uploaded successfully');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
