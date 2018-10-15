import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/api/manage/login',
    method: 'post',
    data: {
      account_name: username,
      password
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/api/manage/user_info',
    method: 'get',
    params: {
      token
    }
  })
}

export function logout() {
  return request({
    url: '/api/manage/login_out',
    method: 'post'
  })
}
