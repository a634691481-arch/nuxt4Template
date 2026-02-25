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
          <view class="grid grid-cols-1 gap-3 px-3 py-2 pb-0">
            <u-button
              size="default"
              shape="circle"
              :plain="false"
              :hair-line="false"
              type="primary"
              class="w-full"
              @click="uploadImage"
            >
              <u-icon name="photo" size="32" class="mr-1" color="#fff"></u-icon>
              上传图片
            </u-button>
          </view>
        </view>
      </template>
      <view class="flex flex-col p-3">
        <view class="grid grid-cols-3 gap-3">
          <view
            class="aspect-square relative overflow-hidden bg-[#2d2d2d] rounded-lg"
            v-for="(i, k) in state.data"
            :key="k"
            @click="previewImage(k)"
          >
            <u-image :src="i.path" width="100%" height="100%" mode="aspectFill" class="!size-full" />
            <view
              class="top-1 right-1 size-5 absolute flex items-center justify-center bg-[#2E8B57] rounded-full cursor-pointer"
              @click.stop="removeImage(k)"
            >
              <u-icon name="close" size="18" color="#fff"></u-icon>
            </view>
          </view>

          <view class="aspect-square flex items-center justify-center bg-[#2d2d2d] rounded-lg" @click="handleClick">
            <u-icon name="plus" size="50" class="mr-1" color="#e0e0e0"></u-icon>
          </view>
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

  async function handleClick() {
    // 选择图片
    uni.chooseImage({
      count: 9,
      sourceType: ['album'],
      sizeType: ['original', 'compressed'],
      success: res => {
        // 遍历所有选中的图片进行上传
        res.tempFiles.forEach((file, index) => {
          console.log('file==> ', file)
          state.value.data.push(file)
        })
      }
    })
  }

  function removeImage(index) {
    state.value.data.splice(index, 1)
  }

  async function uploadImage() {
    // 检查是否有图片需要上传
    if (state.value.data.length === 0) return vk.toast('没有图片需要上传', 'none')

    // 显示确认对话框
    // uni.showModal({
    //   title: '确认上传',
    //   content: `确定要上传这 ${state.value.data.length} 张图片吗？`,
    //   success: async function (res) {
    //     if (res.confirm) {

    //     }
    //   }
    // })
    await performUpload()
  }

  async function performUpload() {
    // 创建一个副本来遍历，保持原数组完整直到全部上传完成
    const filesToUpload = [...state.value.data]

    // 串行上传，等前一个完成再执行下一个
    for (let i = 0; i < filesToUpload.length; i++) {
      const file = filesToUpload[i]
      try {
        // 上传文件
        const uploadRes = await new Promise((resolve, reject) => {
          vk.uploadFile({
            title: `上传中(${i + 1}/${filesToUpload.length})...`,
            file: file,
            success: resolve,
            fail: reject
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

        // 上传成功后，从显示列表中删除当前图片
        const currentIndex = state.value.data.findIndex(item => item === file)
        if (currentIndex !== -1) {
          state.value.data.splice(currentIndex, 1)
        }

        console.log(`第${i + 1}张图片上传成功`)
      } catch (err) {
        console.error('上传失败:', err)
        // 上传失败的图片保留在列表中
      }
    }

    // 上传完成提示
    vk.toast('图片上传完成', 'none')
    console.log('所有图片上传完成')
  }

  function previewImage(index) {
    uni.previewImage({
      urls: state.value.data.map(i => i.path),
      current: index
    })
  }
</script>

<style lang="scss" scoped></style>
