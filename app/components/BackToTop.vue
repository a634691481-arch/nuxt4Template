<template>
  <div v-show="visible" class="fixed bottom-6 right-6 z-50">
    <UButton
      size="lg"
      color="primary"
      icon="i-heroicons-arrow-up"
      @click="toTop"
    />
  </div>
</template>

<script setup lang="ts">
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
