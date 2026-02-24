const TOKEN_KEY = 'uni_id_token'

const install = () => {
  uni.$u.http.interceptor.request = config => {
    const token = uni.vk.getStorageSync(TOKEN_KEY)
    if (token) config.header['token'] = token
    config.header['x-timestamp'] = Date.now()
    config.header['x-client-platform'] = uni.getSystemInfoSync().platform

    return config
  }
  uni.$u.http.interceptor.response = (res, header) => {
    const CODE_HANDLERS = {
      // 业务失败
      0: () => {
        vk.hideLoading()
        vk.alert(res.msg || '操作失败')
        return res
      },
      // 业务成功
      1: () => {
        return res
      },
      // 未登录或登录过期
      401: () => {
        vk.hideLoading()
        vk.alert('登录已过期,请重新登录', () => {
          vk.reLaunch('/pages/login/index')
        })
        return Promise.reject(res)
      },
      // 无权限
      403: () => {
        vk.hideLoading()
        vk.alert(res.msg || '暂无权限访问')
        return Promise.reject(res)
      },
      // 服务器错误
      500: () => {
        vk.hideLoading()
        vk.alert(res.msg || '服务器错误,请稍后重试')
        return Promise.reject(res)
      }
    }

    const handler = CODE_HANDLERS[res.code]
    if (handler) {
      return handler()
    }

    console.warn(`未处理的响应码: ${res.code}`, res)
    return res
  }
}
export default install
