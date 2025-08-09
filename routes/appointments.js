const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');
const { body, validationResult } = require('express-validator'); // 🔴 إضافة جديدة

// 🔴 إضافة تحقق المدخلات
router.post('/',
  [
    body('date').isISO8601().withMessage('التاريخ غير صالح'),
    body('patientId').isMongoId().withMessage('معرف المريض غير صالح'),
    body('notes').optional().isLength({ max: 500 }).withMessage('الملاحظات طويلة جداً')
  ],
  async (req, res) => {
    // 🔴 التحقق من الأخطاء
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { date, patientId, notes } = req.body;
    
    try {
      const appointment = new Appointment({ date, patientId, notes });
      await appointment.save();
      res.status(201).json(appointment);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

// 🔴 إضافة ترقيم الصفحات
router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;
    const skip = (page - 1) * limit;

    const appointments = await Appointment.find()
      .skip(skip)
      .limit(limit)
      .sort({ date: -1 }); // الأحدث أولاً

    res.json(appointments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
