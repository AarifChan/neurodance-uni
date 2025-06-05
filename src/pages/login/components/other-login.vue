<template>
  <view class="other-login">
    <view class="other-login-top">
      <view class="line" />
      <view class="other-login-title">其他登录方式</view>
      <view class="line" />
    </view>
    <image class="wechat" src="/static/images/wechat.png" />
    <view class="title">微信一键登录</view>
  </view>
</template>

<script lang="ts" setup>
//
</script>

<style lang="scss" scoped>
.other-login {
  padding: 50rpx 0 calc(env(safe-area-inset-bottom) + 80px);
  position: relative;
  width: 100%;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  .other-login-top {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 6px;
    .other-login-title {
      color: #989898;
      font-size: 24rpx;
    }
    .line {
      height: 1rpx;
      width: 30%;
      background-color: #f1f1f1;
    }
  }
  .wechat {
    width: 44px;
    height: 44px;
  }
  .title {
    color: #989898;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 330;
    line-height: normal;
  }
}
</style>
