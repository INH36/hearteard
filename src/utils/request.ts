// axios的二次封装

import axios from 'axios'

const request = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 3000
})

// 请求拦截器
request.interceptors.request.use(
    (config) => {
        return config
    },
    (err) => {
        return Promise.reject(err)
    }
)

// 响应拦截器
request.interceptors.response.use(
    (res) => {
        return res
    },
    (err) => {
        return Promise.reject(err)
    }
)

export default request