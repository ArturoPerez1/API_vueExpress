import express from 'express';
import cors from 'cors';
import {PORT, CorsOptions} from './config.js';
import userRoutes from './routes/users.routes.js';

const app = express();

app.use(express.json());
app.use(userRoutes);
app.use(cors(CorsOptions));


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});