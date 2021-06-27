import express from 'express';
import mongoose from 'mongoose';

import {
 MONGO_IP, MONGO_PASSWORD, MONGO_PORT, MONGO_USER, NODE_PORT,
} from './config/config.js';
import { postRouter } from './src/routes/postRoutes.js';
import { userRouter } from './src/routes/userRoutes.js';

const App = async () => {
  const mongoUrl = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;
  console.log('mongoUrl', mongoUrl);

  const mongo = await mongoose.connect(mongoUrl);

  const app = express();

  app.get('/', (req, res) => {
    res.send('<h2>Hello there. This is Dev</h2>');
  });

  app.use(express.json());

  app.use('/api/v1/posts', postRouter);
  app.use('/api/v1/users', userRouter);

  const port = NODE_PORT || 3000;

  app.listen(port, () => console.log(`listening on port ${port}`));
};

App();
