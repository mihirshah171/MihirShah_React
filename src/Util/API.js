import axios from 'axios';

const axiosApiInstance = axios.create({
    baseURL: 'https://axios-crud-server.herokuapp.com/'
});

if (localStorage.getItem("access_token") !== null) {
    axiosApiInstance.defaults.headers.common['Authorization'] = localStorage.getItem("access_token");
}
// SKIP_PREFLIGHT_CHECK=true
// REACT_APP_BASEURL=https://axios-crud-server.herokuapp.com/
// GENERATE_SOURCEMAP=false
export default axiosApiInstance;
