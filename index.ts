const dotenv = require("dotenv")
dotenv.config();

import express,{ Request, Response } from 'express';


const app = express();

const port = process.env.PORT || 5000;
// Middleware
app.use(express.json());


app.get('/', (req: Request, res : Response) => {
  res.send({message:"home"});
});

app.listen(port, ()=> {
    console.log(`Backend is running on http://localhost:${port}`)
})
 