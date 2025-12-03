<template>
  <z-paging
    ref="paging"
    :auto="auto"
    :bgColor="bgColor"
    v-model="list"
    refresher-threshold="160rpx"
    @query="queryList"
    @onRefresh="onRefresh"
    @scrolltolower="scrolltolower"
    :useVirtualList="useVirtualList"
    :useInnerList="useInnerList"
    :cellKeyName="cellKeyName"
    :innerListStyle="innerListStyle"
    :cellHeightMode="cellHeightMode"
    :virtualScrollFps="virtualScrollFps"
    :show-refresher-when-reload="showRefresherWhenReload"
    :loading-more-enabled="loadingMoreEnabled"
    @scrollIntoViewById="scrollIntoViewById"
    :use-page-scroll="usePageScroll"
    :preloadPage="preloadPage"
    scroll-with-animation
    refresher-vibrate
    :auto-hide-loading-after-first-loaded="true"
    :loading-more-loading-text="{ en: '英文的加载中', 'zh-cn': '中文的加载中', 'zh-hant-cn': '繁体的加载中' }"
    :empty-view-center="false"
    system-loading-text="加载中..."
    loading-full-fixed
    show-refresher-update-time
  >
    <!-- auto-show-system-loading-->
    <!-- loading-full-fixed -->
    <!-- show-refresher-update-time-->
    <!--  safe-area-inset-bottom -->
    <!--  use-safe-area-placeholder  -->
    <!-- loading-full-fixed -->
    <!-- auto-show-system-loading  -->
    <!-- show-refresher-when-reload -->
    <!-- :preloadPage="preloadPage" -->
    <!-- show-refresher-when-reload -->
    <!-- :show-loading-more-no-more-template="true" -->
    <!-- loading-full-fixed -->
    <!-- auto-show-system-loading -->
    <!-- system-loading-text="loading..." -->
    <!-- scroll-with-animation 在设置滚动条位置时使用动画过渡 -->
    <!-- inside-more 当分页未满一屏时，是否自动加载更多(nvue无效) -->
    <!-- show-refresher-update-time 是否显示最后更新时间   -->
    <!-- auto-show-back-to-top 自动显示点击返回顶部按钮 -->
    <!-- refresher-f2-enabled  是否开启二楼 -->
    <template #top>
      <slot name="top" />
    </template>

    <template #bottom>
      <slot name="bottom" />
    </template>
    <template #left>
      <slot name="left" />
    </template>
    <template #right>
      <slot name="right" />
    </template>
    <!-- <template #loading>
      <tasi-loading></tasi-loading>
    </template> -->

    <template #empty>
      <slot name="empty" />
    </template>
    <template #cell="{ item, index }">
      <slot name="cell" :item="item" :index="index" />
    </template>
    <template #loadingMoreNoMore>
      <slot name="loadingMoreNoMore" />
    </template>
    <template #refresherF2>
      <view class="p-3">
        <view class="flex justify-center items-center p-1 text-white bg-gray-800 rounded-md">
          松手可以进入二楼哦 (*╹▽╹*)
        </view>
      </view>
    </template>

    <template #f2>
      <slot name="f2" />
    </template>
    <!-- <template #refresher="{ refresherStatus }">
      <tasi-refresher :status="refresherStatus" />
    </template> -->
    <slot />
    <!-- <tasi-alert ref="alert" @alertConfirm="alertConfirm"></tasi-alert> -->
  </z-paging>
</template>

<script setup>
  const emits = defineEmits(['input', 'onRefresh', 'query', 'update:modelValue', 'scrolltolower'])

  const props = defineProps({
    // 关闭首次自动下拉
    showRefresherWhenReload: {
      type: Boolean,
      default: false
    },
    bgColor: {
      type: String,
      default: '#f4f6f8'
    },
    loadingMoreEnabled: {
      type: Boolean,
      default: true
    },

    // 用于接收父组件v-model所绑定的list的值
    value: {
      type: Array,
      default: function () {
        return []
      }
    },
    retry: {
      type: Boolean,
      default: true
    },
    // 是否使用页面滚动，默认为否
    usePageScroll: {
      type: Boolean,
      default: false
    },
    //	是否自动加载，默认为true
    auto: {
      type: Boolean,
      default: true
    },
    // 是否使用虚拟列表，默认为否
    useVirtualList: {
      type: Boolean,
      default: false
    },
    // 是否在z-paging内部循环渲染列表(内置列表)，默认为否。若use-virtual-list为true，则此项恒为true
    useInnerList: {
      type: Boolean,
      default: false
    },
    // 内置列表cell的key名称，仅nvue有效，在nvue中开启use-inner-list时必须填此项
    cellKeyName: {
      type: String,
      default: ''
    },
    // innerList样式
    innerListStyle: {
      type: Object,
      default: function () {
        return {}
      }
    },
    // 预加载的列表可视范围(列表高度)页数，默认为7，即预加载当前页及上下各7页的cell。此数值越大，则虚拟列表中加载的dom越多，内存消耗越大(会维持在一个稳定值)，但增加预加载页面数量可缓解快速滚动短暂白屏问题
    preloadPage: {
      type: [Number, String],
      default: 10
    },
    // 虚拟列表cell高度模式，默认为fixed，也就是每个cell高度完全相同，将以第一个cell高度为准进行计算。可选值【dynamic】，即代表高度是动态非固定的，【dynamic】性能低于【fixed】。
    cellHeightMode: {
      type: String,
      default: 'fixed'
    },
    // 虚拟列表scroll取样帧率，默认为60，过高可能出现卡顿等问题
    virtualScrollFps: {
      type: [Number, String],
      default: 60
    }
  })

  const paging = ref(null)
  let list = ref([])

  watch(
    () => props.value,
    newVal => {
      list.value = newVal
    }
  )
  // #ifdef VUE3
  watch(
    () => props.modelValue,
    newVal => {
      list.value = newVal
    }
  )
  // #endif

  watch(
    () => list.value,
    newVal => {
      emits('input', newVal)
      // #ifdef VUE3
      emits('update:modelValue', newVal)
      // #endif
    }
  )

  // 监听z-paging的@query事件，通过emit传递给页面
  const queryList = (pageNo, pageSize) => {
    emits('query', pageNo, pageSize)
  }

  const onRefresh = (pageNo, pageSize) => {
    emits('onRefresh', pageNo, pageSize)
  }
  const scrolltolower = (pageNo, pageSize) => {
    emits('scrolltolower', pageNo, pageSize)
  }

  const scrollIntoViewById = (x, y, z) => {
    paging.value.scrollIntoViewById(x, y, z)
  }

  // 接收页面触发的setLocalPaging方法，传给z-paging
  const setLocalPaging = data => {
    paging.value.setLocalPaging(data)
  }

  // 接收页面触发的reload方法，传给z-paging
  const reload = data => {
    paging.value.reload(data)
  }

  // 接收页面触发的complete方法，传给z-paging
  const complete = data => {
    paging.value.complete(data)
  }
  // 接收页面触发的refresh方法，传给z-paging
  const refresh = data => {
    paging.value.refresh(data)
  }

  // 如果是使用页面滚动，则需要添加以下三个方法，注意页面那边要引入hooks，与使用页面滚动示例写法相同。
  // 接收页面触发的updatePageScrollTop方法，传给z-paging
  const updatePageScrollTop = data => {
    paging.value.updatePageScrollTop(data)
  }

  // 接收页面触发的pageReachBottom方法，传给z-paging
  const pageReachBottom = () => {
    paging.value.pageReachBottom()
  }

  // 接收页面触发的doChatRecordLoadMore方法，传给z-paging
  const doChatRecordLoadMore = () => {
    paging.value.doChatRecordLoadMore()
  }

  defineExpose({ reload, complete, scrollIntoViewById, refresh, setLocalPaging })
</script>
