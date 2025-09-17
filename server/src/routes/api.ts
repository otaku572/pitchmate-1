import { Router } from 'express';
import groqController from '../controllers/groqController';
import userController from '../controllers/userController';
import { authenticateToken } from '../middleware/authMiddleware';

const router = Router();

router.post('/generate', authenticateToken, groqController.generateMessage);
router.get('/user/me', authenticateToken, userController.getMe);

export default router;
