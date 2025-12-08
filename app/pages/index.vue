<template>
  <div class="p-1" v-viewer="viewerOptions">
    <MasonryWall :items="items" :column-width="280" :gap="5" :ssr-columns="1">
      <template #default="x">
        <div v-if="x.index == 0" class="absolute inset-0 z-40 bg-gray-700">
          <UserInforMation :user="user"></UserInforMation>
        </div>
        <motion.div
          :initial="{ opacity: 0, y: 500 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{
            delay: x.index ? x.index * 0.1 : 0,
            duration: x.index ? 0.5 : 0,
          }"
          class="overflow-hidden"
          :whileInView="{ opacity: 1, y: 0 }"
          :exit="{ opacity: 0, y: 500 }"
        >
          <div
            :class="[`aspect-[${x?.item?.ratio}]`]"
            class="group bg-neutral-100 overflow-hidden relative w-full"
            :style="{ aspectRatio: x?.item?.ratio }"
          >
            <img
              :src="x?.item?.src"
              alt="图片"
              class="group-hover:scale-105 object-cover z-0 w-full h-full transition-transform duration-300 cursor-pointer"
              loading="lazy"
            />
            <div
              class="bg-img group-hover:opacity-100 absolute inset-0 z-10 opacity-0 transition-opacity duration-300 pointer-events-none"
            ></div>
            <div
              class="group-hover:opacity-100 group-hover:translate-y-0 absolute inset-x-0 bottom-0 z-20 p-3 text-white opacity-0 transition-all duration-300 translate-y-2"
            >
              <div class="text-sm font-semibold">{{ x?.item?.name }}</div>
              <div class="text-xs">{{ x?.item?.date }}</div>
            </div>
          </div>
        </motion.div>
      </template>
    </MasonryWall>
  </div>
</template>

<script setup>
import { motion, scale } from "motion-v";

const toast = useToast();

const ratios = ["1/1", "4/3", "3/4", "16/9", "9/16", "3/2", "2/3"];
function genItems(count = 40) {
  return Array.from({ length: count }, (_, index) => {
    const ratio =
      index === 0 ? "16/9" : ratios[Math.floor(Math.random() * ratios.length)];
    const id = Math.floor(Math.random() * 1000);
    return {
      id,
      ratio,
      src: `https://picsum.photos/id/${id}/1200/1200`,
      date: new Date().toLocaleDateString(),
      name: `Item ${id}`,
    };
  });
}
const items = ref(genItems());

const user = {
  name: "Yangliu",
  avatar: `https://i.pravatar.cc/64?u=${Math.floor(Math.random() * 10000)}`,
};

const viewerOptions = {
  toolbar: true,
  navbar: true,
  title: false,
  movable: true,
  zoomable: true,
  rotatable: true,
  transition: true,
};
</script>

<style lang="scss" scoped>
.bg-img {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.3)
  );
}
.masonry-item {
  position: relative !important;
}
::v-deep(.masonry-item) {
  position: relative !important;
}
</style>
