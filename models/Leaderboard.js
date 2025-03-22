import mongoose from 'mongoose';

const leaderboardSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    score: { type: Number, required: true },
    date: { type: Date, default: Date.now },
  },
  {
    versionKey: false, 
  }
);

const Leaderboard = mongoose.model('Leaderboard', leaderboardSchema);
export default Leaderboard;