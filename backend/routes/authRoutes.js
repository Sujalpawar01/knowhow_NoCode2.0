import express from 'express';
import { register, login, generateQR, uploadDocument } from '../controllers/authController.js';
import upload from '../utils/multer.js';

const router = express.Router();

// Register
router.post('/register', register);

// Login
router.post('/login', login);

// Generate QR code
router.get('/generate-qr', generateQR);

// Upload document
router.post('/upload-document', upload.single('document'), uploadDocument);

export default router;
