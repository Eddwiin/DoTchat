import axios from 'axios';
import environment from './../../utils/enviromnents/environment';

export default axios.create({
    baseURL: `${environment.apiUrl}`
});