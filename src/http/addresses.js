import axios from "axios";

const $addresses = axios.create({
    baseURL: process.env.REACT_APP_DADATA_URL,
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Token " + process.env.REACT_APP_DADATA_TOKEN,
        "X-Secret": process.env.REACT_APP_DADATA_SECRET
    },
})

export {
    $addresses
}