import lService from '../services/lsService';
const ls = lService();
import * as appConfigs from '../consts/appConfig';

const fetchConfig = (method, load) => {
  const url = 'http://localhost:9001'
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  //some new text added want to add more, need more testing
  headers.append('Accept', 'application/json');
  headers.append('Access-Control-Allow-Origin', url);
  const authToken = ls.get(appConfigs.TOKEN_NAME);
  if (authToken) {
    headers.append(appConfigs.TOKEN_NAME, authToken);
  }

  const config = {
    method: method,
    credentials: 'include',
    headers: headers
  };
  if (method === 'post') {
    const payload = JSON.stringify(load);
    config.body = payload;
  }

  return Object.assign({}, config);
};

export default fetchConfig;
