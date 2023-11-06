import axios from "axios";
import AuthService from "./services/auth.service";

const axiosClient = axios.create({
    baseURL: "https://api.spotify.com",
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})

axiosClient.interceptors.request.use(
    (config) => {
        if (config.url !== "https://accounts.spotify.com/api/token") {
            const token = localStorage.getItem("access_token");
            if (token) {
                // Configure this as per your backend requirements
                config.headers!["Authorization"] = "Bearer " + token;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosClient.interceptors.response.use(
    (res) => {
        return res;
    },
    async (err) => {
        const originalConfig = err.config;

        if (originalConfig.url !== "https://accounts.spotify.com/api/token" && err.response) {
            // Access Token was expired
            if (err.response.status === 401 && !originalConfig._retry) {

                originalConfig._retry = true;

                try {
                    AuthService.refreshToken();

                    return axiosClient(originalConfig);
                } catch (_error) {
                    /* toast.error("Session time out. Please login again.", {
                       id: "sessionTimeOut",
                     });*/
                    // Logging out the user by removing all the tokens from local

                    localStorage.removeItem("access-token");
                    localStorage.removeItem("refresh-token");
                    // Redirecting the user to the landing page
                    window.location.href = window.location.origin;
                    return Promise.reject(_error);
                }
            }
        }

        return Promise.reject(err);
    }
);


export default axiosClient;