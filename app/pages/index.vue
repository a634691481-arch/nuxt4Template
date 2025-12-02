<template>
  <div class="p-2">
    <!--  -->
    <MasonryWall
      :items="items"
      :column-width="220"
      :gap="6"
      :ssr-columns="1"
      @click="handleClick(item)"
    >
      <template #default="{ item = {} }">
        <div
          :class="[`aspect-[${item.ratio}]`]"
          class="group relative w-full overflow-hidden bg-neutral-100"
          :style="{ aspectRatio: item.ratio }"
        >
          <img
            :src="item.src"
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
            <div class="text-sm font-semibold">{{ item.name }}</div>
            <div class="text-xs">{{ item.date }}</div>
          </div>
        </div>
      </template>
    </MasonryWall>
  </div>
</template>

<script setup>
const toast = useToast();

const ratios = ["1/1", "4/3", "3/4", "16/9", "9/16", "3/2", "2/3"];
function genItems(count = 200) {
  return Array.from({ length: count }, () => {
    const ratio = ratios[Math.floor(Math.random() * ratios.length)];
    const id = Math.floor(Math.random() * 1000);
    // 使用较大的图片，确保裁剪后清晰
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
  toast.add({
    title: `点击了图片 ${item.name}`,
    description: `图片比例为 ${item.ratio}`,
    color: "primary",
  });
  // 跳转到图片详情页
  navigateTo(`/image-${item.id}`);
}
</script>

<!-- <style lang="scss" scoped>
.bg-img {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.3)
  );
}
</style> -->
