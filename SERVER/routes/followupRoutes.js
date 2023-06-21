// followupRoutes.js

import express from 'express';
import { getAllFollowups, addFollowup } from '../controllers/followupController.js';

const router = express.Router();

router.get('/', getAllFollowups);
router.post('/', addFollowup);

export default router;




