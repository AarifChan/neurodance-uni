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
  <view class="devicePage">
    <fg-navbar />
    <view class="content">
      <view class="product" @tap.stop="handleTestFunc">
        <view class="product-center" />
        <image class="product-img" src="/static/images/product-detail.png" />
      </view>
      <view class="status-title">{{ deviceStatus ? '已连接' : '未连接' }}</view>
      <view class="product-title">DSP</view>
      <view class="connect-time">
        上次连接时间:{{ dayjs(deviceDetail?.lastMeetTime).format('YYYY-MM-DD HH:mm:ss') }}
      </view>
      <view class="check-btn" @tap.stop="navChangeDevice">切换设备</view>
      <view class="unbind-btn" @tap.stop="unbindShow = true">解绑设备</view>
      <view class="sys-btn" @tap.stop="navQuestionPage">
        <image src="/static/images/question.png" />
        <text>连接问题</text>
      </view>
    </view>
    <CustomModal
      v-model:show="unbindShow"
      title="确认解绑当前设备"
      confirm-title="解绑"
      @confirm="unbindDevice"
    />
  </view>
</template>

<script lang="ts" setup>
//
import { getLastPage } from '@/utils'
import { useDeviceStore } from '@/store'
import { dayjs } from 'wot-design-uni'
const unbindShow = ref(false)
const deviceStatus = computed(() => {
  return useDeviceStore().deviceStatus
})
const deviceDetail = computed(() => {
  return useDeviceStore().deviceDetail
})
const deviceInfo = ref({
  sn: '',
  deviceType: '',
})
onMounted(() => {
  const page = getLastPage() as any
  const params = page.options
  const sn = params.sn
  const deviceType = params.deviceType
  deviceInfo.value = {
    sn,
    deviceType,
  }
  console.log('device page:', sn)
  useDeviceStore().getDeviceCurrentStatus(sn)
})
const navQuestionPage = () => {
  uni.navigateTo({
    url: '/pages/mine/question/index',
  })
}
const navChangeDevice = () => {
  uni.scanCode({
    onlyFromCamera: true, // 是否仅允许相机扫码（默认false，可从相册选择）
    scanType: ['qrCode', 'barCode'], // 扫码类型：二维码、条形码
    success(res) {
      console.log('扫码结果:', res.result)
    },
    fail(err) {
      console.error('扫码失败:', err)
    },
  })
}
const handleTestFunc = async () => {}
const unbindDevice = async () => {
  await useDeviceStore().unbindDevice(deviceInfo.value)
  uni.navigateBack()
}
</script>

<style lang="scss" scoped>
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
.unbind-btn {
  margin-top: 32rpx;
  line-height: 40rpx;
  color: #c9cdd4;
  padding: 24rpx 110rpx;
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
