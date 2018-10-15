import request from '@/utils/request'
import param from '@/utils/param'

export function getList(search, data) {
  return request({
    url: '/api/mt/shop?' + param(search),
    method: 'post',
    data
  })
}

