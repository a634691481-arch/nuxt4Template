<template>
  <div
    class="to-neutral-100 dark:from-neutral-950 dark:to-neutral-900 grid place-items-center p-6 h-screen bg-gradient-to-b from-white"
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
      <div class="flex justify-between items-center">
        <div class="flex gap-2 items-center">
          <div>
            <div class="text-lg font-semibold">上传图片</div>
            <div class="text-neutral-500 dark:text-neutral-400 text-xs">
              支持拖拽或点击选择，多张预览
            </div>
          </div>
        </div>
        <div class="flex gap-2 items-center">
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
          class="group border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/50 hover:border-primary hover:bg-white/90 dark:hover:bg-neutral-900 p-8 text-center rounded-2xl border-2 border-dashed backdrop-blur cursor-pointer"
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
          <div class="flex flex-col gap-2 items-center">
            <UIcon
              name="i-heroicons-photo-20-solid"
              class="size-8 text-neutral-600 dark:text-neutral-300"
            />
            <div class="text-sm">拖拽图片到此或点击选择</div>
            <div class="text-neutral-500 dark:text-neutral-400 text-xs">
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
            class="sm:grid-cols-3 md:grid-cols-4 grid grid-cols-2 gap-3"
            v-viewer="viewerOptions"
          >
            <div
              v-for="it in items"
              :key="it.id"
              class="border-neutral-200 dark:border-neutral-800 overflow-hidden relative rounded-xl border"
            >
              <img :src="it.url" alt="" class="object-cover w-full h-40" />
              <div
                class="from-black/70 absolute inset-x-0 bottom-0 p-2 text-xs text-white bg-gradient-to-t to-transparent"
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
// 接口请求

const fileInput = ref(); // 文件选择 input 元素
const items = ref([]); // 已选图片列表
const uploading = ref(false); // 是否正在上传
const progress = ref(0); // 上传进度

// 打开系统文件选择器，触发隐藏的 input
function pickFiles() {
  fileInput.value?.click();
}
// 处理 input[file] 选择事件：加入文件并重置 input 值
function onSelectFiles(e) {
  const files = Array.from(e.target.files || []);

  addFiles(files);
  e.target.value = null;
}
// 处理拖拽上传事件：加入拖拽的文件
function onDrop(e) {
  const files = Array.from(e.dataTransfer?.files || []);
  addFiles(files);
}
// 将传入文件中过滤图片，生成预览数据并追加
function addFiles(files) {
  const imgs = files
    .filter((f) => f.type.startsWith("image/"))
    .map((f) => {
      return {
        id: Math.random().toString(36).slice(2),
        file: f,
        url: URL.createObjectURL(f),
        name: f.name,
        size: f.size,
      };
    });
  items.value = [...items.value, ...imgs];
}
// 撤销预览并从列表移除指定图片
function removeFile(id) {
  const idx = items.value.findIndex((i) => i.id === id);
  if (idx > -1) {
    URL.revokeObjectURL(items.value[idx].url);
    items.value.splice(idx, 1);
  }
}
// 撤销所有预览 URL 并清空已选列表
function clearFiles() {
  items.value.forEach((i) => URL.revokeObjectURL(i.url));
  items.value = [];
}
// 模拟上传进度，完成后提示并清空列表
async function simulateUpload() {
  uploading.value = true;
  progress.value = 0;

  // const t = setInterval(() => {
  //   progress.value = Math.min(100, progress.value + 5);
  //   if (progress.value >= 100) {
  //     clearInterval(t);
  //     uploading.value = false;
  //     useToast().add({
  //       title: "上传完成",
  //       description: `共 ${items.value.length} 张图片`,
  //       color: "success",
  //     });
  //     clearFiles();
  //   }
  // }, 100);
  // 接口请求
  // console.log("items==> ", items);
  const formData = new FormData();
  console.log("res==> ", items.value[0]);
  formData.append("images", items.value[0].url);
  console.log("🚀 ~ simulateUpload ~ formData:", formData);

  // 接口请求
  let { data } = await useApi().get("/pub.index.uploadImage", {
    params: {
      fileContent: formData,
    },
  });
  console.log("data==> ", data);
}

// 图片查看器配置
const viewerOptions = {
  toolbar: true,
  navbar: true,
  movable: true,
  zoomable: true,
};

// 组件卸载前，撤销所有对象 URL，避免内存泄露
onBeforeUnmount(() => {
  items.value.forEach((i) => URL.revokeObjectURL(i.url));
});

// 返回首页
function goHome() {
  navigateTo("/");
}
// 清空已选图片（调用 clearFiles）
function clearItems() {
  clearFiles();
}
</script>

<style lang="scss" scoped></style>
