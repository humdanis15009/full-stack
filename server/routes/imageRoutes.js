// routes/imageRoutes.js
import express from 'express';
import upload from '../middlewares/uploadMiddleware.js';
import {
  uploadImage,
  downloadImage,
  deleteImage
} from '../controllers/imageController.js';

const router = express.Router();

router.post('/upload', upload.single('file'), uploadImage);
router.get('/download/:filename', downloadImage);
router.delete('/delete/:filename', deleteImage);

export default router;
