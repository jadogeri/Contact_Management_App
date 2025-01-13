import api from "../configs/axios";
import APIHeader from "./APIHeader";
class APIMethods{
    static async APIRequest(method : string,token: string,url : string, [...rest] ){
        url = process.env.BASE_URL + url;
        let body : Object = rest[0]
        let params : Object = rest[1]

        switch(method){
            case "PUT":{
               await api.put(url,body, {headers : APIHeader.getAuthHeader(token) })

            }
            case "GET":{
               await  api.get(url,{ headers: APIHeader.getAuthHeader(token), params: params })

            }    
            case "POST":{
              await  api.post(url,body,{ headers : APIHeader.getAuthHeader(token) })
            }     
            case "DELETE":{
               await api.delete(url,{ headers : APIHeader.getAuthHeader(token), params: params} )


            }
        }

        static  get:(url : string,token: string) =>{
            return APIMethods.APIRequest("GET",url,token,[])
        }
    
    
            
    }
}

