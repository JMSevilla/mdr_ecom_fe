import axios from 'axios'

class ApiConfig {
    connect() {
        const instance = axios.create({
            // baseURL: 'https://rocky-savannah-36810.herokuapp.com/api/'
            baseURL: 'http://localhost:8080/api/'
        })
        return instance
    }
}

export default new ApiConfig()