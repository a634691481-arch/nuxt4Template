<template>
  <div class="p-1" v-viewer="viewerOptions">
    <MasonryWall :items="items" :column-width="280" :gap="6" :ssr-columns="1">
      <template #default="x">
        <div v-if="x.index == 0" class="absolute inset-0 z-40 bg-gray-700">
          <UserInforMation :user="user"></UserInforMation>
        </div>
        <motion.div
          :initial="{ opacity: 0, y: 500 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{
            delay: x.index ? x.index * 0.1 : 0,
            duration: x.index ? 0.5 : 0
          }"
          class="overflow-hidden"
          :whileInView="{ opacity: 1, y: 0 }"
          :exit="{ opacity: 0, y: 500 }"
        >
          <div
            class="group bg-neutral-100 relative w-full overflow-hidden"
            :style="{ aspectRatio: getImageAspectRatio(x.item) }"
          >
            <img
              :src="x.item.url || ''"
              alt="图片"
              class="group-hover:scale-105 z-0 object-cover w-full h-full transition-transform duration-300 cursor-pointer"
              loading="lazy"
              @load="onImageLoad($event, x.item)"
            />
            <div
              class="bg-img group-hover:opacity-100 absolute inset-0 z-10 transition-opacity duration-300 opacity-0 pointer-events-none"
            ></div>
            <div
              class="group-hover:opacity-100 group-hover:translate-y-0 absolute inset-x-0 bottom-0 z-20 p-3 text-white transition-all duration-300 translate-y-2 opacity-0"
            >
              <div class="text-sm font-semibold">8888</div>
              <!-- <div class="text-xs">{{ x?.item?.date }}</div> -->
            </div>
          </div>
        </motion.div>
      </template>
    </MasonryWall>
  </div>
</template>

<script setup>
  import { motion, scale } from 'motion-v'
  import { onMounted, onUnmounted, nextTick } from 'vue'

  const toast = useToast()
  const items = ref([])

  // 存储图片尺寸缓存
  const imageCache = reactive(new Map())

  const x = await $fetch(`${useRuntimeConfig().public.apiBase}/pub.index.getImages`, {
    method: 'GET'
  })
  items.value = x.data
  console.log('🚀 ~ :56 ~ items.value:', items.value)

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
