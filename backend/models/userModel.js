import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isEsteemed: { type: Boolean, default: false },
  qrCode: { type: String },
  documents: [{ type: String }], // Updated schema for documents
});

export default mongoose.model('User', userSchema);
