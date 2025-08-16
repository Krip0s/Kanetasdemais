import axios from "axios";

const api = axios.create({
    baseURL: "https://kanetas-api.vercel.app/"
})

export default api