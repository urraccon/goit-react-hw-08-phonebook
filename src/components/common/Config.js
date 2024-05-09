import axios from 'axios';

function setRequestURL(token) {
  axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

const Config = {
  setRequestURL,
};

export default Config;
