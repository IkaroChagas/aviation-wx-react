import axios from "axios";


const baseURL = "https://api.checkwx.com";


export const authAxios = axios.create({
    baseURL: baseURL,
    headers: {
        "X-API-Key": "f774f00a63134a5c9e4ea3681b"
    }
});

