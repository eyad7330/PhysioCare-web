const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser'); // 🔴 إضافة جديدة
const helmet = require('helmet'); // 🔴 إضافة جديدة
const cors = require('cors');

const app = express();

// 🔴 إعدادات الأمان الجديدة
app.use(helmet()); // حماية الرأس
app.use(cookieParser()); // لمعالجة الكوكيز
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true // السماح بالكوكيز
}));

app.use(express.json());

// 🔴 تعديل تسجيل الدخول (مثال)
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  
  // ... التحقق من المستخدم وكلمة المرور
  
  // 🔴 استبدال تخزين JWT في localStorage بكوكيز آمنة
  res.cookie('token', token, { 
    httpOnly: true, // منع الوصول عبر JavaScript
    secure: process.env.NODE_ENV === 'production', // HTTPS فقط في الإنتاج
    sameSite: 'strict', // منع CSRF
    maxAge: 24 * 60 * 60 * 1000 // يوم واحد
  });
  
  res.json({ success: true });
});

// ... باقي الكود

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
