import axios from "axios"

const BASE_URL = "https://www.metaweather.com/api/location"
const CROSS_URL = "https://the-ultimate-api-challenge.herokuapp.com"
const FULL_URL = `${CROSS_URL}/${BASE_URL}`
const API_KEY = '16972912cbf2306332faf364445f5021'
const URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=`

const Client = axios.create({
    baseURL: URL,
    timeout: 10000,
})

Client.interceptors.request.use(config => {
    console.log("Request interceptors", config.url.params)
    console.log("this is config", config)
    config.baseURL = `${config.baseURL}${config.url.params}`
    return config
})

Client.interceptors.response.use(response => {
    console.log("Respond interceptors", response)

    return response
})

export default Client;