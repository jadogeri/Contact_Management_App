
const {localStorage} = require("../server")

export const removeMockData = (key: string) => {
    
   localStorage.removeItem(key) 
  
}

