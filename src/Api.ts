import axios from "axios";

const baseURL = "https://api.checkwx.com";

const authAxios = axios.create({
    baseURL: baseURL,
    headers: {
        "X-API-Key": "f774f00a63134a5c9e4ea3681b"
    }
});

export const api = {
    getMetar: async () => {
        let response = await authAxios.get(`/metar/${('')}/`)
            return response.data
    },
    
            
    getTaf: async () => {
        let response = await authAxios.get(`/taf/${('')}/`)
            return response.data;
    }
    

}
        
