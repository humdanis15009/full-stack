import express from 'express';
import { getUsers, createUser, authUser, getProfile, updateUserProfile, deleteUser, getUserById, logout } from '../controllers/userController.js';
import { admin, protect } from '../middlewares/authMiddleware.js';
import { sendOtp } from '../controllers/otpController.js';
import { forgotPassword, resetPassword } from '../controllers/forgotPasswordController.js';
import { aggController } from '../controllers/aggController.js';
import { softDeleteUser } from '../controllers/softDeleteUser.js';

const router = express.Router();

router.route('/')
  .get(/*protect, admin,*/ getUsers)    // GET /api/users
  .post(createUser) // POST /api/users

router.post('/login', authUser);
router.post('/logout', logout);

router.route("/profile")
  .get(protect, getProfile)
  .put(protect, updateUserProfile)

router.route('/:id')
  // .delete(protect, admin, deleteUser)
  .delete(softDeleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUserProfile);

router.post('/send', sendOtp);

router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

router.get('/aggregate/roles', aggController);

export default router;