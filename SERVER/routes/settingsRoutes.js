// settingsRoutes.js

import express from 'express';
import { updateUser } from '../controllers/settingsController.js';

const router = express.Router();

router.put('/user/:id', updateUser);

export default router;
