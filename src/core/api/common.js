import axios from 'axios'

class ApiConfig {
    connect() {
        const instance = axios.create({
            baseURL: 'http://localhost:8080/api/'
        })
        return instance
    }
}

export default new ApiConfig()