class APIHeader{

    static getAuthHeader(token : string){
        return {Authorization : `Bearer ${token}` }
    }
}

export default APIHeader