<template>
  <!-- <div class="my-6">
    <UButton
      label="刷新瀑布流"
      color="primary"
      variant="solid"
      @click="refreshItems"
    />
  </div> -->
  <div class="p-2">
    <MasonryWall :items="items" :ssr-columns="1" :column-width="220" :gap="5">
      <template #default="{ item }">
        <div
          class="group relative w-full h-full overflow-hidden bg-neutral-100 border border-neutral-200"
        >
          <img
            :src="item.src"
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
            <div class="text-xs">{{ formatDate(item.date) }}</div>
          </div>
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

function genItems(count = 24) {
  return Array.from({ length: count }, () => {
    const id = Math.floor(Math.random() * 1000);
    const date = new Date(
      Date.now() - Math.floor(Math.random() * 30 * 24 * 60 * 60 * 1000)
    ).toISOString();
    return {
      id,
      src: `https://picsum.photos/id/${id}/1200/1200`,
      name: `item-${id}`,
      date,
    };
  });
}

function formatDate(input) {
  const d = new Date(input);
  if (Number.isNaN(d.getTime())) return String(input ?? "");
  return d.toLocaleString();
}

const items = ref(genItems());
function refreshItems() {
  items.value = genItems();
}
</script>

<style lang="scss" scoped>
// .bg-img {
//   //bg-gradient-to-t from-black/70 via-black/30 to-transparent
//   background: linear-gradient(
//     to top,
//     rgba(0, 0, 0, 0.7),
//     rgba(0, 0, 0, 0.3),
//     transparent
//   );
// }
</style>
