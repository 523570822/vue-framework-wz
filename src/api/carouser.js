import fetch from 'utils/fetch';

export function getCarouser(email, password) {
  const data = {
  };
  return fetch({
    url: '/api/getCarouser',
    method: 'post',
    data
  });
}
export function getUser(password) {
  const data = {
  };
  return fetch({
    url: '/user/getUser',
    method: 'post',
    data
  });
}

export function logout() {
  return fetch({
    url: '/login/logout',
    method: 'post'
  });
}

export function getInfo(token) {
  return fetch({
    url: '/user/info',
    method: 'get',
    params: { token }
  });
}