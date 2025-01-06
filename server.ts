import express,{ Request, Response } from 'express';
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();


connectDb();
const app = express();

const port = process.env.PORT || 6000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.get('/', (req: Request, res : Response) => {
  res.send('New Orleans Food Spots Server');
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
