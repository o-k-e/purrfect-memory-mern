import express from 'express';
import {
  registerUser,
  getAllUsers,
  getUsersWithScores,
  loginUser,
  deleteUser,
  updateUser,
} from '../controllers/userController.js';

const router = express.Router();

router.post('/api/users', registerUser);

router.get('/api/users', getAllUsers);

router.get('/api/users/scored', getUsersWithScores);

router.post('/api/user', loginUser);

router.delete('/api/user/:id', deleteUser);

router.patch('/api/user/:id', updateUser);

export default router;