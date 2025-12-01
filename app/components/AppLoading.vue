<template>
  <transition name="fade">
    <div
      class="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-neutral-950"
    >
      <div class="flex flex-col items-center gap-4">
        <svg
          class="size-12 animate-spin text-green-500"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-opacity="0.2"
            stroke-width="4"
          />
          <path
            d="M22 12a10 10 0 0 0-10-10"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="round"
          />
        </svg>
        <p class="text-sm text-neutral-600 dark:text-neutral-300">
          正在加载...
        </p>
      </div>
    </div>
  </transition>
  <span class="sr-only">首次加载中</span>
</template>

<script setup lang="ts"></script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
