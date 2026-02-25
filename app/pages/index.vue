<template>
  <div class="p-1" v-viewer="viewerOptions">
    <MasonryWall :items="items" :column-width="200" :gap="5" :ssr-columns="1">
      <template #default="x">
        <div v-if="x.index == 0" class="absolute inset-0 z-40 bg-gray-700">
          <UserInforMation :user="user" :count="count" @resetFilter="resetFilter"></UserInforMation>
        </div>
        <!-- :whileInView="{ opacity: 1, y: 0 }" -->
        <!-- :exit="{ opacity: 0, y: 22 }" -->
        <!--  -->
        <motion.div
          :initial="{ opacity: 0, y: 22 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{
            delay: x.index * 0.03,
            duration: 0.5
          }"
          class="overflow-hidden"
        >
          <div
            class="group bg-neutral-100 relative w-full overflow-hidden"
            :style="{ aspectRatio: getImageAspectRatio(x.item) }"
          >
            <!-- 图片展示 -->
            <!--        :src="x.item.url || ''" -->
            <img
              v-if="!x.item.type || x.item.type === 'image'"
              alt="图片"
              class="group-hover:scale-105 z-0 object-cover w-full h-full transition-transform duration-300 cursor-pointer"
              loading="lazy"
              @load="onImageLoad($event, x.item)"
            />
            <!-- 视频展示 -->
            <video
              v-else
              :src="x.item.url"
              autoplay
              loop
              muted
              playsinline
              class="z-0 object-cover w-full h-full cursor-pointer"
              preload="auto"
              controls
            ></video>
            <!-- controls -->

            <div
              v-if="!x.item.type || x.item.type === 'image'"
              class="group-hover:opacity-100 bg-img group-hover:translate-y-0 absolute inset-x-0 bottom-0 z-20 p-3 text-white transition-all duration-300 translate-y-2 opacity-0"
            >
              <!-- <div class="text-sm font-semibold">{{ x?.item?._add_time_str }}</div> -->
              <div class="text-xs">{{ x?.item?._add_time_str }}</div>
            </div>
          </div>
        </motion.div>
      </template>
    </MasonryWall>
    <!-- 加载提示 -->
    <div v-if="loading" class="flex items-center justify-center py-8">
      <div class="text-gray-500">加载中...</div>
    </div>
    <div v-if="noMore" class="flex items-center justify-center py-8">
      <div class="text-sm text-gray-400">没有更多了</div>
    </div>
  </div>
</template>

<script setup>
  import { motion, scale } from 'motion-v'
  import { onMounted, onUnmounted, nextTick } from 'vue'

  const toast = useToast()
  const items = ref([])
  const count = ref(0)

  // 分页状态
  const currentPage = ref(1)
  const pageSize = 60
  const loading = ref(false)
  const noMore = ref(false)

  // 存储图片尺寸缓存
  const imageCache = reactive(new Map())

  // 使用 Promise.all 并行获取所有数据
  const [imagesRes, countRes] = await Promise.all([
    useFetch(`${useRuntimeConfig().public.apiBase}/pub.index.getImages`, {
      method: 'GET',
      query: {
        page: 1,
        size: pageSize
      }
    }),
    useFetch(`${useRuntimeConfig().public.apiBase}/pub.index.getCount`, {
      method: 'GET'
    })
  ])

  items.value = imagesRes.data.value?.data || []
  count.value = countRes.data.value?.data || 0

  // 触底加载更多
  const loadMore = async () => {
    if (loading.value || noMore.value) return

    loading.value = true
    currentPage.value++

    try {
      const { data } = await $fetch(`${useRuntimeConfig().public.apiBase}/pub.index.getImages`, {
        method: 'GET',
        query: {
          page: currentPage.value,
          size: pageSize
        }
      })
      console.log('data==> ', data)

      if (data && data.length > 0) {
        items.value = [...items.value, ...data]
      } else {
        noMore.value = true
      }
    } catch (error) {
      console.error('加载失败:', error)
      toast.add({
        title: '加载失败',
        description: '请稍后重试',
        color: 'red'
      })
      currentPage.value-- // 回退页码
    } finally {
      loading.value = false
    }
  }

  // 监听滚动触底
  onMounted(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // 距离底部还有 200px 时触发
      if (scrollTop + windowHeight >= documentHeight - 200) {
        loadMore()
      }
    }

    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  const resetFilter = () => {
    items.value = x.data
  }

  // 获取图片宽高比，优先使用缓存
  const getImageAspectRatio = item => {
    const cached = imageCache.get(item.url)
    if (cached) {
      return `${cached.width} / ${cached.height}`
    }
    // 如果没有缓存，返回默认宽高比避免布局跳动
    return '1 / 1'
  }

  // 图片加载完成后更新缓存
  const onImageLoad = (event, item) => {
    const img = event.target
    const width = img.naturalWidth
    const height = img.naturalHeight

    // 缓存图片尺寸信息
    imageCache.set(item.url, { width, height })
  }

  // 使用 Intersection Observer 优化性能
  onMounted(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // 可以在这里触发特定的加载行为
            const imgElement = entry.target.querySelector('img')
            if (imgElement && !imgElement.complete) {
              imgElement.addEventListener('load', () => {
                // 图片加载完成后的处理
              })
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    // 观察所有图片容器
    nextTick(() => {
      document.querySelectorAll('.group').forEach(el => {
        observer.observe(el)
      })
    })

    onUnmounted(() => {
      observer.disconnect()
    })
  })

  const user = {
    name: 'Yangliu',
    avatar: `https://i.pravatar.cc/64?u=${Math.floor(Math.random() * 10000)}`
  }

  const viewerOptions = {
    toolbar: true,
    navbar: true,
    title: false,
    movable: true,
    zoomable: true,
    rotatable: true,
    transition: true
  }
</script>

<style lang="scss" scoped>
  .bg-img {
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3));
  }
  .masonry-item {
    position: relative !important;
  }
  ::v-deep(.masonry-item) {
    position: relative !important;
  }
</style>
