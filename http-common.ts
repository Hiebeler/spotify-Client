import axios from "axios";

export default axios.create({
    baseURL: "https://accounts.spotify.com",
    headers: {
        "Content-Type": "application/json"
    }
})
