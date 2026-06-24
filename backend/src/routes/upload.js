const express = require('express');
const { upload, uploadSingle } = require('../controllers/upload');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Upload API Working' });
});

router.post('/', upload.single('file'), uploadSingle);

module.exports = router;
