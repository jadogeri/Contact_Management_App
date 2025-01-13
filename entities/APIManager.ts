import { AxiosResponse } from "axios"
import api from "../configs/axios"

export class APIManager{

    static  async addAuth(authData : Object, token : string) : Promise<AxiosResponse<any, any>>{
        console.log("add auth from api manager.........................................")
        return await api.post(process.env.BASE_URL+"/api/auths/add",authData,
            {
              headers:{
                Authorization : `Bearer ${token}`
              }
            }
        )
    }

    static  async updateAuth(authData : Object, token : string) : Promise<AxiosResponse<any, any>>{
        console.log("update auth from api manager.........................................")

        return await api.put(process.env.BASE_URL+"/api/auths/update",authData,
            {
              headers:{
                Authorization : `Bearer ${token}`
              }
            }
        )
    }


}



