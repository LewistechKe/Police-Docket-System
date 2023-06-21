// casesRoutes.js

import express from 'express';
import { addCase, exportCases, searchCase, updateCase, getAllCases } from '../controllers/casesController.js';

const router = express.Router();

router.get('/Cases', getAllCases)
router.post('/addCase', addCase);
router.get('/export', exportCases);
router.get('/:caseNumber', searchCase);
router.put('/:id', updateCase);

export default router;
