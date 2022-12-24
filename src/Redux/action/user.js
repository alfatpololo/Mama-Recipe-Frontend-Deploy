import axios from "axios";  

export const userLogin = (form) => {
    return new Promise ((resolve, reject) => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, form)
        .then((response) => {
            resolve(response);
        })
        .catch((err) => {
            reject(err);
        })
    })
}

export const userRegister = (form) => {
    return new Promise ((resolve, reject) => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/register`, form)

        .then((response) => {
            resolve(response);
        })
        .catch((err) => {
            reject(err);
        })
    })
}