import axios from 'axios'

class ApiConfig {
    connect() {
        const instance = axios.create({
            baseURL: ''
        })
        return instance
    }
}

export default new ApiConfig()