import express from 'express'
import { connectionTodb } from './Configs/conn.js';
import { config } from './Configs/config.js';
import userRoute from './Routes/user.route.js';

const app = express();

config(app)

const port = process.env.PORT;

connectionTodb();

app.use('/api/auth',userRoute);

app.listen(port,()=>console.log('server is rrunning on http://localhost:'+port));

