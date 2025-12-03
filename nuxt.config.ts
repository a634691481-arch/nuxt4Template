// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@formkit/auto-animate",
    "@nuxtjs/seo",
    "motion-v/nuxt",
  ],

  devtools: {
    enabled: true,
  },
  runtimeConfig: {
    // 仅服务端可用的私有键
    name: "yangliu",
    // 客户端和服务端都可用的公共键
    public: { apiBase: "/api" },
  },
  //
  css: ["~/assets/css/main.css"],

  routeRules: {
    "/": { prerender: true },
  },
  nitro: {
    preset: "vercel",
    prerender: {
      failOnError: false,
    },
  },
  compatibilityDate: "2025-01-15",
  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },
  plugins: [
    { src: "~/plugins/vue-masonry-wall.ts" },
    { src: "~/plugins/viewer.ts" },
  ],

  ui: {
    fonts: false, // 禁用默认字体加载，使用自定义字体
    mdc: true, // 启用 Markdown 组件支持
    content: true, // 启用内容模块
    experimental: {
      componentDetection: true, // 开启实验性组件自动检测
    },
  },
  app: {
    head: {
      title: "My Nuxt App",
      htmlAttrs: {
        lang: "en",
      },
    },
  },
});
