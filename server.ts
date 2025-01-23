
import dotenv from 'dotenv';
dotenv.config();

import express,{ Request, Response } from 'express';
const connectDb = require("./configs/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const {corsOptions} = require("./configs/cors")
const cors = require("cors");
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')
const swaggerjsdoc = require("swagger-jsdoc")





connectDb();
const app = express();

const port = process.env.PORT || 5000;

const swaggeroptions = {
  definition:{

    openapi : "3.0.0",
    info: {
      contact:"Joseph Adogeri",
      since:"22-JAN-2025",
      title: "Contact Management App",
      description: "This is an app which handles authentication of a user and anges their contacts"+
                    "This app was created using Typescript, MongoDB, NodeJS, Express" +
                    "This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about\nSwagger at [http://swagger.io](http://swagger.io). \n\nSome useful links:\n- [The Command Management App repository](https://github.com/jadogeri/Contact_Management_App)\n- [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)",
      version: "0.1",
      termsOfService: "http://swagger.io/terms",
      license:{
        name: "Apache 2.0",
        url: "http://www.apache.org/licenses/LICENSE-2.0.html"
      },

    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        }
      }
    },
    tags: [                           // by default: empty Array
      {
          "name": "Users",               // Tag name
          "description": "The Userss managing API"         // Tag description
      },
      {
          "name": "Contacts",               // Tag name
          "description": "The Contacts managing API",         // Tag description
          "security": "bearerAuth"
      },
  ],
    servers : [
      {
        //url : "https://fruitsrestapi.onrender.com"
      url : "http://localhost:4000"
      }
    ]
  },
  apis : ["./docs/**/*.ts"],
};



const spacs = swaggerjsdoc(swaggeroptions);
app.use("/api-docs", swaggerUi.serve,swaggerUi.setup(spacs))















app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes")
    /* 
    #swagger.tags = ['Contact']

 
    */);
app.use("/api/users", require("./routes/userRoutes")
    /* 
    #swagger.tags = ['User']

    */);
app.use("/api/auths", require("./routes/authRoutes")
    /* 
    #swagger.tags = ['Auth']

    #swagger.security = [{
        "apiKeyAuth": []
    }] 

    */);

app.use(errorHandler);
app.use(cors(corsOptions)) 


app.get('/', (req: Request, res : Response) => {
  res.send({message:"home"});
});

//app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))


// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, ()=> {
    console.log(`Backend is running on http://localhost:${port}`)
  })
}
