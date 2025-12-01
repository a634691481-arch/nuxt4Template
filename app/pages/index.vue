<template>
  <div class="p-2">
    <MasonryWall :items="items" :ssr-columns="1" :column-width="220" :gap="6">
      <template #default="{ item }">
        <div
          :class="[`aspect-[${item.ratio}]`]"
          class="w-full overflow-hidden bg-neutral-100 border border-neutral-200"
          :style="{ aspectRatio: item.ratio }"
        >
          <img
            :src="item.src"
            alt=""
            class="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </template>
    </MasonryWall>
  </div>
</template>

<script setup>
const toast = useToast();

function showToast() {
  toast.add({
    title: "Success",
    description: "Operation completed successfully",
    icon: "i-heroicons-information-circle",
    color: "primary",
  });
}

const ratios = ["1/1", "4/3", "3/4", "16/9", "9/16", "3/2", "2/3"];
function genItems(count = 24) {
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
</script>

<style lang="scss" scoped></style>
