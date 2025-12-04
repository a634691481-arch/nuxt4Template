<template>
  <div class="p-4 space-y-4">
    <div class="flex gap-2 items-center">
      <UButton @click="pickFiles">选择图片</UButton>
      <UButton
        color="primary"
        :loading="uploading"
        :disabled="!files.length"
        @click="upload"
        >上传
      </UButton>
      <div class="text-neutral-500 text-xs">已选择 {{ files.length }} 张</div>
    </div>
    <input
      ref="fileInput"
      type="file"
      class="hidden"
      multiple
      accept="image/*"
      @change="onSelectFiles"
    />
  </div>
</template>

<script setup>
const fileInput = ref();
const files = ref([]);
const uploading = ref(false);

function pickFiles() {
  fileInput.value?.click();
}

function onSelectFiles(e) {
  files.value = Array.from(e.target.files || []);
  e.target.value = null;
}

async function upload() {
  uploading.value = true;
  const form = new FormData();
  files.value.forEach((f) => {
    console.log("🚀 ~ :44 ~ upload ~ f:", f.name);
    return form.append("fileContent", f, f.name);
  });
  console.log("form==> ", form);
  const { data, error } = await useFetch(
    "https://fc-mp-4b52669b-325d-4090-9588-abf3b7afcb11.next.bspapp.com/http/router/client/pub.index.getImageList",
    {
      method: "POST",
      body: form,
      params: {
        fileType: "1",
      },
      server: false,
      key: `upload-images`,
      immediate: true,
    }
  );
  if (error.value) {
    uploading.value = false;
    useToast().add({ title: "上传失败", color: "error" });
    return;
  }
  uploading.value = false;
  useToast().add({
    title: "上传成功",
    description: `共 ${files.value.length} 张`,
    color: "success",
  });
  files.value = [];
}
</script>

<style lang="scss" scoped></style>
