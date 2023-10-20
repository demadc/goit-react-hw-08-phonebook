import axios from "axios";

const instance = axios.create({    
    baseURL:'https//api.escuelajs.co/api/v1',
})

const signUp = async (body) => {
   return await instance.post('/users', body)
}

const login = async (body) => {
    return await instance.post('/auth/login', body)
}