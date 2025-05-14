import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Upload handler
export const uploadImage = (req, res) => {
    if (!req.file) {
        return res.status(400).send('No files were uploaded.');
    }

    console.log(req.file);
    res.status(201).send('File uploaded successfully.');
};

// Download handler
export const downloadImage = (req, res) => {
    const fileName = req.params.filename;
    const filePath = path.join(__dirname, '../uploads', fileName);

    if (fs.existsSync(filePath)) {
        res.sendFile(filePath);
    } else {
        res.status(404).send('File not found.');
    }
};

// Delete handler
export const deleteImage = (req, res) => {
    const fileName = req.params.filename;
    const filePath = path.join(__dirname, '../uploads', fileName);

    try {
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            res.send('File deleted successfully.');
        } else {
            res.status(404).send('File not found.');
        }
    } catch (error) {
        console.error('Error deleting file:', error);
        res.status(500).send('Internal server error.');
    }
};
