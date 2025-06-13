<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '',
    navigationStyle: 'custom', // 开启自定义导航栏
  },
}
</route>

<template>
  <view class="page">
    <fg-navbar />
    <view class="verification-container">
      <view class="verification-header">
        <view class="verification-title">输入验证码</view>
      </view>
      <view class="verification">
        <view class="verification-tips">验证码已发送至 +86 {{ mobile }}</view>
        <view class="verification-input">
          <input
            class="verification-input-item"
            v-for="(item, index) in codes"
            :key="index"
            type="number"
            :maxlength="1"
            v-model="codes[index]"
            :focus="focusedIndex === index"
            @input="onInput(index)"
            @keydown="onKeydown($event, index)"
            ref="setInputRef"
          />
        </view>
        <view class="verification-time" v-if="isCounting">
          <text>重新发送</text>
          <text class="active">{{ countDown }}</text>
          <text>秒</text>
        </view>
        <view v-else class="verification-time" @tap.stop="handleGetCode">发送验证码</view>
        <CustomBtn
          title="立即登录"
          :type="canLogin ? 'primary' : 'other'"
          @tap.stop="handleLogin"
        />
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
//
import { getCode } from '@/api/login'
import { toast } from '@/utils/toast'
import CustomBtn from '../components/custom-btn.vue'
import { useUserStore } from '@/store/user'

// 定义验证码位数
const CODE_LENGTH = 4
// 4位验证码数组
const codes = ref<string[]>(Array(CODE_LENGTH).fill(''))

const operationId = ref('')
const mobile = ref<string>('')
const countDown = ref(60)
const isCounting = ref(false)
const focusedIndex = ref<number>(0)
const inputRefs = ref<(HTMLInputElement | null)[]>([])

const canLogin = computed(() => {
  let verificationCode = codes.value.join('')
  return (
    mobile.value.length === 11 && operationId.value.length !== 0 && verificationCode.length === 4
  )
})

onLoad((option) => {
  if (option.mobile) {
    mobile.value = `${option.mobile}`
  }
})

/**
 * 设置每个 input 的 ref（支持 v-for）
 */
const setInputRef = (el: HTMLInputElement | null) => {
  if (el && inputRefs.value.length < CODE_LENGTH) {
    inputRefs.value.push(el)
  }
}

function focusInput(index: number) {
  if (index < 0 || index >= CODE_LENGTH) return
  focusedIndex.value = -1 // reset to force re-focus on small programs
  nextTick(() => {
    focusedIndex.value = index

    // H5 / App 支持手动 focus()
    // #ifdef H5 || APP-PLUS
    nextTick(() => {
      inputRefs.value[index]?.focus?.()
    })
    // #endif
  })
}

const onInput = (index: number) => {
  const val = codes.value[index]
  if (!/^\d*$/.test(val)) {
    codes.value[index] = ''
    return
  }
  if (val.length === 1 && index < CODE_LENGTH - 1) {
    focusInput(index + 1)
  }
}

function onKeydown(e: KeyboardEvent, index: number) {
  if (e.key === 'Backspace' && !codes.value[index] && index > 0) {
    focusInput(index - 1)
  }
}
const handleGetCode = async () => {
  if (mobile.value.length !== 11) {
    return
  }
  console.log('handleGetCode:', mobile)
  getCode(mobile.value)
    .then((res) => {
      console.log('handleGetCode:', res.data)
      operationId.value = res.data
    })
    .catch((err) => {
      // console.log('err:')
      toast.info(err.data.title)
    })
}

const handleLogin = () => {
  let verificationCode = codes.value.join('')
  const params = {
    userName: mobile.value,
    operationId: operationId.value,
    verificationCode: verificationCode,
    sn: '',
    password: '',
  }
  useUserStore()
    .login(params)
    .then((res) => {
      toast.info('登录成功')
      uni.reLaunch({ url: '/pages/index/index' })
    })
    .catch((err) => {
      toast.info(err.data.title)
    })
}
</script>

<style lang="scss" scoped>
.verification-container {
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  background-color: #ffffff;
  overflow: hidden;
}

.verification-header {
  display: flex;
  flex-direction: column;
  margin-top: 16rpx;
  animation: fadeInDown 0.8s ease-out;

  .verification-title {
    font-size: 32px;
    font-weight: bold;
    color: #000;
    letter-spacing: 3rpx;
  }
}

.verification {
  margin-top: 200rpx;
  display: flex;
  flex-direction: column;
  gap: 28rpx;
  .verification-tips {
    color: #86909c;
    font-size: 12px;
    font-style: normal;
    font-weight: 330;
    line-height: normal;
  }
  .verification-input {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 18px;
    .verification-input-item {
      padding: 16px 0;
      width: 100%;
      aspect-ratio: 1;
      background-color: #f3f3f3;
      border-radius: 8rpx;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }
  .verification-time {
    font-size: 14px;
    font-style: normal;
    font-weight: 330;
    color: #86909c;
    .active {
      color: $primary-blue;
      margin: 0 4rpx;
    }
  }
}
</style>
