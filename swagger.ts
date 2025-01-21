import swaggerAutogen from 'swagger-autogen';
import mongoose from 'mongoose';
import { IUser } from './interfaces/IUser';


const doc = {
    info: {
        version: 'v1.0.0',
        title: 'Contact Management',
        description: 'Implementation of Swagger with TypeScript'
    },
    servers: [
        {
            url: 'http://localhost:4000',
            description: ''
        },
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
            }
        },
        schemas: {  
            IUser: {  
                type: 'object',  
                properties: {  
                    username: 'string',  
                    email: 'string',
                    password: 'string'
                }  
            }  
        },
    },
    tags: [                           // by default: empty Array
        {
            "name": "User",               // Tag name
            "description": "a User"         // Tag description
        },
        {
            "name": "Auth",               // Tag name
            "description": "a auth"         // Tag description
        },
        {
            "name": "Contact",               // Tag name
            "description": "a Contact"         // Tag description
        },
    ]
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['./server.ts','./interfaces/*.ts'];

swaggerAutogen({openapi: '3.0.0'})(outputFile, endpointsFiles, doc)
    // .then(()=>{
    //     require("./server.ts")
    // })

