import axios from "axios";

const accessKey = "f774f00a63134a5c9e4ea3681b";

const baseURL = "https://api.checkwx.com";

const authAxios = axios.create({
    baseURL: baseURL,
    headers: {
        apiKey: `Bearer ${accessKey}`
    }
});

export const api = {
    getMetar: async () => {
        let response = await authAxios.get(`/metar/${('')}/${accessKey}`)
            return response.data;
    },
            
    getTaf: async () => {
        let response = await authAxios.get(`/taf/${('')}/${accessKey}`)
            return response.data;
    }

}
        
