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
            class="group bg-neutral-100 relative w-full overflow-hidden"
            :style="{ aspectRatio: x?.item?.ratio }"
          >
            <img
              :src="x?.item?.fileUrl"
              alt="图片"
              class="group-hover:scale-105 z-0 object-cover w-full h-full transition-transform duration-300 cursor-pointer"
              loading="lazy"
            />
            <div
              class="bg-img group-hover:opacity-100 absolute inset-0 z-10 transition-opacity duration-300 opacity-0 pointer-events-none"
            ></div>
            <div
              class="group-hover:opacity-100 group-hover:translate-y-0 absolute inset-x-0 bottom-0 z-20 p-3 text-white transition-all duration-300 translate-y-2 opacity-0"
            >
              <div class="text-sm font-semibold">{{ x?.item?.title }}</div>
              <!-- <div class="text-xs">{{ x?.item?.date }}</div> -->
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
const items = ref([]);

const { data } = await useApi().get("/api/index", {
  server: false,
});

// 打印完整的响应数据
console.log("完整响应 data.value:", data);
console.log("完整响应 data.value:", data.flags);
console.log("完整响应 data.value:", data.value);
// console.log("data.value.data:", data.value?.data);

// 直接赋值
// if (data.value?.data) {
//   items.value = data.value.data;
// } else if (Array.isArray(data.value)) {
//   items.value = data.value;
// } else {
//   items.value = [];
// }

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
