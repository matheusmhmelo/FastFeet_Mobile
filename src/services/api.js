import axios from 'axios';

import '~/global';

const api = axios.create({
  baseURL: `http://${global.host}:3333`,
});

export default api;
