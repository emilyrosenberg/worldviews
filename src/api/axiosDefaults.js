import axios from "axios";

axios.defaults.baseURL = "https://worldviews-api1-2fa5e8a86642.herokuapp.com";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();