<template>
  <div class="min-h-[60vh] grid place-items-center p-6">
    <div class="w-full max-w-md">
      <motion.div
        :initial="{ opacity: 0, y: 40 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6 }"
        class="rounded-2xl overflow-hidden"
      >
        <UCard>
          <div class="flex items-center gap-4">
            <UAvatar :src="avatar" :name="name" size="lg" />
            <div>
              <div class="text-base font-semibold">{{ name }}</div>
              <div class="text-xs text-neutral-600 dark:text-neutral-400">
                Motion 示例
              </div>
            </div>
          </div>
          <div class="mt-6">
            <motion.button
              :whileHover="{ scale: 1.05 }"
              :whilePress="{ scale: 0.97 }"
            >
              <UButton
                color="primary"
                icon="i-heroicons-play-20-solid"
                @click="pulse"
              >
                触发动画
              </UButton>
            </motion.button>
          </div>
        </UCard>
      </motion.div>

      <motion.div
        :initial="{ opacity: 0, y: 20 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6, delay: 0.15 }"
        class="mt-6"
      >
        <UAlert
          title="滚动进入视图即动画"
          icon="i-heroicons-sparkles-20-solid"
        />
      </motion.div>
    </div>
  </div>
</template>

<script setup>
import { motion } from "motion-v";

const name = "Yangliu";
const avatar = `https://i.pravatar.cc/128?u=${Math.floor(
  Math.random() * 10000
)}`;

function pulse() {}
</script>

<style lang="scss" scoped></style>
