import axios from "axios"

const BASE_URL = "https://www.metaweather.com/api/location"
const CROSS_URL = "https://the-ultimate-api-challenge.herokuapp.com"
const FULL_URL = `${CROSS_URL}/${BASE_URL}`

const Client = axios.create({
    baseURL: FULL_URL,
    timeout: 10000,
})

Client.interceptors.request.use(config => {
    console.log("Request interceptors", config)

    return config
})

Client.interceptors.response.use(response => {
    console.log("Respond interceptors", response)

    return response
})

export default Client;