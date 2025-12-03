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
      <!-- 上传图片 -->
      <UTooltip text="上传图片">
        <UButton
          color="primary"
          variant="soft"
          icon="i-heroicons-cloud-arrow-up-20-solid"
          @click="uploadImage"
        />
      </UTooltip>

      <!--  主题颜色-->
      <UTooltip text="主题色">
        <UDropdownMenu
          v-model:open="themeOpen"
          :items="themeItems"
          :ui="{ content: 'w-44' }"
          :content="{ align: 'center', side: 'bottom' }"
        >
          <UButton
            color="primary"
            variant="soft"
            icon="i-heroicons-swatch-20-solid"
          />
        </UDropdownMenu>
      </UTooltip>
      <!-- 筛选 -->
      <UTooltip text="筛选">
        <UDropdownMenu
          v-model:open="dropdownOpen"
          :items="filterItems"
          :ui="{
            content: 'w-50',
          }"
          :content="{
            align: 'center',
            side: 'bottom',
          }"
        >
          <UButton
            color="primary"
            variant="soft"
            icon="i-heroicons-funnel-20-solid"
          />
        </UDropdownMenu>
      </UTooltip>
      <!-- 刷新 -->
      <UTooltip text="刷新">
        <UButton
          color="primary"
          variant="soft"
          icon="i-heroicons-arrow-path-20-solid"
          @click="refreshItems"
        />
      </UTooltip>
      <!-- 明暗切换 -->
      <UTooltip text="明暗切换">
        <UButton
          color="primary"
          variant="soft"
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
        e.preventDefault();
        dropdownOpen.value = true;
      },
    },
    {
      label: "日期(最旧的在前)",
      icon: "i-heroicons-calendar-days-20-solid",
      onSelect: () => {
        console.log("日期(最旧的在前)");
        e.preventDefault();
        dropdownOpen.value = true;
      },
    },
    {
      label: "文件大小(升序)",
      icon: "i-heroicons-bars-arrow-up-20-solid",
      onSelect: () => {
        console.log("文件大小(升序)");
        e.preventDefault();
        dropdownOpen.value = true;
      },
    },
    {
      label: "文件大小(降序)",
      icon: "i-heroicons-bars-arrow-down-20-solid",
      onSelect: () => {
        console.log("文件大小(降序)");
        e.preventDefault();
        dropdownOpen.value = true;
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
function uploadImage() {
  navigateTo("/upload");
}

const themeOpen = ref(false);
function setThemeColor(name) {
  const palettes = {
    green: { p400: "#00dc82", p500: "#00c16a", p600: "#00a155" },
    blue: { p400: "#60a5fa", p500: "#3b82f6", p600: "#2563eb" },
    amber: { p400: "#fbbf24", p500: "#f59e0b", p600: "#d97706" },
    rose: { p400: "#fb7185", p500: "#f43f5e", p600: "#e11d48" },
    violet: { p400: "#a78bfa", p500: "#8b5cf6", p600: "#7c3aed" },
  };
  const p = palettes[name] || palettes.green;
  const el = document.documentElement;
  el.style.setProperty("--color-primary-400", p.p400);
  el.style.setProperty("--color-primary-500", p.p500);
  el.style.setProperty("--color-primary-600", p.p600);
  localStorage.setItem("themeColor", name);
}
onMounted(() => {
  const savedColor = localStorage.getItem("themeColor");
  if (savedColor) setThemeColor(savedColor);
});

const themeItems = ref([
  [{ label: "选择主题色", type: "label", icon: "i-heroicons-swatch-20-solid" }],
  [
    {
      label: "绿色",
      icon: "i-heroicons-sparkles-20-solid",
      onSelect: (e) => {
        e.preventDefault();
        themeOpen.value = true;
        setThemeColor("green");
      },
    },
    {
      label: "蓝色",
      icon: "i-heroicons-sparkles-20-solid",
      onSelect: (e) => {
        e.preventDefault();
        themeOpen.value = true;
        setThemeColor("blue");
      },
    },
    {
      label: "琥珀",
      icon: "i-heroicons-sparkles-20-solid",
      onSelect: (e) => {
        e.preventDefault();
        themeOpen.value = true;
        setThemeColor("amber");
      },
    },
    {
      label: "玫瑰",
      icon: "i-heroicons-sparkles-20-solid",
      onSelect: (e) => {
        e.preventDefault();
        themeOpen.value = true;
        setThemeColor("rose");
      },
    },
    {
      label: "紫罗兰",
      icon: "i-heroicons-sparkles-20-solid",
      onSelect: (e) => {
        e.preventDefault();
        themeOpen.value = true;
        setThemeColor("violet");
      },
    },
  ],
]);
</script>

<style lang="scss" scoped></style>
