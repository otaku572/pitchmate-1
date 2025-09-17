import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  email: string;
  password: string;
  pitchCount: number;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  pitchCount: { type: Number, default: 0 }
});

export default mongoose.model<IUser>('User', UserSchema);
