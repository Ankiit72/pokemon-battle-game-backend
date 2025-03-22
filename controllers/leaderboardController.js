import Leaderboard from '../models/Leaderboard.js';


export const getLeaderboard = async (req, res) => {
  try {
    const scores = await Leaderboard.find().sort({ score: -1 });
    res.json(scores);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


export const addScore = async (req, res) => {
  const { username, score } = req.body;
  if (!username || score == null) {
    return res.status(400).json({ error: 'Missing username or score' });
  }

  try {
    const newEntry = new Leaderboard({ username, score });
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};