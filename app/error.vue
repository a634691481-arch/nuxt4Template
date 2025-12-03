<template>
  <UError
    :error="{
      statusCode: 404,
      statusMessage: '页面未找到',
      message: '你访问的页面不存在或已被移除',
    }"
    :clear="{
      color: 'neutral',
      size: 'lg',
      icon: 'i-lucide-arrow-left',
      class: 'rounded-full',
      label: '返回首页',
    }"
    redirect="/"
  />
</template>

<script></script>

<style lang="scss" scoped></style>
