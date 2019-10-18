import axios from 'axios';
import environment from '../../enviromnents/environment';

export default axios.create({
    baseURL: `${environment.apiUrl}`
});