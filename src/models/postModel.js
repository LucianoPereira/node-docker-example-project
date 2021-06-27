import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, 'Post must have a title'],
  },
  body: {
    type: String,
    required: [true, 'post must have a body'],
  },
});

export const Post = mongoose.model('Post', postSchema);
