import express from 'express';
import cors from 'cors';
import { productRoute, userRoute } from './routes/index.js';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use('/api/product/', productRoute);
app.use('/api/user/', userRoute);

export default app; 
