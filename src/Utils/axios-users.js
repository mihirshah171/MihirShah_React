import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://axios-crud-server.herokuapp.com/',
});

export default instance;