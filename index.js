import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import leaderboardRoutes from './routes/leaderboard.js';
import userRoutes from './routes/user.js'; 
import connectDB from './config/database.js';

dotenv.config();
const app = express();

app.use(
    cors({
      origin: 'http://localhost:5173',
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      
    })
  );
app.use(express.json());


connectDB();


app.use('/leaderboard', leaderboardRoutes);
app.use('/users', userRoutes); 

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));