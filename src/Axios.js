import axios from "axios";

const Axios = axios.create({
    baseURL: `http://192.168.1.10:5000/api/v1`,
    // baseURL: `http://localhost:5000/api/v1`,

});


export default Axios;