import express from 'express';
import { getLeaderboard, addScore } from '../controllers/leaderboardController.js';

const router = express.Router();

router.get('/', getLeaderboard);
router.post('/', addScore);

export default router;