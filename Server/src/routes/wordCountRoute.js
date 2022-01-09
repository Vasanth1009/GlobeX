import express from 'express';

import {
  getWordCounts,
  createWordCount,
  updateWordCount,
  deleteWordCount,
} from '../controllers/wordCountController.js';

const router = express.Router();

router.get('/:id', getWordCounts);
router.post('/', createWordCount);
router.put('/:id', updateWordCount);
router.delete('/:id', deleteWordCount);

export default router;
