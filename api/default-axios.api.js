import defaultAxios from 'axios'

export const axios = defaultAxios.create({
    baseURL: 'https://restarauntbistro-obed.herokuapp.com/'
})