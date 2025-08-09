const sharp = require('sharp');
const path = require('path');

const compressImage = async (req, res, next) => {
  if (!req.file) return next();
  
  try {
    await sharp(req.file.path)
      .resize(800) // حجم مناسب
      .jpeg({ quality: 80 }) // جودة 80%
      .toFile(path.join(req.file.destination, 'compressed_' + req.file.filename));
    
    // حذف الملف الأصلي
    const fs = require('fs');
    fs.unlinkSync(req.file.path);
    
    req.file.filename = 'compressed_' + req.file.filename;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = compressImage;
