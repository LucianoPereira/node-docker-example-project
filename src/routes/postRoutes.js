import express from 'express';

import { protect } from '../middleware/authMiddleware.js';
import {
  getAllPosts,
  createPost,
  deletePost,
  getOnePost,
  updatePost,
} from '../controllers/postController.js';

const router = express.Router();

router.route('/').get(getAllPosts).post(protect, createPost);

router.route('/:id').get(getOnePost).patch(protect, updatePost).delete(protect, deletePost);

export const postRouter = router;
