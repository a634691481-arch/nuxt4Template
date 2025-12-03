<template>
  <div
    class="h-screen p-6 grid place-items-center bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-900"
  >
    <div class="fixed top-4 left-4 z-50">
      <UButton
        color="neutral"
        variant="ghost"
        icon="i-heroicons-arrow-left-20-solid"
        @click="goHome"
      >
        返回首页
      </UButton>
    </div>

    <UCard class="w-full max-w-3xl">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div>
            <div class="text-lg font-semibold">上传图片</div>
            <div class="text-xs text-neutral-500 dark:text-neutral-400">
              支持拖拽或点击选择，多张预览
            </div>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <!-- -->
          <UButton
            color="neutral"
            variant="ghost"
            icon="i-heroicons-trash-20-solid"
            :disabled="items.length === 0"
            @click="clearFiles"
          />

          <UButton
            color="primary"
            icon="i-heroicons-cloud-arrow-up-20-solid"
            :loading="uploading"
            :disabled="items.length === 0"
            @click="simulateUpload"
            >上传
          </UButton>
        </div>
      </div>

      <div class="mt-4">
        <div
          class="group rounded-2xl border-2 border-dashed border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/50 backdrop-blur p-8 text-center cursor-pointer hover:border-primary hover:bg-white/90 dark:hover:bg-neutral-900"
          @dragover.prevent
          @drop.prevent="onDrop"
          @click="pickFiles"
        >
          <input
            ref="fileInput"
            type="file"
            class="hidden"
            multiple
            accept="image/*"
            @change="onSelectFiles"
          />
          <div class="flex flex-col items-center gap-2">
            <UIcon
              name="i-heroicons-photo-20-solid"
              class="size-8 text-neutral-600 dark:text-neutral-300"
            />
            <div class="text-sm">拖拽图片到此或点击选择</div>
            <div class="text-xs text-neutral-500 dark:text-neutral-400">
              已选择 {{ items.length }} 张
            </div>
          </div>
        </div>
      </div>

      <div v-if="uploading" class="mt-4">
        <UProgress :value="progress" />
      </div>

      <div v-if="items.length" class="mt-6">
        <div class="max-h-[60vh] overflow-y-auto custom-scrollbar pr-1">
          <div
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
            v-viewer="viewerOptions"
          >
            <div
              v-for="it in items"
              :key="it.id"
              class="relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800"
            >
              <img :src="it.url" alt="" class="w-full h-40 object-cover" />
              <div
                class="absolute inset-x-0 bottom-0 p-2 text-white text-xs bg-gradient-to-t from-black/70 to-transparent"
              >
                <div class="truncate">{{ it.name }}</div>
              </div>
              <div class="absolute top-2 right-2">
                <UButton
                  size="xs"
                  color="neutral"
                  variant="soft"
                  icon="i-heroicons-x-mark-20-solid"
                  @click="removeFile(it.id)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </UCard>
  </div>
</template>

<script setup>
const fileInput = ref();
const items = ref([]);
const uploading = ref(false);
const progress = ref(0);

function pickFiles() {
  fileInput.value?.click();
}
function onSelectFiles(e) {
  const files = Array.from(e.target.files || []);
  addFiles(files);
  e.target.value = null;
}
function onDrop(e) {
  const files = Array.from(e.dataTransfer?.files || []);
  addFiles(files);
}
function addFiles(files) {
  const imgs = files
    .filter((f) => f.type.startsWith("image/"))
    .map((f) => ({
      id: Math.random().toString(36).slice(2),
      file: f,
      url: URL.createObjectURL(f),
      name: f.name,
      size: f.size,
    }));
  items.value = [...items.value, ...imgs];
}
function removeFile(id) {
  const idx = items.value.findIndex((i) => i.id === id);
  if (idx > -1) {
    URL.revokeObjectURL(items.value[idx].url);
    items.value.splice(idx, 1);
  }
}
function clearFiles() {
  items.value.forEach((i) => URL.revokeObjectURL(i.url));
  items.value = [];
}
function simulateUpload() {
  uploading.value = true;
  progress.value = 0;
  const t = setInterval(() => {
    progress.value = Math.min(100, progress.value + 5);
    if (progress.value >= 100) {
      clearInterval(t);
      uploading.value = false;
      useToast().add({
        title: "上传完成",
        description: `共 ${items.value.length} 张图片`,
        color: "success",
      });
      clearFiles();
    }
  }, 100);
}

const viewerOptions = {
  toolbar: true,
  navbar: true,
  movable: true,
  zoomable: true,
};

onBeforeUnmount(() => {
  items.value.forEach((i) => URL.revokeObjectURL(i.url));
});

function goHome() {
  navigateTo("/");
}
function clearItems() {
  clearFiles();
}
</script>

<style lang="scss" scoped></style>
