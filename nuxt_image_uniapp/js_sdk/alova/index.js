import { createAlova } from 'alova'
import AdapterUniapp from '@alova/adapter-uniapp'

const { adapter } = AdapterUniapp()

const alova = createAlova({
  baseURL: '',
  ...adapter,
  beforeRequest: ({ headers }) => {
    const vk = typeof uni !== 'undefined' ? uni.vk : undefined
    const token = vk && typeof vk.getToken === 'function' ? vk.getToken() : undefined
    if (token) headers['uni-id-token'] = token
  },
  responded: ({ response }) => {
    return response
  }
})

export default alova

