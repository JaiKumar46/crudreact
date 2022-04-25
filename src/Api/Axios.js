import axios, { Axios } from "axios";

export default axios.create({
    baseURL: " http://localhost:5001",
    headers: {
        "content-type":"application/json"
    },
});