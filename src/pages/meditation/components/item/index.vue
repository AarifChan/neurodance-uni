<template>
  <view class="item">
    <view class="left">
      <text class="title">{{ title }}</text>
      <text class="subTitle">{{ subTitle }}</text>
    </view>
    <view class="right">
      <text class="title">{{ value }}</text>
      <text class="subTitle">{{ unit }}</text>
    </view>
    <image class="icon" src="/static/images/meditation/meditation-icon.png" />
  </view>
</template>

<script lang="ts" setup>
//

defineProps({
  value: {
    default: 0,
    type: Number,
  },
  unit: {
    default: '分钟',
    type: String,
  },
  title: {
    default: '冥想时长',
    type: String,
  },
  subTitle: {
    default: '本次时长',
    type: String,
  },
})
</script>

<style lang="scss" scoped>
.item {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 50rpx;
  border-radius: 20rpx;
  background: linear-gradient(253deg, #f7eefb 1.4%, #fff 43.07%);

  /* 阴影1 */
  box-shadow: 0 0 48rpx 0 rgba(177, 177, 177, 0.18);
  .left {
    display: flex;
    flex-direction: column;
    color: #1d2129;
    .title {
      font-size: 32rpx;
    }
    .subTitle {
      margin-top: 4rpx;
      font-size: 20rpx;
    }
  }
  .right {
    display: flex;
    flex-direction: row;
    align-items: baseline;

    .title {
      color: #d096f9;
      font-size: 48rpx;
    }
    .subTitle {
      margin-left: 8rpx;
      color: #4e5969;
      font-size: 24rpx;
    }
  }
  .icon {
    position: absolute;
    right: 160rpx;
    top: 42rpx;
    width: 94rpx;
    height: 108rpx;
  }
}
</style>
