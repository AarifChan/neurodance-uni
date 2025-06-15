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
  <view class="protocol">
    <fg-navbar />
    <view class="page">
      <image class="product-img" src="/static/images/product-dsp.png" />
      <view class="title">隐私保护指引摘要</view>
      <view class="content">
        感谢您信任并使用
        <text style="color: #3b76f2">NeuronDance</text>
        ! 我们深知保护个人隐私信息的重要性，请在使用小睡眠的服务前，认真阅读我们的
        <text style="color: #3b76f2">《用户协议》</text>
        和
        <text style="color: #3b76f2">《隐私政策》</text>
        ，以帮助您了解我们在收集、使用、存储和共享您个人信息的情况以及您享有的相关权利。

        <view style="margin-top: 16px">
          请您仔细阅读并作出适当的选择：
          <br />
          1.《用户协议》的主要内容包括:
          协议适用范围、服务内容及形式、软件使用及许可、终端责任安全、用户权利与义务、用户行为规范、知识产权声明、用户信息保护。
          <br />
          2.关于《隐私政策》，我们特别向您说明
          <br />
          (1)根据合法、正当、必要的原则，我们会收集实现产品功能所必要的信息，包括:您在注册账号时所填写的信息(昵称、手机号码):您的日志信息及设备信息、设备型号;当您选择使用部分服务时，我们将在征求您的同意后获取相关提供服务所需的信息和权限。
          <br />
          (2）根据合法、正当、必要的原则，我们会收集实现产品功能所必要的信息，包括:您在注册账号时所填写的信息(昵称、手机号码):您的日志信息及设备信息、设备型号;当您选择使用部分服务时，我们将在征求您的同意后获取相关提供服务所需的信息和权限。
        </view>
        <view style="margin-top: 4px"></view>
      </view>
    </view>
    <image />
  </view>
</template>

<script lang="ts" setup>
//
</script>

<style lang="scss" scoped>
.protocol {
  position: relative;
  width: 100%;
  height: 100vh;
  background: linear-gradient(174deg, #bccef5, #fff);
}
.page {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.product-img {
  width: 320rpx;
  height: 320rpx;
}
.title {
  color: #1d2129;

  font-weight: 500;
  font-size: 40rpx;
}

.content {
  position: relative;
  width: 100%;
  padding: 32rpx;
  font-size: 28rpx;
  line-height: 40rpx;
  box-sizing: border-box;
}
</style>
