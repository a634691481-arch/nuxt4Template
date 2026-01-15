<template>
  <div class="p-8 max-w-4xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">Prisma + MySQL Demo</h1>

    <!-- Create User Form -->
    <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
      <h2 class="text-xl font-semibold mb-4">Create New User</h2>
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium mb-1">Name</label>
          <UInput v-model="newUser.name" placeholder="John Doe" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Email</label>
          <UInput v-model="newUser.email" placeholder="john@example.com" />
        </div>
        <UButton :loading="loading" @click="createUser" color="primary"
          >Create User</UButton
        >
      </div>
    </div>

    <!-- User List -->
    <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold">User List</h2>
        <UButton
          icon="i-heroicons-arrow-path"
          variant="ghost"
          @click="fetchUsers"
        />
      </div>

      <div v-if="users.length === 0" class="text-center py-8 text-gray-500">
        No users found.
      </div>

      <div v-else class="space-y-4">
        <div
          v-for="user in users"
          :key="user.id"
          class="border border-gray-200 dark:border-gray-700 p-4 rounded-lg"
        >
          <div class="flex justify-between items-start">
            <div>
              <p class="font-bold text-lg">{{ user.name }}</p>
              <p class="text-sm text-gray-500">{{ user.email }}</p>
            </div>
            <span class="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded"
              >ID: {{ user.id }}</span
            >
          </div>
          <div v-if="user.posts && user.posts.length > 0" class="mt-3">
            <p class="text-xs font-semibold uppercase text-gray-400 mb-2">
              Posts
            </p>
            <ul class="list-disc list-inside text-sm">
              <li v-for="post in user.posts" :key="post.id">
                {{ post.title }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const users = ref([]);
const loading = ref(false);
const newUser = ref({
  name: "",
  email: "",
});

const fetchUsers = async () => {
  try {
    const response = await $fetch("/api/users");
    if (response.success) {
      users.value = response.data;
    }
  } catch (error) {
    console.error("Failed to fetch users:", error);
  }
};

const createUser = async () => {
  if (!newUser.value.email) return;

  loading.value = true;
  try {
    const response = await $fetch("/api/users", {
      method: "POST",
      body: newUser.value,
    });

    if (response.success) {
      newUser.value = { name: "", email: "" };
      await fetchUsers();
    } else {
      alert("Error: " + response.error);
    }
  } catch (error) {
    console.error("Failed to create user:", error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchUsers();
});
</script>
