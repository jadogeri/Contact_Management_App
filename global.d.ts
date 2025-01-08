    declare namespace NodeJS {
      interface ProcessEnv {
        GITHUB_AUTH_TOKEN: string;
        NODE_ENV: 'development' | 'production';
        PORT?: string = "6000";
        PWD: string;
        CONNECTION_STRING : string = "mongodb+srv://devNewOrleansUserDev:devNewOrleansPassDev@cluster0.hbglj.mongodb.net?retryWrites=true&w=majority&appName=Cluster0";
        ACCESS_TOKEN_SECERT : string = "devenvironment"

      }
    }

  
  // If this file has no import/export statements (i.e. is a script)
  // convert it into a module by adding an empty export statement.
  //export {}