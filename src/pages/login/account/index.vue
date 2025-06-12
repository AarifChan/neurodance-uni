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
      <view class="login-title">登录</view>
    </view>
    <view class="login-form">
      <view class="login-desc">未注册的手机号验证后将自动注册</view>
      <view class="login-input-group">
        <view class="input-wrapper">
          <view class="prefix-title">+86</view>
          <input
            v-model="moible"
            placeholder="请输入手机号"
            placeholder-class="placeholder"
            class="login-input"
            :maxlength="11"
            type="number"
          />
        </view>
      </view>

      <!-- 登录按钮组 -->
      <view class="login-buttons">
        <!-- 账号密码登录按钮 -->
        <customBtn title="获取验证码" type="primary" @click.stop="handleFetchSmsCode" />
      </view>
      <view class="login-tab" @click.stop="handleOtherLogin">本机号码一键登录</view>
    </view>

    <!-- 隐私协议勾选 -->
    <PrivacyAgreement v-model:agree-privacy="agreePrivacy" />

    <OtherLogin />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/store/user'
import { getCode, ILoginForm } from '@/api/login'
import { toast } from '@/utils/toast'
import { isTableBar } from '@/utils/index'
import { ICaptcha } from '@/api/login.typings'
import PrivacyAgreement from '../components/privacy-agreement.vue'
import customBtn from '../components/custom-btn.vue'
import OtherLogin from '../components/other-login.vue'
const redirectRoute = ref('')

// 初始化store
const userStore = useUserStore()
// 路由位置

// 登录表单数据
const moible = ref('')
// 隐私协议勾选状态
const agreePrivacy = ref(false)

// 页面加载完毕时触发
onLoad((option) => {
  // 一进来就刷新验证码

  // 获取跳转路由
  if (option.redirect) {
    redirectRoute.value = option.redirect
  }
})
const handleFetchSmsCode = () => {
  if (moible.value.length === 0) {
    toast.info('请输入手机号')
    return
  }
  if (moible.value.length !== 11) {
    toast.info('请输入正确的手机号')
    return
  }
  uni.navigateTo({
    url: `/pages/login/verification/index?mobile=${moible.value}`,
  })
}

const handleOtherLogin = () => {
  uni.redirectTo({
    url: '/pages/login/index',
  })
}
</script>

<style lang="scss" scoped>
.login-container {
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 70rpx;
  background-color: #ffffff;
  overflow: hidden;
}

.login-header {
  display: flex;
  flex-direction: column;
  margin-top: 120rpx;
  animation: fadeInDown 0.8s ease-out;

  .login-title {
    margin-top: 30rpx;
    font-size: 64rpx;
    font-weight: bold;
    color: #333333;
    letter-spacing: 3rpx;
    text-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.05);
  }
}

.login-form {
  flex: 1;
  margin-top: 200rpx;
  animation: fadeIn 0.8s ease-out 0.2s both;
  display: flex;
  flex-direction: column;
  gap: 28rpx;
  .login-desc {
    font-size: 24rpx;
    color: #86909c;
    text-align: left;
  }
  .login-tab {
    color: #86909c;
    font-size: 28rpx;
    font-style: normal;
    font-weight: 330;
    line-height: normal;
  }

  .login-input-group {
    position: relative;
    z-index: 1;
    width: 600rpx;
    .input-wrapper {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      transition: all 0.3s ease;
      border-radius: 16rpx;
      overflow: hidden;
      padding: 24rpx 32rpx;

      border-radius: 12px;
      background: #f3f3f3;
      .prefix-title {
        color: #4e5969;
        font-size: 32rpx;
        font-weight: 520;
      }

      .login-input {
        margin: 0 20rpx;
        transition: all 0.3s ease;
        background-color: transparent;
        border-bottom: none;
        font-size: 30rpx;
        font-weight: 520;
        color: #4e5969;

        .placeholder {
          font-size: 32rpx;
          font-weight: 520;
          color: #c9cdd4;
        }
      }
    }
  }

  .login-buttons {
    display: flex;
    flex-direction: column;
    gap: 36rpx;

    .account-login-btn {
      height: 96rpx;
      margin-top: 20rpx;
      font-size: 32rpx;
      font-weight: 500;
      border-radius: 24rpx;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;

      .login-icon {
        margin-right: 8rpx;
        opacity: 0.8;
        transition: all 0.3s ease;
      }

      &:active {
        box-shadow: 0 5rpx 10rpx rgba(25, 137, 250, 0.2);
        transform: scale(0.98);

        .login-icon {
          transform: translateX(3rpx);
        }
      }
    }

    .divider {
      display: flex;
      align-items: center;
      margin: 24rpx 0;

      .divider-line {
        flex: 1;
        height: 1px;
        background-color: #eeeeee;
      }

      .divider-text {
        padding: 0 24rpx;
        font-size: 24rpx;
        color: #999999;
      }
    }

    .wechat-login-btn {
      height: 96rpx;
      font-size: 32rpx;
      color: #07c160;
      border-color: #07c160;
      border-radius: 48rpx;
      transition: all 0.3s ease;

      .wechat-icon {
        margin-right: 12rpx;
      }

      &:active {
        background-color: rgba(7, 193, 96, 0.08);
        transform: scale(0.98);
      }
    }
  }
}
</style>
