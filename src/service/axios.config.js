import axios from 'axios'


export const req = axios.create({
    baseURL: 'https://freetestapi.com/api/v1',
    headers: {
        Accept: "application/json",
        'Content-Type': 'application/json;charset=utf-8'
   }
})