<template>
  <view>
    <yy-paging
      v-model="state.dataList"
      @query="queryList"
      ref="paging"
      :auto="false"
      @scroll="scroll"
      :refresher-enabled="false"
      bgColor="#1E1E1E"
    >
      <template #top>
        <!-- <u-navbar
          :background="{ backgroundColor: state.isScroll ? '#fff' : '#fff' }"
          :title="state.title"
          :border-bottom="false"
          title-color="#000"
          backIconColor="#fff"Color
        ></u-navbar> -->
      </template>
      <template #empty>
        <yy-empty></yy-empty>
      </template>
      <template #loadingMoreNoMore>
        <yy-nomore text=""></yy-nomore>
      </template>
      <template #bottom>
        <view class="pb-env bg-[#2d2d2d] shadow-md">
          <view class="grid grid-cols-3 gap-3 px-3 py-2 pb-0">
            <u-button
              size="default"
              shape="circle"
              :plain="false"
              :hair-line="false"
              type="primary"
              class="w-full"
              @click="chooseVideo"
            >
              <u-icon name="play-circle" size="32" class="mr-1" color="#fff"></u-icon>
              选择视频
            </u-button>
            <u-button
              size="default"
              shape="circle"
              :plain="false"
              :hair-line="false"
              type="primary"
              class="w-full"
              @click="chooseImage"
            >
              <u-icon name="photo" size="32" class="mr-1" color="#fff"></u-icon>
              选择图片
            </u-button>
            <u-button
              size="default"
              shape="circle"
              :plain="false"
              :hair-line="false"
              type="primary"
              class="w-full"
              @click="startUploading"
            >
              <u-icon name="plus" size="32" class="mr-1" color="#fff"></u-icon>
              开始上传
            </u-button>
          </view>
        </view>
      </template>
      <view class="flex flex-col p-3">
        <view class="text-lg font-semibold text-white">图片上传</view>
        <view class="grid grid-cols-3 gap-3">
          <view
            class="aspect-square relative overflow-hidden bg-[#2d2d2d] rounded-lg"
            v-for="(i, k) in state.data"
            :key="k"
          >
            <!-- 图片 -->
            <u-image
              v-if="i.fileType === 'image' || !i.duration"
              :src="i.path"
              width="100%"
              height="100%"
              mode="aspectFill"
              class="!size-full"
              @click="previewMedia(k)"
            />
            <!-- 视频 -->
            <video v-else :src="i.path" class="!size-full" show-play-btn show-center-play-btn object-fit="cover" />
            <!-- 视频时长标识 -->
            <view v-if="i.duration" class="absolute top-1 right-8 bg-black/60 text-white text-xs px-2 py-0.5 rounded">
              {{ formatDuration(i.duration) }}
            </view>
            <!-- 删除按钮 -->
            <view
              class="top-1 right-1 size-5 absolute flex items-center justify-center bg-[#2E8B57] rounded-full cursor-pointer"
              @click.stop="removeImage(k)"
            >
              <u-icon name="close" size="18" color="#fff"></u-icon>
            </view>
          </view>

          <!-- <view class="aspect-square flex items-center justify-center bg-[#2d2d2d] rounded-lg" @click="handleClick">
            <u-icon name="plus" size="50" class="mr-1" color="#e0e0e0"></u-icon>
          </view> -->
        </view>
      </view>
    </yy-paging>
    <!--  -->
    <!--  -->
    <!--  -->
    <!-- <yy-tabbar></yy-tabbar> -->
  </view>
</template>

<script setup>
  const state = ref({
    isScroll: false,
    dataList: [],
    title: '图片',
    data: []
  })

  const paging = ref()
  const alert = ref()

  onLoad(options => {
    // vk.callFunction({
    //   url: 'client/pub.index.getImages',
    //   title: '',
    //   success: data => {
    //     console.log('🚀 ~ :55 ~ data:', data)
    //   }
    // })
  })

  function scroll(e) {
    state.value.isScroll = e.detail.scrollTop > 0
  }

  function queryList(page, limit) {
    console.log('🚀 ~ :58 ~ queryList ~ page, limit:', page, limit)
    setTimeout(() => {
      paging.value?.complete([1])
    }, 1000)
  }

  function chooseImage() {
    uni.chooseImage({
      count: 9,
      sourceType: ['album'],
      sizeType: ['original', 'compressed'],
      success: res => {
        console.log('🖼️ 选择的图片:', res)
        res.tempFiles.forEach((file, index) => {
          // 确保文件有 path 属性
          if (file.path && !file.path) {
            file.path = file.path
          }
          // 标记文件类型
          file.fileType = 'image'
          state.value.data.push(file)
        })
      },
      fail: err => {
        console.error('❌ 选择图片失败:', err)
        vk.toast('选择图片失败', 'none')
      }
    })
  }

  function chooseVideo() {
    uni.chooseVideo({
      sourceType: ['album'],
      success: res => {
        console.log('🎬 选择的视频:', res)
        // 为视频对象添加 path 属性以兼容上传逻辑
        if (res.tempFilePath && !res.path) {
          res.path = res.tempFilePath
        }
        // 标记文件类型
        res.fileType = 'video'
        state.value.data.push(res)
      },
      fail: err => {
        console.error('❌ 选择视频失败:', err)
        vk.toast('选择视频失败', 'none')
      }
    })
  }

  function removeImage(index) {
    state.value.data.splice(index, 1)
  }

  async function startUploading() {
    // 检查是否有图片需要上传
    if (state.value.data.length === 0) return vk.toast('没有图片需要上传', 'none')

    await performUpload()
  }

  async function performUpload() {
    // 检查是否有文件需要上传（包括图片和视频）
    if (state.value.data.length === 0) return vk.toast('没有文件需要上传', 'none')

    // 创建一个副本来遍历，保持原数组完整直到全部上传完成
    const filesToUpload = [...state.value.data]
    console.log('🚀 ~ :177 ~ performUpload ~ filesToUpload:', filesToUpload)

    // 串行上传，等前一个完成再执行下一个
    for (let i = 0; i < filesToUpload.length; i++) {
      const file = filesToUpload[i]

      // 获取正确的文件路径（兼容图片和视频）
      const filePath = file.path || file.tempFilePath

      if (!filePath) {
        console.error('❌ 文件路径不存在:', file)
        vk.toast(`第${i + 1}个文件路径无效`, 'none')
        continue
      }

      // 上传文件
      const uploadRes = await new Promise((resolve, reject) => {
        vk.uploadFile({
          title: `上传中 (${i + 1}/${filesToUpload.length})...`,
          file: file,
          filePath: filePath,
          success: resolve,
          fail: e => {
            console.error('❌ 上传失败:', e)
            reject(e)
          }
        })
      })

      // 调用云函数保存到数据库
      await vk.callFunction({
        url: 'client/pub.index.addImage',
        title: '',
        data: {
          url: uploadRes.url
        }
      })

      // 上传成功后，从显示列表中删除当前文件
      const currentIndex = state.value.data.findIndex(item => item === file)
      if (currentIndex !== -1) {
        state.value.data.splice(currentIndex, 1)
      }

      console.log(`✅ 第${i + 1}个文件上传成功`)
    }

    // 上传完成提示
    vk.toast('文件上传完成', 'none')
    console.log('所有文件上传完成')
  }

  function previewImage(index) {
    uni.previewImage({
      urls: state.value.data.map(i => i.path),
      current: index
    })
  }

  // 预览媒体文件（图片或视频）
  function previewMedia(index) {
    const file = state.value.data[index]

    if (file.fileType === 'video' || file.duration) {
      // 预览视频
      uni.previewMedia({
        urls: state.value.data.filter(i => i.fileType === 'video' || i.duration).map(i => i.path),
        current: index,
        types: ['video']
      })
    } else {
      // 预览图片
      uni.previewImage({
        urls: state.value.data.map(i => i.path),
        current: index
      })
    }
  }

  // 格式化视频时长（秒转为分：秒格式）
  function formatDuration(seconds) {
    if (!seconds) return '0:00'
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }
</script>

<style lang="scss" scoped></style>
