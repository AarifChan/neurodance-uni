<route lang="json5" type="page">
{
  style: {
    navigationBarTitleText: '',
    navigationStyle: 'custom',
  },
}
</route>
<template>
  <view class="login-container">
    <!-- 背景装饰元素 -->

    <view class="login-header">
      <RippleCircles />
      <image class="login-logo" src="/static/images/login/login-device.png" />
    </view>
    <view class="login-form">
      <view class="login-auto-phone">181****7196</view>
      <view class="login-desc">天翼账号提供认证服务</view>
      <!-- 登录按钮组 -->
      <view class="login-buttons">
        <!-- 账号密码登录按钮 -->
        <CustomBtn title="本机号码一键登录" type="primary" />
        <CustomBtn title="其他手机账号登录" type="other" @click.stop="navOtherMobileLogin" />
      </view>
    </view>
    <!-- 隐私协议勾选 -->
    <PrivacyAgreement />

    <OtherLogin />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/store/user'
import { toast } from '@/utils/toast'
import { isTableBar } from '@/utils/index'
import RippleCircles from './components/RippleCircles.vue'
import PrivacyAgreement from './components/privacy-agreement.vue'
import OtherLogin from './components/other-login.vue'
import CustomBtn from './components/custom-btn.vue'
import { ICaptcha } from '@/api/login.typings'
const redirectRoute = ref('')

// 初始化store
const userStore = useUserStore()
// 路由位置
// 验证码图片
const captcha = ref<ICaptcha>({
  captchaEnabled: false,
  uuid: '',
  image: '',
})

// 页面加载完毕时触发
onLoad((option) => {
  // 获取跳转路由
  if (option.redirect) {
    redirectRoute.value = option.redirect
  }
})

const navOtherMobileLogin = () => {
  uni.redirectTo({
    url: '/pages/login/account/index',
  })
}
</script>

<style lang="scss" scoped>
.login-container {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 70rpx;
  background-color: #ffffff;
  width: 100%;
  position: relative;
  overflow: hidden;
  align-items: center;
}

.login-header {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 300px;
  height: 300px;
  animation: fadeInDown 0.8s ease-out;

  .login-logo {
    position: absolute;
    top: 60px;
    left: 60px;
    width: 180px;
    height: 180px;

    transition: all 0.3s ease;

    &:active {
      box-shadow: 0 6rpx 15rpx rgba(0, 0, 0, 0.1);
    }
  }

  .login-title {
    margin-top: 30rpx;
    font-size: 46rpx;
    font-weight: bold;
    color: #333333;
    letter-spacing: 3rpx;
    text-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.05);
  }
}

.login-form {
  animation: fadeIn 0.8s ease-out 0.2s both;

  .login-auto-phone {
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 520;
    line-height: normal;
    text-align: center;
    letter-spacing: 1rpx;
  }

  .login-desc {
    color: #86909c;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 330;
    line-height: normal;
    text-align: center;
  }

  .login-buttons {
    margin-top: 80rpx;
    display: flex;
    flex-direction: column;
    gap: 28rpx;
  }
}

/* 添加动画效果 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
