<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '枕月睡眠仪',
    disableScroll: true,
    navigationBarBackgroundColor: '#232323',
    navigationBarTextStyle: 'white',
    backgroundColor: '#010101',
    // navigationStyle: 'custom',
  },
}
</route>

<template>
  <scroll-view class="zhenyue-app" scroll-y scroll-with-animation :scroll-into-view="scrollView">
    <view class="content">
      <text class="title">下载APP</text>
      <view class="top">
        <view class="app">
          <image src="/static/images/app-logo.png" class="logo" />
          <view class="info">
            <text class="title">枕月 APP</text>
            <view class="subTitle">愿您睡个好觉</view>
            <view class="download" @tap.stop="didClickAndroid">下载</view>
          </view>
        </view>
      </view>
      <text class="title">官方产品教学</text>
      <view class="video">
        <view class="content"></view>
      </view>
      <view class="usage">
        <view class="title">枕月睡眠仪｜首次使用</view>
        <view class="title">看点</view>
        <view class="intro">
          <view class="item" v-for="(video, index) in videoInfoList" :key="index">
            <view class="title">{{ video.time }}</view>
            <view class="subTitle">{{ video.title }}</view>
          </view>
        </view>
      </view>

      <view class="option">
        <text class="title">枕月睡眠仪 - 用户手册</text>
        <image class="icon" src="/static/images/right-arrow.png" />
      </view>
      <view class="option">
        <text class="title">枕月睡眠仪 - 新手快速攻略</text>
        <image class="icon" src="/static/images/right-arrow.png" />
      </view>
      <view class="footer">
        <text>北京神舞科技有限公司</text>
        <text>邮箱：neurodance@neurodance.com</text>
        <text>备案号：ICP备2024000000号</text>
        <view class="footer-links">
          <text @tap.stop="didClickProtocol">用户协议</text>
          |
          <text @tap.stop="didClickProtocol">隐私政策</text>
        </view>
      </view>
    </view>
  </scroll-view>
</template>

<script lang="ts" setup>
//
const systemInfo = uni.getSystemInfoSync()
const platform = systemInfo.platform // 'android' | 'ios' | 'devtools' | 'windows' | 'mac'

const toDownload = () => {
  if (platform === 'android') {
    window.location.href = 'https://www.pgyer.com/uufXhxi6'
    // 安卓
  } else if (platform === 'ios') {
    // iOS
    window.location.href = 'https://testflight.apple.com/join/mdkP9Gve'
  } else {
    // PC 或开发者工具
  }
}
const didClickIOS = () => {}

const scrollView = ref('')
const didClickAndroid = () => {}
const videoInfoList = ref([
  {
    time: '00:05',
    title: '如何下载APP',
  },
  {
    time: '01:20',
    title: '如何连接设备',
  },
  {
    time: '02:45',
    title: '如何开始冥想',
  },
  {
    time: '04:10',
    title: '如何开始睡眠',
  },
])
const didClickProtocol = () => {
  uni.navigateTo({
    url: '/pages/userProtocol/index',
  })
}
</script>

<style lang="scss" scoped>
.zhenyue-app {
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
  color: #333;
  position: relative;
  background-color: #010101;
  width: 100%;
  height: calc(100vh - env(safe-area-inset-bottom));
  padding-bottom: env(safe-area-inset-bottom);

  .content {
    padding: 32rpx;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 32rpx;

    .top {
      display: flex;
      flex-direction: column;
      padding: 16rpx 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      .text {
        margin-top: 32rpx;
        font-size: 38rpx;
        color: #fff;
      }
      .app {
        margin-top: 16rpx;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        .info {
          margin-left: 32rpx;
          .title {
            font-size: 30rpx;
            color: white;
          }
          .subTitle {
            margin-top: 8rpx;
            color: #7e7e7e;
            font-size: 28rpx;
          }
          .download {
            margin-top: 8rpx;
            width: 168rpx;
            height: 64rpx;
            border-radius: 32rpx;
            background-image: url('/static/images/download.png');
            background-repeat: no-repeat;
            background-position: left 24rpx center; /* 居中显示 */
            background-size: 36rpx 36rpx;
            background-color: #309df5;
            line-height: 64rpx;
            text-align: center;
            color: white;
            font-size: 28rpx;
          }
        }
        .logo {
          width: 192rpx;
          height: 192rpx;
          border-radius: 24rpx;
          margin-bottom: 20rpx;
          border-radius: 32rpx;
        }
      }
    }
    .title {
      font-size: 38rpx;
      color: white;
      line-height: 42rpx;
    }
    .video {
      padding: 32rpx 0;
      width: 100%;
      border-radius: 8rpx;
      border: 1rpx solid rgba(255, 255, 255, 0.1);
      .content {
        width: 100%;
        height: 400rpx;
      }
    }
    .usage {
      display: flex;
      flex-direction: column;
      gap: 16rpx;
      .title {
        font-size: 28rpx;
        color: white;
      }
      .intro {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 32rpx;
        gap: 20rpx;
        box-sizing: border-box;
        border-radius: 16rpx;
        background: #141414;
        .item {
          display: flex;
          flex-direction: row;
          align-items: center;
          .title {
            width: 100rpx;
            text-align: left;
            color: #8c8c8c;
            font-size: 20rpx;
          }
          .subTitle {
            color: #8c8c8c;
            font-size: 20rpx;
          }
        }
      }
    }
    .option {
      position: relative;
      padding: 20rpx;
      border-radius: 16rpx;
      background: #141414;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .title {
        font-size: 28rpx;
        color: white;
      }
      .icon {
        width: 30rpx;
        height: 30rpx;
      }
    }

    .footer {
      text-align: center;
      padding: 40rpx 20rpx;
      font-size: 20rpx;
      color: #fff;
      display: flex;
      flex-direction: column;

      .footer-links {
        // margin-top: 12rpx;
        color: #fff;
      }
    }
  }
}
</style>
