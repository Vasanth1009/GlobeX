import express from 'express';
import cors from 'cors';
import userRoute from './routes/userRoute.js';
import wordCountRoute from './routes/wordCountRoute.js';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('hello to globex');
});
app.use('/api/user', userRoute);
app.use('/api/wordCount', wordCountRoute);

export default app;
