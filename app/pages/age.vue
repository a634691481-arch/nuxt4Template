<template>
  <div class="p-4 space-y-4">
    <div class="flex gap-2 items-center">
      <!-- <UButton @click="pickFiles">选择图片</UButton> -->
      <UButton color="primary" @click="upload">上传333 </UButton>
      <div class="text-neutral-500 text-xs">已选择 {{ files.length }} 张</div>
    </div>
    <UFileUpload v-model="valfilessue" class="min-h-48 w-96" multiple />
  </div>
</template>

<script setup>
const fileInput = ref();
const files = ref([]);
const uploading = ref(false);
const valfilessue = ref([]);

function pickFiles() {
  fileInput.value?.click();
}

function onSelectFiles(e) {
  console.log("🚀 ~ :23 ~ onSelectFiles ~ e:", e);
  files.value = Array.from(e.target.files || []);
  e.target.value = null;
}

async function upload() {
  console.log("valfilessue.value==> ", valfilessue.value);
  uploading.value = true;
  const form = new FormData();
  valfilessue.value.forEach((f) => {
    const file = f?.file || f;
    if (file) form.append("fileContent", file, file.name);
  });
  try {
    const res = await $fetch(
      "https://fc-mp-4b52669b-325d-4090-9588-abf3b7afcb11.next.bspapp.com/http/router/client/pub.index.uploadImage",
      { method: "POST", body: form }
    );
    uploading.value = false;
    useToast().add({
      title: "上传成功",
      description: `共 ${valfilessue.value.length} 张`,
      color: "success",
    });
    valfilessue.value = [];
    console.log("upload result", res);
  } catch (err) {
    uploading.value = false;
    useToast().add({ title: "上传失败", color: "error" });
    console.error(err);

    //
  }
}
</script>

<style lang="scss" scoped></style>
