import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema(
    {
        url: {
            type: String,
            required: true,
        },
        public_id: {
            type: String,
            required: true,
        },
        filename: {
            type: String,
        },
        uploadedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', 
            required: true
        }
    },
    {
        timestamps: true,
    }
);

const Image = mongoose.model('Image', imageSchema);

export default Image;
