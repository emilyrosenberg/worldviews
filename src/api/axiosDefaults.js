import axios from "axios";

axios.defaults.baseURL = "https://worldviews-api-48c7a84b222a.herokuapp.com";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();