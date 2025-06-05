<template>
  <view class="custom-btn" :class="type === 'primary' ? 'main-bg-color {' : 'other-bg-color '">
    {{ title }}
  </view>
</template>

<script lang="ts" setup>
//

defineProps({
  title: {
    default: '按钮',
    type: String,
  },
  type: {
    default: 'other',
    type: String,
  },
})
</script>

<style lang="scss" scoped>
.custom-btn {
  height: 90rpx;
  width: 600rpx;
  font-size: 32rpx;
  font-weight: 520;
  line-height: 90rpx;
  border-radius: 24rpx;
  text-align: center;
  transition: all 0.3s ease;
}
.main-bg-color {
  background-color: $primary-blue;
  color: #fff;
}
.other-bg-color {
  background-color: #efefef;
  color: #4e5969;
}
</style>
