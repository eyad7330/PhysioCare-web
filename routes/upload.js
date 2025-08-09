const express = require('express');
const router = express.Router();
const multer = require('multer');
const compressImage = require('../middleware/upload'); // 🔴 استيراد الـ middleware

const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('image'), compressImage, (req, res) => {
  if (!req.file) return res.status(400).send('لا يوجد ملف مرفوع');
  
  res.json({
    filename: req.file.filename,
    path: `/uploads/${req.file.filename}`
  });
});

module.exports = router;
