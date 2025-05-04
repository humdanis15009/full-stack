import React, { useState } from 'react';

const ImageUpload = () => {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState('');
    const [uploading, setUploading] = useState(false);
    const [message, setMessage] = useState('');

    const handleFileChange = (e) => {
        const selected = e.target.files[0];
        setFile(selected);
        setPreview(URL.createObjectURL(selected));
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!file) return setMessage('Please select a file');

        const formData = new FormData();
        formData.append('image', file);
        console.log(formData);

        try {
            setUploading(true);
            setMessage('');

            const res = await fetch('http://localhost:3000/api/images/upload', {
                method: 'POST',
                // headers: {
                //     // Authorization: `Bearer ${localStorage.getItem('token')}`, // or pass from props/context
                // },
                body: formData,
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.message || 'Upload failed');

            setMessage('Upload successful!');
            console.log('Uploaded Image:', data);
        } catch (err) {
            console.error(err);
            setMessage(err.message || 'Error uploading image');
        } finally {
            setUploading(false);
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: 'auto' }}>
            <h2>Upload Image</h2>
            <form onSubmit={handleUpload}>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                />
                {preview && (
                    <div style={{ margin: '10px 0' }}>
                        <img src={preview} alt="Preview" width="100%" />
                    </div>
                )}
                <button type="submit" disabled={uploading}>
                    {uploading ? 'Uploading...' : 'Upload'}
                </button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default ImageUpload;
