<template>
  <view class="size-full bg-black/60 fixed inset-0 flex items-center justify-center" v-if="options.show">
    <transition name="alert-scale" appear>
      <view class="w-[80%] bg-white rounded-[1rem]" v-if="options.show">
        <view class="flex flex-col items-center justify-center gap-4 p-4 py-5">
          <view class="text-[1rem] text-[#161A24] font-medium" v-if="options.title">{{ options.title }}</view>
          <view class="text-[.875rem] text-[#5C6068] text-center px-8">{{ options.describe }}</view>
        </view>
        <view class="grid border-t-[.0625rem]" :class="[options.cancel ? 'grid-cols-2' : 'grid-cols-1']">
          <view
            class="flex col-span-1 justify-center items-center border-r-[.0625rem] py-3"
            @click="close"
            v-if="options.cancel"
          >
            <text :style="{ color: options.cancelColor }" class="text-[1rem] text-[#161A24]">
              {{ options.cancel }}
            </text>
          </view>
          <view class="flex items-center justify-center col-span-1 py-3" @click="confirm" v-if="options.confirm">
            <text :style="{ color: options.confirmColor }" class="font-medium text-[1rem] text-[#161A24]">
              {{ options.confirm }}
            </text>
          </view>
        </view>
      </view>
    </transition>
  </view>
</template>

<script setup>
  /**
   * 使用示例：
   * 1. 基础用法 (仅文字):
   *    alertRef.value.config('这是一条提示信息')
   *
   * 2. 完整用法 (自定义回调):
   *    alertRef.value.config({
   *      title: '删除确认',
   *      describe: '确定要删除这条记录吗？',
   *      cancel: '取消',
   *      confirm: '确定',
   *      confirmFun: () => { console.log('点击了确定') },
   *      cancelFun: () => { console.log('点击了取消') }
   *    })
   *
   * 3. 对应 index.vue 里的跳转用法:
   *    alertRef.value.config({
   *      confirmFun: () => { window.location.href = '...' }
   *    })
   */

  // 默认配置，用于重置状态
  const defaultOptions = {
    show: false,
    title: '温馨提示',
    describe: '确定要执行此操作吗？',
    cancel: '', // 传值即显示取消按钮
    confirm: '确定',
    cancelColor: '#5C6068',
    confirmColor: '#FF3A56',
    confirmFun: null,
    cancelFun: null
  }

  const options = reactive({ ...defaultOptions })

  const close = () => {
    if (typeof options.cancelFun === 'function') {
      options.cancelFun()
    }
    options.show = false
  }

  const confirm = () => {
    if (typeof options.confirmFun === 'function') {
      options.confirmFun()
    }
    options.show = false
  }

  const config = opts => {
    // 1. 先重置为默认值，防止状态污染
    Object.assign(options, defaultOptions)

    // 2. 根据参数类型进行赋值
    if (typeof opts === 'string') {
      options.describe = opts
    } else {
      Object.assign(options, opts)
    }

    // 3. 自动开启显示
    options.show = true
  }

  defineExpose({
    config
  })
</script>

<style scoped>
  /* 背景遮罩淡入淡出动画 */
  .alert-fade-enter-active,
  .alert-fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .alert-fade-enter-from,
  .alert-fade-leave-to {
    opacity: 0;
  }

  /* 弹窗内容缩放动画 */
  .alert-scale-enter-active,
  .alert-scale-leave-active {
    transition: all 0.3s ease;
  }

  .alert-scale-enter-from,
  .alert-scale-leave-to {
    opacity: 0;
    transform: scale(0.7);
  }

  .alert-scale-enter-to,
  .alert-scale-leave-from {
    opacity: 1;
    transform: scale(1);
  }
</style>
