<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '',
    // disableScroll: true,
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <scroll-view class="zhenyue-app" scroll-y scroll-with-animation :scroll-into-view="scrollView">
    <view class="banner">
      <image src="/static/images/logo.jpg" class="logo" />
      <text class="title">枕月 App</text>
      <view class="banner-content">
        <view class="subtitle">脑机接口赋能健康</view>
        <view class="subtitle">睡眠监测，冥想评估，冥想辅助，睡眠优化</view>
      </view>
      <button class="btn-primary" @tap="toDownload">立即下载</button>
    </view>

    <view class="section intro">
      <text class="section-title">关于枕月</text>
      <text class="section-text">
        枕月 App是一款基于脑机接口技术的智能睡眠冥想管理工具，
        通过脑机设备采集数据，解析睡眠与冥想状态，生成可视化报告，助力深度冥想和睡眠优化，守护身心平衡。
      </text>
    </view>

    <view class="section features">
      <text class="section-title">核心功能</text>
      <view class="feature-item">🌙 睡眠声音库：白噪音、雨声、轻音乐</view>
      <view class="feature-item">⏱ 睡眠定时器：播放自动停止，无需手动</view>
      <view class="feature-item">📊 睡眠记录：记录每日睡眠状态</view>
      <view class="feature-item">📔 睡前日记：释放焦虑，记录心情</view>
      <view class="feature-item">🎧 冥想引导：专业心理语音缓解压力</view>
    </view>

    <view class="section audience">
      <text class="section-title">适用人群</text>
      <text class="section-text">适合失眠困扰者、压力过大人群、学生、老人等有助眠需求的用户。</text>
    </view>

    <view class="section reviews">
      <text class="section-title">用户评价</text>
      <view class="review-box">“用了枕月后，三分钟入睡，声音真的很治愈。”</view>
      <view class="review-box">“冥想引导 + 白噪音组合很有效，每天都离不开它。”</view>
    </view>

    <view class="section download" id="download">
      <text class="section-title">下载枕月 App</text>
      <text class="section-text">支持 iOS / Android</text>
      <view class="download-btns">
        <button class="btn-secondary" @tap="didClickIOS">TestFlight 下载</button>
        <button class="btn-secondary" @tap="didClickAndroid">应用宝下载</button>
      </view>
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
  </scroll-view>
</template>

<script lang="ts" setup>
//

const toDownload = () => {
  scrollView.value = 'download'
  // uni.pageScrollTo({ selector: '#download', duration: 300 })
  // window.location.href = 'https://testflight.apple.com/join/mdkP9Gve'
}
const didClickIOS = () => {
  window.location.href = 'https://testflight.apple.com/join/mdkP9Gve'
}
const scrollView = ref('')
const didClickAndroid = () => {
  uni.showModal({
    title: '微信提示',
    content: '敬请期待，Android 版本正在开发中。',
    showCancel: false,
    confirmText: '知道了',
  })
}
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
  width: 100%;
  height: 100vh;
  padding-bottom: env(safe-area-inset-bottom);
  .banner {
    // background: url('@/static/zhenyue/banner.jpg') center/cover no-repeat;
    padding: 32rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .logo {
      width: 160rpx;
      height: 160rpx;
      border-radius: 30rpx;
      margin-bottom: 20rpx;
      border-radius: 24px;
      background: url(<path-to-image>) lightgray 50% / cover no-repeat;
      box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    }
    .title {
      font-size: 42rpx;
      font-weight: bold;
      margin-bottom: 10rpx;
    }
    .banner-content {
      background: rgba(0, 0, 0, 0.4);
      padding: 30rpx;
      width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 16rpx;
      text-align: center;
      color: white;

      .subtitle {
        margin: 4rpx 0;
        font-size: 28rpx;
      }
    }
  }
  .btn-primary {
    margin-top: 20rpx;
    width: 100%;
    padding: 16rpx 40rpx;
    background: #3b76f2;
    color: white;
    border-radius: 50rpx;
    font-size: 28rpx;
  }
  .section {
    padding: 40rpx 30rpx;

    &-title {
      font-size: 36rpx;
      color: #4b3e6e;
      text-align: center;
      margin-bottom: 20rpx;
    }

    &-text {
      font-size: 28rpx;
      text-align: center;
      line-height: 1.6;
    }

    .feature-item {
      font-size: 28rpx;
      margin-bottom: 12rpx;
    }

    .review-box {
      background: #f9f9f9;
      padding: 20rpx;
      border-radius: 16rpx;
      margin-bottom: 20rpx;
      font-size: 28rpx;
    }

    .download-btns {
      margin-top: 20rpx;
      display: flex;
      justify-content: center;
      gap: 20rpx;

      .btn-secondary {
        padding: 16rpx 32rpx;
        background: #3b76f2;
        color: white;
        border-radius: 40rpx;
        font-size: 28rpx;
      }
    }
  }

  .footer {
    background: #f1f1f1;
    text-align: center;
    padding: 40rpx 20rpx;
    font-size: 24rpx;
    color: #666;
    display: flex;
    flex-direction: column;

    .footer-links {
      margin-top: 12rpx;
      color: #666;
    }
  }
}
</style>
