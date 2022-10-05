import axios from 'axios'

const baseURL = process.env.REACT_APP_API_DEV_URL

class ApiConfig {
    connect() {
        const instance = axios.create({
            // baseURL: 'https://rocky-savannah-36810.herokuapp.com/api/'
            baseURL: baseURL
        })
        return instance
    }
}

export default new ApiConfig()