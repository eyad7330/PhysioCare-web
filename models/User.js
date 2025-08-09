const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['patient', 'physio'], default: 'patient' }
});

// 🔴 زيادة قوة التشفير
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  const saltRounds = 12; // 🔴 زيادة من 10 إلى 12
  this.password = await bcrypt.hash(this.password, saltRounds);
  next();
});

module.exports = mongoose.model('User', userSchema);
