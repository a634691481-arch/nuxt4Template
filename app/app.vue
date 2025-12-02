<template>
  <UApp>
    <UMain>
      <!-- <UBanner id="welcome" title="欢迎来到我们的应用！" close /> -->
      <AppLoading v-if="isFirstLoading" />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>
  </UApp>
</template>

<script setup>
import { onNuxtReady } from "#app";
useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: {
    lang: "en",
  },
});

const title = "Nuxt Starter Template";
const description =
  "A production-ready starter template powered by Nuxt UI. Build beautiful, accessible, and performant applications in minutes, not hours.";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: "https://ui.nuxt.com/assets/templates/nuxt/starter-light.png",
  twitterImage: "https://ui.nuxt.com/assets/templates/nuxt/starter-light.png",
  twitterCard: "summary_large_image",
});

// 控制首次加载状态的响应式变量，初始为 true，表示正在加载
const isFirstLoading = ref(true);

// 当 Nuxt 应用准备就绪后执行
onNuxtReady(() => {
  // 在下一帧动画时关闭加载状态，确保页面渲染完成
  requestAnimationFrame(() => {
    isFirstLoading.value = false;
  });
});

// 兜底：3 秒后若仍未关闭加载状态，则强制关闭，防止无限加载
setTimeout(() => {
  if (isFirstLoading.value) {
    isFirstLoading.value = false;
  }
}, 3000);
</script>
