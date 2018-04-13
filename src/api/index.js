import * as config from '../consts/appConfig';
import configs from './fetchConfigs';

const Api = () => {
  return {
    get: _get,
    post: _post
  }

  function _get(path) {
    const promise = new Promise((resolve, reject) => {
      const serverPath = config.SERVER_URL + path;
      const fetchConfigs = configs('get');
      fetch(serverPath, fetchConfigs).then((response) => {
        return response.json();
      }).then((data) => {
        return resolve(data);
      }).catch((err) => {
        return reject(err);
      });
    });
    return promise;
  }

  function _post(path, payload) {
    const promise = new Promise((resolve, reject) => {
      const serverPath = config.SERVER_URL + path;
      const fetchConfigs = configs('post', payload);
      fetch(serverPath, fetchConfigs).then((response) => {
        return response.json();
      }).then((data) => {
        return resolve(data);
      }).catch((err) => {
        return reject(err);
      });
    });
    return promise;
  }
}

export default Api;