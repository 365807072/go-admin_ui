import request from '@/utils/request'

// 查询服务器详细
export function getServer() {
  return request({
    url: '/api/v1/monitor/server',
    method: 'get'
  })
}
export function getDomain() {
  return request({
    url: '/api/v1/monitor/domain',
    method: 'get'
  })
}
