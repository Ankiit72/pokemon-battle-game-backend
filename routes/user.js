import express from 'express';
import { createOrUpdateUser, getUsers, getUserByName } from '../controllers/userController.js';

const router = express.Router();

router.post('/', createOrUpdateUser); 
router.get('/', getUsers); 
router.get('/:name', getUserByName); 

export default router;