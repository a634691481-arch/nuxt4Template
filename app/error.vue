<template>
  <UError
    :error="{
      statusCode: 404,
      statusMessage: 'Page not found',
      message: 'The page you are looking for does not exist.',
    }"
    :clear="{
      color: 'neutral',
      size: 'lg',
      icon: 'i-lucide-arrow-left',
      class: 'rounded-full',
    }"
    redirect="/docs/getting-started"
  />
</template>

<script></script>

<style lang="scss" scoped></style>
