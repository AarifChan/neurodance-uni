<route lang="json5">
{
  layout: 'tabbar',
  style: {
    navigationBarTitleText: '',
    disableScroll: true,
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <scroll-view class="profile" :scroll-y="true" :enable-flex="true">
    <view class="profile-container">
      <!-- 用户信息区域 -->
      <view class="user-info-section">
        <view class="side">
          <view class="avatar-wrapper" :src="userStore.userInfo.pic">
            {{ userAvatar }}
          </view>
          <view class="username theme-font" @tap.stop="handleLogin">
            {{ userStore.userInfo.name }}
          </view>
        </view>
        <view v-if="hasLogin" class="side logout" @click.stop="showLogout = true">
          <view class="logout-title">退出登录</view>
          <image class="logout-icon" src="/static/images/logout.png" />
        </view>
      </view>

      <view class="section-group">
        <view class="mine-device">
          <view class="mine-device-title">我的设备</view>
          <view class="mine-device-device">
            <view class="mine-device-device-name">DSP</view>
            <image class="mine-device-device-icon" src="/static/images/right-arrow.png" />
          </view>
          <view class="mine-device-subTitle">上次连接时间:2024-10-30-16:32:28</view>
        </view>
        <image class="device-card" src="/static/images/device-card.png" />
      </view>
      <view class="section-group">
        <view class="session-top">
          <view class="session-top-title">个人信息</view>
          <view class="session-top-value" @click="handleProfileInfo">
            <view class="session-top-value-title">编辑资料</view>
            <image class="session-top-value-icon" src="/static/images/right-arrow-gray.png" />
          </view>
        </view>
        <view class="session-row">
          <view class="session-row-title">绑定账号</view>
          <view class="session-row-right">
            <image class="common-icon" src="/static/images/wechat.png" />
          </view>
        </view>
        <view class="session-row">
          <view class="session-row-title">个人数据</view>
          <view class="session-row-right">
            <view class="session-row-right-title">性别,出生年月</view>
          </view>
        </view>
        <view class="session-row none-border">
          <view class="session-row-title">用户协议</view>
          <view class="session-row-right">
            <view class="session-row-right-title">了解更多</view>
            <image class="session-row-right-icon" src="/static/images/right-arrow-gray.png" />
          </view>
        </view>
      </view>
      <view class="section-group">
        <view class="session-top">
          <view class="session-top-title">了解我们</view>
          <view class="session-top-value">
            <view class="session-top-value-title">进入官网</view>
            <image class="session-top-value-icon" src="/static/images/right-arrow-gray.png" />
          </view>
        </view>
        <image class="logo-card" src="/static/images/logo.png" />
      </view>
    </view>
    <LogoutModal v-model:show="showLogout" @confirm="handleLogout" />
  </scroll-view>
</template>

<script lang="ts" setup>
import { useUserStore, useDeviceStore } from '@/store'
import { useToast } from 'wot-design-uni'
import LogoutModal from '@/components/logout-modal/logout-modal.vue'
import { bindDeviceRequest } from '@/api/device'
import { showToast } from '@/utils/toast'

const userStore = useUserStore()
const showLogout = ref(false)
const toast = useToast()

const hasLogin = computed(() => {
  return !!userStore.accessToken
})

onShow((options) => {
  console.log('个人中心onShow', hasLogin.value, options)

  hasLogin.value && useUserStore().getUserInfo()
  hasLogin.value && useDeviceStore().getBindDeviceList()
})

const handleTestFunc = () => {
  useDeviceStore().starbindDevice({
    sn: 'A6PAAAACGPHTest03',
    deviceType: 'WIRELESS-REPEATER-DSP',
  })
}

const userAvatar = computed(() => {
  if (!hasLogin.value || userStore.userInfo.name.length === 0) {
    return ''
  }

  return userStore.userInfo.name.slice(0, 1).toLocaleUpperCase()
})

const handleLogin = async () => {
  if (hasLogin.value) {
    return
  }
  uni.navigateTo({ url: '/pages/login/index' })
}

// #ifdef MP-WEIXIN
// 微信小程序下设置用户名
const getUserInfo = (e: any) => {
  console.log(e.detail)
}
// #endif

// 个人资料
const handleProfileInfo = () => {
  uni.navigateTo({ url: `/pages/mine/info/index` })
}

const handleLogout = () => {
  userStore.logout()
}

// 消息通知
const handleInform = () => {
  // uni.navigateTo({ url: `/pages/mine/inform/index` })
  toast.success('功能开发中')
}
// 应用更新
const handleAppUpdate = () => {
  // #ifdef MP
  // #ifndef MP-HARMONY
  const updateManager = uni.getUpdateManager()
  updateManager.onCheckForUpdate(function (res) {
    // 请求完新版本信息的回调
    // console.log(res.hasUpdate)
    if (res.hasUpdate) {
      toast.success('检测到新版本，正在下载中...')
    } else {
      toast.success('已是最新版本')
    }
  })
  updateManager.onUpdateReady(function (res) {
    uni.showModal({
      title: '更新提示',
      content: '新版本已经准备好，是否重启应用？',
      success(res) {
        if (res.confirm) {
          // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
          updateManager.applyUpdate()
        }
      },
    })
  })
  updateManager.onUpdateFailed(function (res) {
    // 新的版本下载失败
    toast.error('新版本下载失败')
  })
  // #endif
  // #endif

  // #ifndef MP
  toast.success('功能开发中')
  // #endif
}
// 关于我们
const handleAbout = () => {
  uni.navigateTo({ url: `/pages/mine/about/index` })
}
// 清除缓存
const handleClearCache = () => {
  uni.showModal({
    title: '清除缓存',
    content: '确定要清除所有缓存吗？\n清除后需要重新登录',
    success: (res) => {
      if (res.confirm) {
        try {
          // 清除所有缓存
          uni.clearStorageSync()
          // 清除用户信息并跳转到登录页
          useUserStore().logout()
          toast.success('清除缓存成功')
        } catch (err) {
          console.error('清除缓存失败:', err)
          toast.error('清除缓存失败')
        }
      }
    },
  })
}
</script>

<style lang="scss" scoped>
/* 基础样式 */
.profile {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: $primary-bg;
}
.profile-container {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 32rpx;
  box-sizing: border-box;
  gap: 18px;
}
/* 用户信息区域 */
.user-info-section {
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  flex-direction: row;
  justify-content: space-between;
}
.side {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.logout {
  &-title {
    color: #86909c;
    font-size: 14px;
    font-style: normal;
    font-weight: 305;
    line-height: normal;
  }
  &-icon {
    width: 25px;
    height: 25px;
  }
}

.avatar-wrapper {
  width: 160rpx;
  height: 160rpx;
  overflow: hidden;
  background-color: #3b76f2;
  border-radius: 50%;
  line-height: 160rpx;
  color: white;
  font-size: 72rpx;
  text-align: center;
}

.username {
  margin-left: 14px;
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 450;
  line-height: normal;
}

.section-group {
  position: relative;
  padding: 14px 18px;
  background-color: #fff;
  border-radius: 14rpx;
}
.sleep-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  &-title {
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 450;
    line-height: normal;
  }
  &-right {
    display: flex;
    flex-direction: row;
    align-items: center;
    &-value {
      color: $primary-blue;
      font-size: 24px;
      font-style: normal;
      font-weight: 520;
      line-height: normal;
    }
    &-unit {
      color: #000;
      font-size: 15px;
      font-style: normal;
      font-weight: 380;
      line-height: normal;
    }
  }
}
.mine-device {
  display: flex;
  flex-direction: column;
  &-title {
    color: #1d2129;
    font-size: 16px;
    font-style: normal;
    font-weight: 520;
    line-height: normal;
  }
  &-device {
    margin-top: 33px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
    &-name {
      color: $primary-blue;
      font-size: 20px;
      font-style: normal;
      font-weight: 450;
      line-height: normal;
    }
    &-icon {
      width: 7px;
      height: 13px;
    }
  }
  &-subTitle {
    color: #86909c;
    font-size: 10px;
    font-style: normal;
    font-weight: 330;
    line-height: normal;
  }
}
.device-card {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 145px;
  height: 118px;
}
.session-top {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 21px;
  &-title {
    color: #1d2129;
    font-size: 16px;
    font-style: normal;
    font-weight: 520;
    line-height: normal;
  }
  &-value {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
    &-title {
      color: #86909c;
      font-size: 14px;
      font-style: normal;
      font-weight: 305;
      line-height: normal;
    }
    &-icon {
      width: 8px;
      height: 14px;
    }
  }
}
.session-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0;
  border-bottom: 0.5px solid #c9cdd4;
  &-title {
    color: #000;
    font-size: 14px;
    font-style: normal;
    font-weight: 305;
    line-height: normal;
  }
  &-right {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
    &-icon {
      width: 8px;
      height: 14px;
    }
    &-title {
      color: #86909c;
      font-size: 14px;
      font-style: normal;
      font-weight: 305;
      line-height: normal;
    }
  }
}

.none-border {
  border-bottom: none;
}

.common-icon {
  width: 28px;
  height: 28px;
}
.logo-card {
  width: 177px;
  height: 53px;
}
</style>
