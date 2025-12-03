<template>
  <AnimatePresence :initial="false">
    <motion.div
      v-if="visible"
      class="fixed bottom-6 right-6 z-50 cursor-pointer"
      :initial="{ opacity: 0, scale: 0 }"
      :animate="{ opacity: 1, scale: 1, rotate: 360 }"
      :exit="{ opacity: 0, scale: 0, rotate: 360 }"
      :transition="{ duration: 1 }"
      :whileHover="{ scale: 1.1 }"
      :whilePress="{ scale: 0.9 }"
    >
      <UButton
        size="lg"
        color="primary"
        icon="i-heroicons-arrow-up"
        @click="toTop"
      />
    </motion.div>
  </AnimatePresence>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const visible = ref<boolean>(false);

function onScroll(): void {
  const y: number = window.scrollY || document.documentElement.scrollTop || 0;
  visible.value = y > 300;
}

function toTop(): void {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<style scoped></style>
