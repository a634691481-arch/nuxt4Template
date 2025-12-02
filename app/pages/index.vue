<template>
  <div class="p-1">
    <!--  -->
    <MasonryWall :items="items" :column-width="280" :gap="5" :ssr-columns="1">
      <template #default="x">
        <div v-if="x.index == 0" class="absolute inset-0 z-40 bg-gray-700">
          <UserInforMation :user="user"></UserInforMation>
        </div>
        <motion.div
          :initial="{ opacity: 0, scale: 0.9, blur: 10 }"
          :animate="{ opacity: 1, scale: 1, blur: 0 }"
          :transition="{ duration: 0.5, delay: x.index * 0.04 }"
        >
          <div
            :class="[`aspect-[${x?.item?.ratio}]`]"
            class="group relative w-full overflow-hidden bg-neutral-100"
            :style="{ aspectRatio: x?.item?.ratio }"
          >
            <img
              :src="x?.item?.src"
              alt=""
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 z-0"
              loading="lazy"
            />
            <div
              class="absolute inset-0 z-10 pointer-events-none bg-img opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
            <div
              class="absolute inset-x-0 bottom-0 z-20 p-3 text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
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
import { motion } from "motion-v";

const toast = useToast();

const ratios = ["1/1", "4/3", "3/4", "16/9", "9/16", "3/2", "2/3"];
function genItems(count = 200) {
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
function refreshItems() {
  items.value = genItems();
}
function handleClick(item) {
  console.log(item);
  //  提示用户点击了图片
  // toast.add({
  //   title: `点击了图片 ${item.name}`,
  //   description: `图片比例为 ${item.ratio}`,
  //   color: "primary",
  // });
  // // 跳转到图片详情页
  // navigateTo(`/image-${item.id}`);
}

const user = {
  name: "Yangliu",
  avatar: `https://i.pravatar.cc/64?u=${Math.floor(Math.random() * 10000)}`,
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
