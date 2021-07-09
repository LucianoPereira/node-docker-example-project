import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import redis from 'redis';
import connectRedis from 'connect-redis';
import cors from 'cors';

import {
  DB_IP,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
  NODE_PORT,
  REDIS_PORT,
  REDIS_URL,
  SESSION_SECRET,
} from './config/config.js';
import { postRouter } from './src/routes/postRoutes.js';
import { userRouter } from './src/routes/userRoutes.js';

const App = async () => {
  const mongoUrl = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_IP}:${DB_PORT}/?authSource=admin`;

  await mongoose.connect(mongoUrl);

  const app = express();

  const redisClient = redis.createClient({
    host: REDIS_URL,
    port: REDIS_PORT,
  });

  const RedisStore = connectRedis(session);

  app.enable('trust proxy');
  app.use(cors({}));

  app.use(
    session({
      store: new RedisStore({
        client: redisClient,
      }),
      secret: SESSION_SECRET,
      saveUninitialized: false,
      resave: false,
      cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7,
        secure: false,
        signed: false,
      },
    }),
  );

  app.use(express.json());

  app.get('/api/v1', (_req, res) => {
    res.send(`<h2>Hello there. This is ${process.env.NODE_ENV} </h2>`);
  });
  app.use('/api/v1/posts', postRouter);
  app.use('/api/v1/users', userRouter);

  const port = NODE_PORT || 3000;

  app.listen(port, () => console.log(`listening on port ${port}`));
};

App();
