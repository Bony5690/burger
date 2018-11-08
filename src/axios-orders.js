import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://my-burger-2765d.firebaseio.com/'
});


export default instance;