<script setup>
import { useMotionValue } from "motion-v";

const x = useMotionValue(0);
let timeout;

onMounted(() => {
  // Won't trigger a re-render!
  timeout = setTimeout(() => x.set(100), 1000);
});
</script>

<template>
  <div class="">
    <motion.div :style="{ x }" />
    8888888888888
  </div>
</template>
