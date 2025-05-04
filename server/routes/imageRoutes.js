import express from 'express';
import upload from '../middlewares/uploadMiddleware.js';
import Image from '../models/imageModel.js';
// import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Upload an image
router.post('/upload', upload.single('image'), async (req, res) => {
    try {

        console.log('Received file:', req.file);
        console.log('User:', req.user);

        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const image = await Image.create({
            url: req.file.path,
            public_id: req.file.filename,
            filename: req.file.originalname,
            uploadedBy: req.user._id // req.user comes from your auth middleware
        });

        res.status(201).json(image);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Image upload failed' });
    }
});

export default router;
