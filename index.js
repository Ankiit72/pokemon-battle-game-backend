import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import leaderboardRoutes from './routes/leaderboard.js';
import connectDB from './config/database.js';

dotenv.config();
const app = express();


app.use(cors());
app.use(express.json());


connectDB();


app.use('/leaderboard', leaderboardRoutes);


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));