import axios from 'axios';

const zeeAxiosInstance = axios.create({
    baseURL: 'https://gwapi.zee5.com/'
});

//Define interceptor for request
zeeAxiosInstance.interceptors.request.use(request => {    
    /* This token is hard coded. Have to replace with valid token */
    request.headers['x-access-token'] = 'eyJ0eXAiOiJqd3QiLCJhbGciOiJIUzI1NiJ9.eyJwcm9kdWN0X2NvZGUiOiJ6ZWU1QDk3NSIsInBsYXRmb3JtX2NvZGUiOiJXZWJAJCF0Mzg3MTIiLCJpc3N1ZWRBdCI6IjIwMTktMDEtMDRUMDM6MTU6MjIrMDAwMCIsInR0bCI6ODY0MDB9.c4j2mYIgHS50YS-5K7Cj5yB9c-IRMF7CardradHph5k';
    return request;
}, err => {
    return err;
})

//Define interceptor for response
zeeAxiosInstance.interceptors.response.use(response => {
    return response;
}, err => {
    return err;
})

export default zeeAxiosInstance;