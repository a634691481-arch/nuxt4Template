<template>
  <UContainer>
    <UButton icon="i-heroicons-check">提交</UButton>
    <UButton icon="i-heroicons-trash">删除</UButton>
    <UModal>
      <UButton label="Open" color="neutral" variant="subtle" />

      <template #content>
        <Placeholder class="h-48 m-4" />
      </template>
    </UModal>
    <UButton
      label="Show toast"
      color="neutral"
      variant="outline"
      @click="showToast"
    />
    <span class="text-primary">Primary</span>
    <span class="text-secondary">Secondary</span>
    <span class="text-success">Success</span>
    <span class="text-info">Info</span>
    <span class="text-warning">Warning</span>
    <span class="text-error">Error</span>
  </UContainer>
  <UButton color="primary">Save Changes</UButton>
  <UButton color="secondary">Save Changes</UButton>
  <UButton color="error">Save Changes</UButton>
  <!-- 开始 -->
  <div class="my-6">
    <UButton
      label="刷新瀑布流"
      color="primary"
      variant="solid"
      @click="refreshItems"
    />
  </div>
  <!-- 预载入所有可能的 aspect-[] 类，确保构建时可用 -->
  <!-- <div
    class="hidden aspect-[1/1] aspect-[4/3] aspect-[3/4] aspect-[16/9] aspect-[9/16] aspect-[3/2] aspect-[2/3]"
  ></div> -->
  <MasonryWall :items="items" :ssr-columns="1" :column-width="220" :gap="12">
    <template #default="{ item }">
      <div
        :class="[
          'w-full',
          'rounded-lg',
          'overflow-hidden',
          'bg-neutral-100',
          'border',
          'border-neutral-200',
          `aspect-[${item.ratio}]`,
        ]"
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
    return { id, ratio, src: `https://picsum.photos/id/${id}/1200/1200` };
  });
}

const items = ref(genItems());
function refreshItems() {
  items.value = genItems();
}
</script>

<style lang="scss" scoped></style>
