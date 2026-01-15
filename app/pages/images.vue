<template>
  <div class="container mx-auto p-6">
    <div class="mb-6">
      <UButton color="neutral" variant="ghost" icon="i-heroicons-arrow-left-20-solid" @click="goHome">返回首页</UButton>
    </div>

    <UCard>
      <template #header>
        <h2 class="text-xl font-bold">图片链接管理</h2>
      </template>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
        <UFormField label="页面" name="page" class="w-32">
          <UInput v-model.number="pagination.currentPage" type="number" min="1" />
        </UFormField>

        <UFormField label="每页数量" name="limit" class="w-32">
          <UInput v-model.number="pagination.itemsPerPage" type="number" min="1" max="50" />
        </UFormField>

        <UFormField label="类型" name="type">
          <USelectMenu v-model="filters.type" :options="['', 'jpg', 'png', 'gif', 'jpeg']" placeholder="全部类型" />
        </UFormField>

        <UButton @click="fetchImages" class="self-end">搜索</UButton>
      </div>

      <div class="mb-4 text-sm text-gray-600">
        共找到 {{ pagination.totalItems }} 张图片， 第 {{ (pagination.currentPage - 1) * pagination.itemsPerPage + 1 }}
        -
        {{ Math.min(pagination.currentPage * pagination.itemsPerPage, pagination.totalItems) }} 条
      </div>

      <div v-if="loading" class="flex justify-center py-10">
        <UActivityIndicator size="lg" />
      </div>

      <div v-else-if="images.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div
          v-for="image in images"
          :key="image.id"
          class="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow relative group"
        >
          <div class="aspect-square bg-gray-100 flex items-center justify-center">
            <img :src="image.url" :alt="image.name" class="object-contain w-full h-full" @error="onImageError" />
          </div>
          <div class="p-3">
            <div class="font-medium truncate text-sm">{{ image.name }}</div>
            <div class="text-xs text-gray-500 mt-1">{{ formatFileSize(image.size) }}</div>
            <div class="text-xs text-gray-500">{{ formatDate(image.createdAt) }}</div>
            <div class="mt-2 grid grid-cols-2 gap-1">
              <UButton size="xs" color="primary" variant="ghost" @click="copyLink(image.url)">复制链接</UButton>
              <UButton size="xs" color="error" variant="ghost" @click="deleteImage(image.id)">删除</UButton>
            </div>
          </div>
          <UButton
            icon="i-heroicons-trash-20-solid"
            size="xs"
            color="error"
            variant="solid"
            class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
            @click="deleteImage(image.id)"
          />
        </div>
      </div>

      <div v-else class="text-center py-10 text-gray-500">没有找到图片</div>

      <template #footer>
        <div class="flex justify-between items-center">
          <div>
            <UButton :disabled="pagination.currentPage <= 1" @click="prevPage">上一页</UButton>
          </div>

          <div class="text-sm">第 {{ pagination.currentPage }} 页，共 {{ pagination.totalPages }} 页</div>

          <div>
            <UButton :disabled="pagination.currentPage >= pagination.totalPages" @click="nextPage">下一页</UButton>
          </div>
        </div>
      </template>
    </UCard>
  </div>
</template>

<script setup lang="ts">
  const images = ref<any[]>([])
  const loading = ref(false)
  const pagination = reactive({
    currentPage: 1,
    itemsPerPage: 12,
    totalPages: 1,
    totalItems: 0
  })
  const filters = reactive({
    type: ''
  })

  const goHome = () => {
    navigateTo('/')
  }

  const fetchImages = async () => {
    loading.value = true

    try {
      const result: any = await $fetch('/api/images/get-links', {
        params: {
          page: pagination.currentPage,
          limit: pagination.itemsPerPage,
          type: filters.type
        }
      })

      if (result.success) {
        images.value = result.data || []
        pagination.totalItems = result.pagination?.totalImages || 0
        pagination.totalPages = result.pagination?.totalPages || 1
      } else {
        console.error('获取图片失败:', result.error)
      }
    } catch (err) {
      console.error('获取图片失败:', err)
    } finally {
      loading.value = false
    }
  }

  const prevPage = () => {
    if (pagination.currentPage > 1) {
      pagination.currentPage--
      fetchImages()
    }
  }

  const nextPage = () => {
    if (pagination.currentPage < pagination.totalPages) {
      pagination.currentPage++
      fetchImages()
    }
  }

  const copyLink = async (url: string) => {
    try {
      await navigator.clipboard.writeText(`${window.location.origin}${url}`)
      // 可以添加提示信息
      console.log('链接已复制到剪贴板:', url)
    } catch (err) {
      console.error('复制链接失败:', err)
    }
  }

  const deleteImage = async (id: number) => {
    if (!confirm('确定要删除这张图片吗？此操作不可逆。')) {
      return
    }

    try {
      const result: any = await $fetch(`/api/images/${id}`, {
        method: 'DELETE'
      })

      if (result.success) {
        // 从本地列表中移除
        images.value = images.value.filter(img => img.id !== id)
        pagination.totalItems--

        // 如果当前页为空且不是第一页，则跳转到上一页
        if (images.value.length === 0 && pagination.currentPage > 1) {
          pagination.currentPage--
          fetchImages()
        }

        console.log('图片删除成功:', id)
      } else {
        console.error('删除图片失败:', result.message)
      }
    } catch (err) {
      console.error('删除图片失败:', err)
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('zh-CN')
  }

  const onImageError = (e: Event) => {
    const target = e.target as HTMLImageElement
    target.src = 'https://placehold.co/300x300?text=Image+Not+Found' // 使用占位图
  }

  // 初始化加载
  onMounted(() => {
    fetchImages()
  })
</script>
