import request from '@/utils/request'

export function getList(params) {
  return request({
    url: 'https://easy-mock.com/mock/5950a2419adc231f356a6636/vue-admin/table/list',
    method: 'get',
    params
  })
}
