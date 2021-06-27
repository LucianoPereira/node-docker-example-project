import express from 'express';

import {
  getAllPosts,
  createPost,
  deletePost,
  getOnePost,
  updatePost,
} from '../controllers/postController.js';

const router = express.Router();

router.route('/').get(getAllPosts).post(createPost);

router.route('/:id').get(getOnePost).patch(updatePost).delete(deletePost);

export const postRouter = router;
