//   http://192.168.0.84:3001/

import axios from 'axios';

export default axios.create({
     baseURL: 'http://192.168.0.84:3001',
})