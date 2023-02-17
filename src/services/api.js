import axios from "axios";

const api = axios.create({
    baseURL: 'https://server-my-finances.vercel.app/'
})

export default api