/**
 * 基于 Nuxt useFetch 的通用请求封装
 * - 支持统一 baseURL（默认读取 runtimeConfig.public.apiBase）
 * - 自动附加 Authorization（从 Cookie token 读取）
 * - 提供便捷方法：get/post/put/patch/delete
 * - 支持请求/响应拦截钩子与取消请求
 */
export const createApi = (opts = {}) => {
  // 读取 Nuxt 运行时配置
  const config = useRuntimeConfig()
  // 优先使用传入 baseURL，其次使用公共配置 apiBase，最后为空字符串
  const baseURL = opts.baseURL ?? config.public?.apiBase ?? ''

  // 组装鉴权头：从 Cookie 中读取 token 并附加到 Authorization
  const getAuthHeader = () => {
    const token = useCookie('token')?.value
    return token ? { Authorization: `Bearer ${token}` } : {}
  }

  /**
   * 核心请求方法
   * @param {string} url 相对或绝对路径
   * @param {object} options useFetch 对应的选项及扩展
   * @returns {object} useFetch 响应对象，额外包含 cancel()
   */
  const request = (url, options = {}) => {
    // 用于取消请求
    const controller = new AbortController()
    // 合并默认鉴权头与外部传入的 headers
    const headers = { ...getAuthHeader(), ...(options.headers || {}) }

    // 调用 Nuxt 内置 useFetch
    const res = useFetch(url, {
      baseURL, // 统一基础地址
      method: options.method || 'GET', // 默认 GET
      params: options.params, // 查询参数
      body: options.body, // 请求体（POST/PUT 等）
      headers, // 请求头
      lazy: options.lazy ?? false, // 懒加载（不立即发起）
      server: options.server ?? true, // 是否在服务端发起
      key: options.key, // 请求去重 key
      dedupe: options.dedupe ?? 'defer', // 去重策略
      retry: options.retry ?? 0, // 失败重试次数
      timeout: options.timeout ?? 30000, // 超时毫秒数
      pick: options.pick, // 从响应中挑选字段
      transform: options.transform, // 响应转换函数
      immediate: options.immediate ?? true, // 是否立即执行
      cache: options.cache, // 缓存配置
      watch: options.watch, // 依赖变更自动重发
      signal: controller.signal, // 取消信号
      // 请求拦截：统一处理 headers 与 JSON 序列化
      onRequest({ options }) {
        options.headers = { ...headers, ...(options.headers || {}) }
        if (options.body && options.method && options.method !== 'GET') {
          const hasContentType = Object.keys(options.headers).some(k => k.toLowerCase() === 'content-type')
          // 非 FormData 且未设置 Content-Type 时，自动按 JSON 发送
          if (!hasContentType && !(options.body instanceof FormData)) {
            options.headers['Content-Type'] = 'application/json'
            options.body = JSON.stringify(options.body)
          }
        }
        if (typeof opts.onRequest === 'function') opts.onRequest({ options })
      },
      // 响应拦截：分发成功与错误回调
      onResponse({ response }) {
        if (typeof opts.onResponse === 'function') opts.onResponse({ response })
        if (response.status >= 400 && typeof opts.onResponseError === 'function') {
          opts.onResponseError({ status: response.status, response })
        }
      },
      // 请求阶段错误（如网络中断）
      onRequestError(error) {
        if (typeof opts.onRequestError === 'function') opts.onRequestError(error)
      },
      // 响应阶段错误（如 5xx/解析异常）
      onResponseError(error) {
        if (typeof opts.onResponseError === 'function') opts.onResponseError(error)
      }
    })

    // 追加取消方法，便于在组件销毁或用户操作时终止请求
    return { ...res, cancel: () => controller.abort() }
  }

  // 便捷方法：语义化调用常见 HTTP 动作
  const get = (url, options) => {
    return request(url, { ...options, method: 'GET' })
  }
  const post = (url, options, body) => request(url, { ...options, method: 'POST', body })
  const put = (url, options, body) => request(url, { ...options, method: 'PUT', body })
  const patch = (url, options, body) => request(url, { ...options, method: 'PATCH', body })
  const del = (url, options) => request(url, { ...options, method: 'DELETE' })

  return { request, get, post, put, patch, del }
}

// 组合式函数入口：保持命名与使用习惯一致
export const useApi = opts => createApi(opts)
