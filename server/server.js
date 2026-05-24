import express from 'express'
import configApp from './configs/config.js';
import connectiondb from './configs/db.js';
import { userRoute } from './Routes/user.route.js';
import { postRoute } from './Routes/posts.route.js';

const app = express();

configApp(app);

await connectiondb();
const port = process.env.PORT
app.listen(port, () => console.log("http://localhost:" + port));
app.use('/api/user', userRoute);
app.use('/api/posts', postRoute);
