<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    disableScroll: true,
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <view class="page">
    <fg-navbar />
    <view class="content">
      <view class="product">
        <view class="product-center" />
        <image class="product-img" src="/static/images/product-detail.png" />
      </view>
      <view class="status-title">已连接</view>
      <view class="product-title">HoST-R2</view>
      <view class="connect-time">上次连接时间:2024-10-30-16:32:28</view>
      <view class="check-btn">切换设备</view>
      <view class="sys-btn">
        <image src="/static/images/question.png" />
        <text>连接问题</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
//
import { getLastPage } from '@/utils'
import { useDeviceStore } from '@/store'
onMounted(() => {
  const page = getLastPage() as any
  const params = page.options
  const sn = params.sn
  const deviceType = params.deviceType
  console.log('device page:', sn, deviceType)
  useDeviceStore().getDeviceCurrentStatus(deviceType, sn)
})
</script>

<style lang="scss" scoped>
.page {
  position: relative;
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(59, 118, 242, 0.2) 100%);
}
.content {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.product {
  position: relative;
  margin-top: 120rpx;
  width: 500rpx;
  height: 500rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.product-center {
  width: 95%;
  height: 95%;
  border-radius: 50%;
  background: linear-gradient(154deg, #3b76f2 16.27%, #a7c1fa 83.29%);
}
.product-img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -45%);
  width: 524rpx;
  height: 280rpx;
}
.status-title {
  margin-top: 64rpx;
  color: #4e5969;
  font-size: 24px;
}
.product-title {
  margin-top: 32rpx;
  color: #3b76f2;
  font-size: 36px;
}
.connect-time {
  color: #86909c;
  font-size: 12px;
  font-weight: 300;
}
.check-btn {
  margin-top: 40px;
  line-height: 40rpx;
  font-size: 32rpx;
  padding: 24rpx 110rpx;
  background-color: white;
  border-radius: 24rpx;
  box-shadow: 0px 0px 24px 0px rgba(177, 177, 177, 0.18);
}
.sys-btn {
  margin-top: 100rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16rpx;
  image {
    width: 60rpx;
    height: 60rpx;
  }
  text {
    color: #86909c;
    font-size: 10px;
  }
}
</style>
