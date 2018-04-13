const ls = () => {
  return {
    get: _get,
    set: _set,
    remove: _remove
  }

  function _get(key) {
    const value = window.localStorage.getItem(key);
    return value;
  }

  function _set(key, value) {
    window.localStorage.setItem(key, value);
  }

  function _remove(key) {
    localStorage.removeItem(key);
  }
}

export default ls;
