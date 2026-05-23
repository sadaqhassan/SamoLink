import express from 'express'
import configApp from './configs/config.js';
import connectiondb from './configs/db.js';
import { userRoute } from './Routes/user.route.js';
import { postRoute } from './Routes/posts.route.js';

const app = express();

configApp(app);

app.use('/api/user',userRoute);
app.use('/api/posts',postRoute);

connectiondb()