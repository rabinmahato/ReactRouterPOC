import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://gwapi.zee5.com/',
    headers: { 'x-access-token' : 'eyJ0eXAiOiJqd3QiLCJhbGciOiJIUzI1NiJ9.eyJwcm9kdWN0X2NvZGUiOiJ6ZWU1QDk3NSIsInBsYXRmb3JtX2NvZGUiOiJXZWJAJCF0Mzg3MTIiLCJpc3N1ZWRBdCI6IjIwMTktMDEtMDNUMDA6MzM6MzUrMDAwMCIsInR0bCI6ODY0MDB9.TZFQgWBU0mHET9jj8Ai4jkfAVG2VVyV6_0EZWEVVorI'}
});

export default instance;