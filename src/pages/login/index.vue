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
        <view class="account-login-btn main-bg-color">本机号码一键登录</view>
        <view class="account-login-btn other-bg-color">其他手机账号登录</view>
      </view>
    </view>
    <!-- 隐私协议勾选 -->
    <view class="privacy-agreement" @click.stop="agreePrivacy = !agreePrivacy">
      <view></view>
      <check-box :checked="agreePrivacy" />
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
    <view class="other-login">
      <view class="other-login-top">
        <view class="line" />
        <view class="other-login-title">其他登录方式</view>
        <view class="line" />
      </view>
      <image class="wechat" src="/static/images/wechat.png" />
      <view class="title">微信一键登录</view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/store/user'
import { isMpWeixin } from '@/utils/platform'
import { getCode, ILoginForm } from '@/api/login'
import { toast } from '@/utils/toast'
import checkBox from '@/components/check-box/check-box.vue'
import { isTableBar } from '@/utils/index'
import RippleCircles from './components/RippleCircles.vue'
import { ICaptcha } from '@/api/login.typings'
const redirectRoute = ref('')

// 获取环境变量
const appTitle = ref(import.meta.env.VITE_APP_TITLE || 'Unibest Login')

// 初始化store
const userStore = useUserStore()
// 路由位置
// 验证码图片
const captcha = ref<ICaptcha>({
  captchaEnabled: false,
  uuid: '',
  image: '',
})
// 登录表单数据
const loginForm = ref<ILoginForm>({
  username: 'admin',
  password: '123456',
  code: '',
  uuid: '',
})
// 隐私协议勾选状态
const agreePrivacy = ref(true)

// 页面加载完毕时触发
onLoad((option) => {
  // 一进来就刷新验证码
  captcha.value.captchaEnabled && refreshCaptcha()
  // 获取跳转路由
  if (option.redirect) {
    redirectRoute.value = option.redirect
  }
})

// 账号密码登录
const handleAccountLogin = async () => {
  if (!agreePrivacy.value) {
    toast.error('请阅读同意协议')
    return
  }
  // 表单验证
  if (!loginForm.value.username) {
    toast.error('请输入用户名')
    return
  }
  if (!loginForm.value.password) {
    toast.error('请输入密码')
    return
  }
  if (captcha.value.captchaEnabled && !loginForm.value.code) {
    toast.error('请输入验证码')
    return
  }
  // 执行登录
  await userStore.login(loginForm.value)
  // 跳转到首页或重定向页面
  const targetUrl = redirectRoute.value || '/pages/index/index'
  if (isTableBar(targetUrl)) {
    uni.switchTab({ url: targetUrl })
  } else {
    uni.redirectTo({ url: targetUrl })
  }
}

// 微信登录
const handleWechatLogin = async () => {
  if (!isMpWeixin) {
    toast.info('请在微信小程序中使用此功能')
    return
  }

  // 验证是否同意隐私协议
  if (!agreePrivacy.value) {
    toast.error('请先阅读并同意用户协议和隐私政策')
    return
  }
  // 微信登录
  await userStore.wxLogin()
  // 跳转到首页或重定向页面
  const targetUrl = redirectRoute.value || '/pages/index/index'
  if (isTableBar(targetUrl)) {
    uni.switchTab({ url: targetUrl })
  } else {
    uni.redirectTo({ url: targetUrl })
  }
}

// 刷新验证码
const refreshCaptcha = () => {
  // 获取验证码
  getCode().then((res) => {
    const { data } = res
    loginForm.value.uuid = data.uuid
    captcha.value = data
  })
}

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
  margin-top: 120rpx;
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

  .welcome-text {
    margin-bottom: 16rpx;
    font-size: 48rpx;
    font-weight: bold;
    color: #333333;
    text-align: center;
    letter-spacing: 1rpx;
  }
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
    width: 300px;
    margin-top: 80rpx;
    display: flex;
    flex-direction: column;
    gap: 28rpx;

    .account-login-btn {
      height: 45px;
      font-size: 16px;
      font-weight: 520;
      line-height: 45px;
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
  }
}

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

.main-bg-color {
  background-color: $primary-blue;
  color: #fff;
}
.other-bg-color {
  background-color: #efefef;
  color: #4e5969;
}
</style>
