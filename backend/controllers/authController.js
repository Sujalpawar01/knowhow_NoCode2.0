import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import QRCode from 'qrcode';
import User from '../models/userModel.js';

// Register
export const register = async (req, res) => {
  const { name, email, password } = req.body;

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Login
export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};

// Generate QR Code
export const generateQR = async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  const qrData = {
    name: user.name,
    email: user.email,
    isEsteemed: user.isEsteemed,
  };

  try {
    const qrCode = await QRCode.toDataURL(JSON.stringify(qrData));
    user.qrCode = qrCode;
    await user.save();
    res.json({ qrCode });
  } catch (error) {
    res.status(500).json({ message: 'Error generating QR code' });
  }
};

// Update Document Status
export const uploadDocument = async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  // Save document logic here (e.g., save the file to the server)
  user.documents.push(req.file.path);
  await user.save();
  
  res.status(200).json({ message: 'Document uploaded successfully' });
};
