import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { notFound, errorHandler } from './middlewares/errorMiddleware.js';
import connectDB from './config/db.js';
import userRoute from './routes/userRoute.js';
import imageRoutes from './routes/imageRoutes.js'
import adminRoutes from './routes/adminRoutes.js'

const app = express();

app.use(express.static('public', {
  setHeaders: (res, path) => {
    if (path.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));


dotenv.config();
connectDB();
app.use(cors({
  origin: ['http://localhost:5173', 'https://clinquant-frangollo-e608e8.netlify.app'],
  credentials: true,
}));
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/users', userRoute);

app.use('/api/images', imageRoutes); 

app.use('/api/admin', adminRoutes);


app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});