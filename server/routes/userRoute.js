import express from 'express';
import { getUsers, createUser, authUser, getProfile, updateUserProfile, deleteUser, getUserById } from '../controllers/userController.js';
import { admin, protect } from '../middlewares/authMiddleware.js';
import { sendOtp } from '../controllers/otpController.js';
import { forgotPassword, resetPassword } from '../controllers/forgotPasswordController.js';

const router = express.Router();

router.route('/')
  .get(protect, admin, getUsers)    // GET /api/users
  .post(createUser) // POST /api/users
router.post('/login', authUser);

router.route("/profile")
  .get(protect, getProfile)
  .put(protect, updateUserProfile)

router.route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUserProfile);

router.post('/send', sendOtp);

router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

export default router;