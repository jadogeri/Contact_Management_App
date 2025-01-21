
const {localStorage} = require("../server")

export const getMockData = (key: string) => {
    
    let jsonString = localStorage.getItem(key) as string
   
    console.log("File data:", jsonString, typeof jsonString);
    return  jsonString;

}

