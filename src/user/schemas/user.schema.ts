import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    id: String,
    username: String,
    email: String,
    password: String,
    bio: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    token: String
})