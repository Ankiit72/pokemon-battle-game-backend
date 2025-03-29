import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    score: { type: Number, required: true, default: 0 },
  },
  {
    versionKey: false, 
  }
);

const User = mongoose.model('User', userSchema);
export default User;