import axios from "axios";

const baseURL = "https://api.checkwx.com";

export const authAxios = axios.create({
    baseURL: baseURL,
    headers: {
        "X-API-Key": `${process.env.REACT_APP_API_KEY}`
    },
});

