<template>
  <view class="privacy-agreement" @click.stop="agreePrivacy = !agreePrivacy">
    <check-box :checked="agreePrivacy" style="margin-right: 10px" />
    <view class="agreement-text">
      <text class="agreement-title">同意NeuroDance</text>
      <text class="agreement-link" @click.stop="handleAgreement('user')">
        《天翼服务及隐私协议》
      </text>
      <text class="agreement-link" @click.stop="handleAgreement('user')">《用户协议》</text>
      <text>和</text>
      <text class="agreement-link" @click.stop="handleAgreement('privacy')">《隐私政策》</text>
    </view>
  </view>
</template>

<script lang="ts" setup>
// 隐私协议勾选状态
const agreePrivacy = ref(true)
// 处理协议点击
const handleAgreement = (type: 'user' | 'privacy') => {
  const title = type === 'user' ? '用户协议' : '隐私政策'
  // showToast(`查看${title}`)
  // 实际项目中可以跳转到对应的协议页面
  // uni.navigateTo({
  //   url: `/pages/agreement/${type}`
  // })
}
</script>

<style lang="scss" scoped>
.privacy-agreement {
  display: flex;
  justify-content: center;
  margin: 30rpx 0 40rpx;
  animation: fadeIn 0.8s ease-out 0.4s both;

  .privacy-checkbox {
    display: flex;
    align-items: center;
  }

  .agreement-text {
    line-height: 1.6;
    color: #86909c;
    font-size: 20rpx;
    width: 384rpx;
    text-align: center;
    .agreement-title {
      font-style: normal;
      font-weight: 330;
      transition: all 0.3s ease;
    }
    .agreement-link {
      color: var(--wot-color-theme, #4e5969);
      transition: all 0.3s ease;

      &:active {
      }
    }
  }
}
</style>
