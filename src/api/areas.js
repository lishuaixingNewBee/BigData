import request from '@/utils/request'

export function getAreas(city_id) {
  return request({
    url: '/api/mt/area',
    method: 'get',
    params: {
      city_id
    }
  })
}
