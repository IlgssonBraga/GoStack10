import axios from 'axios';

const api = axios.create({
    baseURL:
        'https://my-json-server.typicode.com/IlgssonBraga/bootcamp-gostack-desafio-07',
});

export default api;
