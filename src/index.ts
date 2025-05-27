import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const jobRoutes = require('./routes/jobs');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('src/public'));

app.use('/api/jobs', jobRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Jobly API - Your job search assistant!');
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ 
    status: 'error',
    message: `Route ${req.originalUrl} not found` 
  });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 