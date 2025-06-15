<template>
  <view class="custom-modal" v-show="show">
    <view class="custom-content" :style="{ opacity: contentOpacity }">
      <view class="content-title">{{ title }}</view>
      <view class="btn1" @tap.stop="clickCancel">{{ cancelTitle }}</view>
      <view class="btn2" @tap.stop="clickConfirm">{{ confirmTitle }}</view>
    </view>
  </view>
</template>

<script lang="ts" setup>
const props = defineProps({
  show: {
    default: false,
    type: Boolean,
  },
  title: {
    default: '',
    type: String,
  },
  cancelTitle: {
    default: '取消',
    type: String,
  },
  confirmTitle: {
    default: '确认',
    type: String,
  },
})
const maskOpacity = ref(0)
const contentOpacity = ref(0)
const contentScale = ref(0)

watch(
  () => props.show,
  (val) => {
    if (val) {
      // 显示时动画
      maskOpacity.value = 0.5
      contentOpacity.value = 1
      contentScale.value = 1
    } else {
      // 隐藏时动画
      maskOpacity.value = 0
      contentOpacity.value = 0
      contentScale.value = 0.9
    }
  },
)
const emits = defineEmits(['update:show', 'confirm', 'cancel'])
const clickConfirm = () => {
  emits('confirm')
}
const clickCancel = () => {
  emits('update:show', false)
  emits('cancel')
}
</script>

<style lang="scss" scoped>
.custom-modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  transition: opacity 0.3s ease;
  //   background-color: rgba(0, 0, 0, 0.64);
}
.custom-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 28rpx;
  background: #fff;
  width: calc(100% - 200rpx);
  /* 阴影2 */
  box-shadow: 0px 0px 10px 0px rgba(133, 173, 192, 0.55);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16rpx;
  padding: 16rpx;
  box-sizing: border-box;
  z-index: 1000;
  transition: all 0.3s ease;
}
.content-title {
  padding: 12px 16px;
  color: #1d2129;
  font-size: 32rpx;
  text-align: center;
  font-weight: 520;
}
.btn1 {
  background-color: #3b76f2;
  padding: 12px 80px;
  border-radius: 24rpx;
  font-size: 16px;
  font-weight: 520;
  color: white;
}
.btn2 {
  background-color: #efefef;
  padding: 12px 80px;
  border-radius: 24rpx;
  font-size: 16px;
  font-weight: 520;
  color: #4e5969;
  margin-bottom: 24rpx;
}
</style>
