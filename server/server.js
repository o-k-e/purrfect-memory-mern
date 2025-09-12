import express from 'express';
import { connectDB } from './db.js';
import userRoutes from './routes/userRoutes.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = [
  'http://localhost:5173',
];

app.use(cors({
  origin: function (origin, callback) {
    console.log("cors");
    console.log(origin);

    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.use(express.json());

app.use(userRoutes);

async function startServer() {
  try {
    await connectDB();
    app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
  } catch (error) {
    console.error('Failed to start server:', error);
  }
}

startServer();