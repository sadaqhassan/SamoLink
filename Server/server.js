import express from 'express'
const app = express();
config(app)

const port = process.env.PORT;

app.listen(port,()=>console.log('server is rrunning on http://localhost:'+port));

