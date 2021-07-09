const NODE_PORT = process.env.NODE_PORT;
const DB_IP = process.env.DB_IP || 'mongo';
const DB_PORT = process.env.DB_PORT || 27017;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const REDIS_URL = process.env.REDIS_URL || 'redis-store';
const REDIS_PORT = process.env.REDIS_PORT || '6379';
const SESSION_SECRET = process.env.SESSION_SECRET;
export {
  NODE_PORT,
  DB_IP,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  REDIS_URL,
  REDIS_PORT,
  SESSION_SECRET,
};
