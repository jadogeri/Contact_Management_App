
const {localStorage} = require("../server")
export const setMockData = (key : string, data : string) => {

   console.log("mock data set\n",data )
   localStorage.setItem(key,data) 

}

