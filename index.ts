import { Request, Response } from 'express';
const express = require("express")
const bodyParser = require('body-parser');
import * as dotenv from 'dotenv';
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const {corsOptions} = require("./config/cors")
/*
const  { dbConnection } = require("./src/configs/MongoDB");




dotenv.config(); // Load .env file
dbConnection();

//connectDB()
const {corsOptions} = require("./src/configs/cors")

*/

const port = process.env.PORT || 6000; // Default to 3000 if not set in .env
//const dbUrl = process.env.DATABASE_URL;
//const apiKey = process.env.API_KEY;

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(cors(corsOptions)) 


app.use("/api/user", require("./routes/userRoutes"));
app.use(errorHandler);


app.get('/', (req: Request, res : Response) => {
    res.send('New Orleans Food Spots Server');
  });

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

