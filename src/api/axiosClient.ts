import axios from "axios";

const baseURL = "https://api-popeyes.bittosolution.vn/api/v1";
const headers: {} = {
    "Content-Type": "application/json",
    Accept: "application/json",
};

export const get = (endPoint, params?) => {
    return axios.get(baseURL + endPoint, {
        headers,
        params,
    });
};

export const post = (endPoint, body, params?) => {
    return axios.post(baseURL + endPoint, body, {
        headers,
        params,
    });
};

export const put = (endPoint, body, params?) => {
    return axios.put(baseURL + endPoint, body, {
        headers,
        params,
    });
};
