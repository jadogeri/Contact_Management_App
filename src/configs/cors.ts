import { CorsOptions } from "cors";

export const corsOptions : CorsOptions= {
    origin:'*', 
    allowedHeaders: ['Content-Type', 'Authorization',"Origin", "X-Requested-With" , "Accept"],    
    credentials:true,            
    optionsSuccessStatus:200,
    methods: ["GET", "POST", "PUT", "DELETE"],
}

