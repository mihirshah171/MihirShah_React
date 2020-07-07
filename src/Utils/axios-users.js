import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://mihir-react-training.herokuapp.com/',
});

export default instance;