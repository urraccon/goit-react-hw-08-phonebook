import axios from 'axios';

const TOKEN = 'token';

function setRequestsURL() {
  const accessToken = localStorage.getItem(TOKEN);
  axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
}

const Config = {
  setRequestsURL,
};

export default Config;
