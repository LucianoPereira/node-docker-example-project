const NODE_PORT = process.env.NODE_PORT;
const MONGO_IP = process.env.MONGO_IP || 'mongo';
const MONGO_PORT = process.env.MONGO_PORT || 27017;
const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const REDIS_URL = process.env.REDIS_URL || 'redis-store';
const REDIS_PORT = process.env.REDIS_PORT || '6379';
const SESSION_SECRET = process.env.SESSION_SECRET;
export {
  NODE_PORT,
  MONGO_IP,
  MONGO_PORT,
  MONGO_USER,
  MONGO_PASSWORD,
  REDIS_URL,
  REDIS_PORT,
  SESSION_SECRET,
};
