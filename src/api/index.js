import axios from 'axios'

const baseURL = 'http://localhost:8080'

const _axios = axios.create({
    baseURL
})

const getItems = async () => {
    const { data } = await _axios.get('/items')
    return data
}

export default {
    getItems,
}