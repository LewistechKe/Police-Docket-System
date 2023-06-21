// adminRoutes.js

import express from 'express';
import { addUser } from '../controllers/adminController.js';

const router = express.Router();

router.post('/users', addUser);

export default router;
