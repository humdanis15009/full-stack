import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            index: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user',
            required: true,
            index: true
        },
        resetToken: {
            type: String,
            index: true
        },
        tokenExpire: {
            type: Date,
            index: { expires: 3600 * 24 }
        },
        profile: {
            age: Number,
            gender: { type: String, enum: ['male', 'female', 'other'] },
            country: String,
            preferences: {
                newsletter: Boolean,
                notifications: Boolean
            }
        },

        activity: [
            {
                date: { type: Date, required: true },
                type: { type: String, enum: ['login', 'purchase', 'logout'] },
                metadata: {
                    ip: String,
                    device: String
                }
            }
        ],

        subscriptions: [
            {
                plan: { type: String, enum: ['basic', 'pro', 'enterprise'] },
                status: { type: String, enum: ['active', 'cancelled', 'expired', 'inactive'] },
                startDate: Date,
                endDate: Date
            }
        ],
        isDeleted: { type: Boolean, default: false },
        deletedAt: { type: Date, default: null },
    },
    {
        timestamps: true
    }
);

const User = mongoose.model('User', userSchema);

export default User;
