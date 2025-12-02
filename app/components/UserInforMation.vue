<template>
  <div
    class="flex flex-col justify-evenly items-center size-full bg-white dark:bg-neutral-900/75 border border-white/40 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200"
  >
    <div class="size-16">
      <UAvatar :src="props.user.avatar" :name="props.user.name" size="20" />
    </div>

    <div
      class="text-sm font-semibold text-center text-neutral-900 dark:text-neutral-100"
    >
      {{ props.user.name }}
    </div>
    <div class="text-xs text-neutral-600 dark:text-neutral-400 text-center">
      共 9999 张照片
    </div>
    <div class="flex items-center gap-1 text-neutral-700 dark:text-neutral-200">
      <UTooltip text="筛选">
        <UDropdownMenu
          v-model:open="dropdownOpen"
          :items="filterItems"
          :ui="{
            content: 'w-50',
          }"
          :content="{
            align: 'start',
            side: 'bottom',
            sideOffset: 8,
          }"
        >
          <UButton
            color="neutral"
            variant="ghost"
            icon="i-heroicons-funnel-20-solid"
          />
        </UDropdownMenu>
      </UTooltip>

      <UTooltip text="刷新">
        <UButton
          color="neutral"
          variant="ghost"
          icon="i-heroicons-arrow-path-20-solid"
          @click="refreshItems"
        />
      </UTooltip>
      <!-- <UTooltip text="搜索">
        <UButton
          color="neutral"
          variant="ghost"
          icon="i-heroicons-magnifying-glass-20-solid"
        />
      </UTooltip> -->
      <UTooltip text="明暗切换">
        <UButton
          color="neutral"
          variant="ghost"
          :icon="
            isDark ? 'i-heroicons-sun-20-solid' : 'i-heroicons-moon-20-solid'
          "
          @click="toggleTheme"
        />
      </UTooltip>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const emit = defineEmits(["changeFilter", "resetFilter"]);
const props = defineProps({
  user: {
    type: Object,
    default: {},
  },
});
onMounted(() => {
  const saved = localStorage.getItem("theme");
  const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(saved ? saved : prefers ? "dark" : "light");
});

const isDark = ref(false);
function applyTheme(mode) {
  isDark.value = mode === "dark";
  const el = document.documentElement;
  if (isDark.value) el.classList.add("dark");
  else el.classList.remove("dark");
  localStorage.setItem("theme", isDark.value ? "dark" : "light");
}
function toggleTheme() {
  applyTheme(isDark.value ? "light" : "dark");
}

const dropdownOpen = ref(false);
const filterItems = ref([
  [
    {
      label: "排序方式",
      icon: "i-heroicons-arrows-up-down-20-solid",
      type: "label",
    },
  ],
  [
    {
      label: "日期(最新的在前)",
      icon: "i-heroicons-calendar-days-20-solid",
      onSelect: () => {
        console.log("日期(最新的在前)");
      },
    },
    {
      label: "日期(最旧的在前)",
      icon: "i-heroicons-calendar-days-20-solid",
      onSelect: () => {
        console.log("日期(最旧的在前)");
      },
    },
    {
      label: "文件大小(升序)",
      icon: "i-heroicons-bars-arrow-up-20-solid",
      onSelect: () => {
        console.log("文件大小(升序)");
      },
    },
    {
      label: "文件大小(降序)",
      icon: "i-heroicons-bars-arrow-down-20-solid",
      onSelect: () => {
        console.log("文件大小(降序)");
      },
    },
  ],
  [
    {
      label: "重置",
      icon: "i-heroicons-arrow-path-20-solid",
    },
  ],
]);
function refreshItems() {}
</script>

<style lang="scss" scoped></style>
