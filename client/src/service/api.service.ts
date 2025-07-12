import axios from "axios"

// BE PATH API GOES HERE
export const API = {
    AI_AGENTS: {
        GET: "",
        POST: "",
        PUT: "",
        DELETE: ""
    }
}

export const post = (url: string, data: {}) => {
    return axios.post(url, data)
}

export const put = (url: string, data: {}) => {
    return axios.put(url, data)
}

export const get = (url: string) => {
    return axios.get(url)
}
