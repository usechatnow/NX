// ApiClient.ts
import axios from 'axios';

const ApiClient = axios.create({
    baseURL: 'https://your-api-endpoint.com', // Update with your backend API URL
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

export default ApiClient;
