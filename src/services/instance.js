import axios from "axios";

// define the base url for the api
const baseUrl = 'https://6720e08598bbb4d93ca6775b.mockapi.io/api/v1';

// create an instance of axios
const instance = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 5000,
});

export default instance;