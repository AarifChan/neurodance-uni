<route lang="json5" type="page">
{
  layout: 'tabbar',
  style: {
    disableScroll: true,
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <view class="home">
    <view class="card-swiper">
      <wd-swiper
        :list="swiperList"
        :autoplay="false"
        v-model:current="current"
        @change="onChange"
        custom-indicator-class="custom-indicator-class"
        custom-image-class="custom-image"
        custom-next-image-class="custom-image-prev"
        custom-prev-image-class="custom-image-prev"
        :indicator="true"
      />
    </view>
  </view>
</template>

<script lang="ts" setup>
const current = ref<number>(0)

const swiperList = ref([
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/redpanda.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/capybara.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/panda.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/moon.jpg',
  'https://registry.npmmirror.com/wot-design-uni-assets/*/files/meng.jpg',
])
function handleClick(e) {
  console.log(e)
}
function onChange(e) {
  console.log(e)
}
</script>

<style lang="scss" scoped>
//
.home {
  width: 100%;
  height: calc(100vh - 148rpx + 40rpx);
  padding-bottom: 40rpx;
}
.card-swiper {
  width: 100%;
  height: 100%;
  --wot-swiper-radius: 0;
  --wot-swiper-item-padding: 0 0;
  --wot-swiper-nav-dot-color: gray;
  --wot-swiper-nav-dot-active-color: #4d80f0;
  padding-bottom: 24rpx;
  :deep(.custom-indicator-class) {
    bottom: -16px;
  }
  :deep(.custom-image) {
    // border-radius: 12rpx;
  }
  :deep(.custom-image-prev) {
    height: 168px !important;
    padding: 64rpx;
  }
}
</style>
