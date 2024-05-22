import axios from 'axios'

let axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_URL,
});



axiosInstance.interceptors.request.use(
    async function (config) {
        const token =
            localStorage.getItem("token") || sessionStorage.getItem("token");
        if (token !== null || token !== undefined) {
            config.headers["x-access-token"] = token;
        }
        return config;
    },
    function (err) {
        return Promise.reject(err);
    }
);

export { axiosInstance }

export const createUser = async (endpoint, payload) => {
    try {
        let res = await axiosInstance.post(endpoint, payload)
        return res
    } catch (error) {
        return error.response
    }
}

export async function ShowUsers(endpoint) {
    try {
        let res = await axiosInstance.get(endpoint)
        return res
    } catch (error) {
        return error.response
    }
}