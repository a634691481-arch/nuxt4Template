<template>
  <div class="p-4 space-y-6">
    <h1 class="text-xl font-bold">API 使用示例</h1>

    <section class="space-y-2">
      <h2 class="font-medium">用户信息（SSR）</h2>
      <div v-if="profilePending">加载中...</div>
      <div v-else-if="profileError">加载失败</div>
      <pre v-else class="bg-neutral-100 p-3 rounded">{{ profileData }}</pre>
      <UButton size="sm" color="neutral" variant="ghost" @click="refreshProfile">刷新</UButton>
    </section>

    <section class="space-y-2">
      <h2 class="font-medium">登录（仅客户端）</h2>
      <div class="flex gap-2 items-center">
        <UInput v-model="username" placeholder="用户名" class="w-48" />
        <UInput v-model="password" type="password" placeholder="密码" class="w-48" />
        <UButton @click="doLogin">登录</UButton>
      </div>
      <div v-if="loginError" class="text-red-600">登录失败</div>
      <div v-if="loginData">登录成功</div>
    </section>

    <section class="space-y-2">
      <h2 class="font-medium">图片列表（lazy + 刷新/取消）</h2>
      <div class="flex gap-2 items-center">
        <UButton @click="loadImages">加载</UButton>
        <UButton color="neutral" variant="ghost" @click="cancelImages">取消</UButton>
      </div>
      <div v-if="imagesPending">加载中...</div>
      <div v-else-if="imagesError">加载失败</div>
      <ul v-else class="pl-5 list-disc">
        <li v-for="img in imagesData" :key="img.id">{{ img.name }}</li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import api from "~/apis/api";

const {
  data: profileData,
  pending: profilePending,
  error: profileError,
  refresh: refreshProfile,
} = api.user.profile();

const username = ref("");
const password = ref("");
let loginError = ref(null);
let loginData = ref(null);
const doLogin = async () => {
  const { data, error } = await api.auth.login(
    { username: username.value, password: password.value },
    { server: false }
  );
  loginError.value = error.value;
  loginData.value = data.value;
};

const imagesReq = api.images.list({ page: 1 }, { lazy: true, server: false });
const imagesData = imagesReq.data;
const imagesPending = imagesReq.pending;
const imagesError = imagesReq.error;
const loadImages = () => imagesReq.refresh();
const cancelImages = () => imagesReq.cancel();
</script>

<style scoped></style>
