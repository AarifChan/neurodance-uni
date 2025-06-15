<route lang="json5">
{
  style: {
    navigationBarTitleText: '',
    navigationStyle: 'custom',
    disableScroll: true,
  },
}
</route>

<template>
  <view class="page">
    <fg-navbar />
    <view class="profile-info-container">
      <form ref="formRef">
        <view class="form-wrapper">
          <view class="avatar-field">
            <image class="avatar-img" :src="formData.pic" />
            <image class="avatar-change" src="/static/images/change-avatar.png" />
          </view>
          <view class="form-group">
            <!-- 昵称 -->
            <view class="form-row">
              <text class="field-label">昵称</text>
              <input
                prop="name"
                clearable
                v-model="formData.name"
                :no-border="true"
                placeholder="请输入昵称"
                :rules="[{ required: true, message: '请填写昵称' }]"
                class="form-input"
              />
            </view>
            <view class="form-row">
              <text class="field-label">账号</text>
              <text class="field-value">{{ formData.mobile }}</text>
            </view>

            <!-- 性别 -->
            <view class="form-row">
              <text class="field-label">性别</text>
              <view class="sex-field">
                <view
                  class="sex-item"
                  :class="Number(formData.sex) === 0 ? 'active' : ''"
                  @tap.stop="formData.sex = 0"
                >
                  女
                </view>
                <view
                  class="sex-item"
                  :class="Number(formData.sex) === 1 ? 'active' : ''"
                  @tap.stop="formData.sex = 1"
                >
                  男
                </view>
              </view>
            </view>
            <view class="form-row">
              <text class="field-label">生日</text>
              <view class="birth-field">
                <view class="birth-item">
                  <text>1990</text>
                  <text class="birth-unit">年</text>
                </view>
                <view class="birth-item">
                  <text>3</text>
                  <text class="birth-unit">月</text>
                </view>
                <view class="birth-item">
                  <text>3</text>
                  <text class="birth-unit">日</text>
                </view>
              </view>
            </view>
            <view class="form-row">
              <text class="field-label">地区</text>
              <view class="location-field">
                <text class="field-value">{{ formData.area }}</text>
                <image src="/static/images/location.png" />
              </view>
            </view>
            <view class="form-row">
              <text class="field-label">软件版本</text>
              <text class="field-value">{{ getAppVersion }}</text>
            </view>
          </view>
          <!-- 操作按钮 -->
          <view class="form-actions">
            <view class="save-button" @click="logoutAlertShow = true">退出登录</view>
            <view class="sys-btn">
              <image src="/static/images/question.png" />
              <text>系统问题</text>
            </view>
          </view>
        </view>
      </form>
    </view>
    <CustomModal
      v-model:show="logoutAlertShow"
      title="确定退出当前账号"
      confirm-title="退出"
      @confirm="handleLogout"
    />
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useUserStore } from '@/store'
import { storeToRefs } from 'pinia'
import { toast } from '@/utils/toast'
import { updateInfo } from '@/api/login'
import LogoutModal from '@/components/logout-modal/logout-modal.vue'
import { getAppVersion } from '@/utils'
import { uploadFileUrl, useUpload } from '@/utils/uploadFile'
import { IUploadSuccessInfo } from '@/api/login.typings'
// 表单引用
const formRef = ref(null)
const logoutAlertShow = ref(false)

// 用户信息
const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)

// 表单数据
const formData = ref({
  pic: userInfo.value.pic,
  name: userInfo.value.name,
  mobile: userInfo.value.phone,
  sex: userInfo.value.sex,
  area: userInfo.value.area,
})

// #ifndef MP-WEIXIN
// 上传头像
const { run } = useUpload<IUploadSuccessInfo>(
  uploadFileUrl.USER_AVATAR,
  {},
  {
    onSuccess: (res) => useUserStore().getUserInfo(),
  },
)
// #endif

// #ifdef MP-WEIXIN

// 微信小程序下选择头像事件
const onChooseAvatar = (e: any) => {
  console.log('选择头像', e.detail)
  const { avatarUrl } = e.detail
  const { run } = useUpload<IUploadSuccessInfo>(
    uploadFileUrl.USER_AVATAR,
    {},
    {
      onSuccess: (res) => useUserStore().getUserInfo(),
    },
    avatarUrl,
  )
  run()
}
// #endif
const handleLogout = () => {
  userStore.logout()
  uni.navigateBack()
}
</script>

<style lang="scss" scoped>
.profile-info-container {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 32rpx 70rpx;
  box-sizing: border-box;
}
.form-row {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 32rpx 0;
  border-bottom: 1rpx solid #c9cdd4;
}
.form-row:last-child {
  border-bottom: none;
}

.profile-card {
  width: 100%;

  overflow: hidden;
}

.avatar-field {
  position: relative;
  width: 164rpx;
  height: 164rpx;
}
.avatar-img {
  width: 100%;
  height: 100%;
  background-color: #3b76f2;
  border-radius: 50%;
}
.avatar-change {
  position: absolute;
  bottom: -8rpx;
  right: 28rpx;
  width: 38rpx;
  height: 38rpx;
}
.form-wrapper {
  padding: 30rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group {
  position: relative;
  width: 100%;
  margin-bottom: 40rpx;
  display: flex;
  flex-direction: column;
}

.form-input {
  font-size: 30rpx;
  text-align: right;
}

.sex-field {
  display: flex;
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 16rpx;
}
.sex-item {
  width: 84rpx;
  height: 56rpx;
  border-radius: 12rpx;
  line-height: 56rpx;
  font-size: 24rpx;
  color: #4e5969;
  border: 1rpx solid #c9cdd4;
  text-align: center;
}

.field-label {
  width: 160rpx;
  font-size: 28rpx;
  color: #000;
  text-align: left;
}

.birth-field {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16rpx;
}
.birth-item {
  background-color: #a7c1fa;
  color: #4e5969;
  padding: 8rpx 16rpx;
  border: 1rpx solid #c9cdd4;
  font-size: 28rpx;
  line-height: 32rpx;
  border-radius: 12rpx;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4rpx;
}
.radio-group {
  flex: 1;
  display: flex;
  gap: 20rpx;
}

.field-value {
  color: #4e5969;
  font-size: 28rpx;
  text-align: right;
  font-weight: 380;
}
.radio-btn {
  flex: 1;
  height: 80rpx;
  line-height: 80rpx;
  text-align: center;
  font-size: 30rpx;
  border-radius: 12rpx;
  background-color: #f5f7fa;

  &:active {
    opacity: 0.8;
  }
}

.form-actions {
  margin-top: 200rpx;
  display: flex;
  flex-direction: column;

  align-items: center;
}
.birth-unit {
  font-size: 20rpx;
  color: #86909c;
}
.save-button {
  width: 324rpx;
  height: 90rpx;
  background-color: #a7c1fa;
  line-height: 90rpx;
  border-radius: 24rpx;
  text-align: center;
  font-size: 32rpx;
  font-style: normal;
  color: #4e5969;
  font-weight: 520;
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
.location-field {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16rpx;
  image {
    width: 36rpx;
    height: 36rpx;
  }
}

.active {
  background-color: #a7c1fa;
}
</style>
