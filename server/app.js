import express from 'express';
import cors from 'cors';
import { productRoute, userRoute } from './routes/index.js';
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use('/api/product/', productRoute);
app.use('/api/product/', productRoute);
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
//  });

export default app; 
