// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui', '@formkit/auto-animate', '@nuxtjs/seo', 'motion-v/nuxt'],

  devtools: {
    enabled: true
  },

  devServer: {
    port: 8888,
    host: '0.0.0.0' //允外部访问
  },

  runtimeConfig: {
    // 仅服务端可用的私有键
    name: 'yangliu',
    // 客户端和服务端都可用的公共键
    public: {
      apiBase: 'https://fc-mp-a1d8d854-b0e9-4592-8f2f-0afb0cc5e817.next.bspapp.com/http/router/client'
    }
  },
  //
  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },
  nitro: {
    preset: 'vercel',
    prerender: {
      failOnError: false
    },
    experimental: {
      wasm: true
    },
    typescript: {
      tsConfig: {
        compilerOptions: {
          experimentalDecorators: true,
          emitDecoratorMetadata: true
        }
      }
    }
  },
  compatibilityDate: '2025-01-15',

  plugins: [{ src: '~/plugins/vue-masonry-wall.js' }, { src: '~/plugins/viewer.js' }],

  ui: {
    fonts: false, // 禁用默认字体加载，使用自定义字体
    mdc: true, // 启用 Markdown 组件支持
    content: true, // 启用内容模块
    experimental: {
      componentDetection: true // 开启实验性组件自动检测
    }
  },
  app: {
    head: {
      title: 'My Nuxt App',
      htmlAttrs: {
        lang: 'en'
      }
    }
  }
})
