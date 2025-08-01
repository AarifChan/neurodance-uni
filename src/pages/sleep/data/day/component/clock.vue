<!-- 首页 - 闹钟icon -->
<template>
  <view class="clockView">
    <image class="clockView-bg" src="/static/images/sleep/clock-item-bg.png" />
    <view class="clockView-content">
      <view class="clockView-side">
        <view class="clockView-left-title">脑电闹钟</view>
        <view class="clockView-left-subTitle">
          <text class="text-label">闹钟：</text>
          <text class="text-value">{{ alarmTime }}</text>
        </view>
        <view class="clockView-left-subTitle">
          <text class="text-label">浅睡唤醒区间：</text>
          <text class="text-value">{{ shallowTime }}</text>
        </view>
      </view>
      <view class="clockView-side">
        <view class="row">
          <view class="wakeUp-label">唤醒时刻</view>
          <text class="wakeUp-value">{{ wakeUpTime }}</text>
        </view>
        <text class="clockView-tips">浅睡轻柔唤醒，惬意无负担</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { SleepData } from '@/api/sleep/index'
import { PropType } from 'vue'
import { formatTimestamp } from '@/utils/date'
const props = defineProps({
  report: {
    default: null,
    type: Object as PropType<SleepData | null>,
  },
})
watch(
  () => props.report,
  (newVal) => {
    if (newVal) {
      let duration = (newVal.wakeupTimeEnd - newVal.wakeupTimeStart) / 1000 / 60
      alarmTime.value = formatTimestamp(newVal.wakeupTimeEnd, 'HH:mm')
      shallowTime.value = `${formatTimestamp(newVal.wakeupTimeStart, 'HH:mm')}-${formatTimestamp(newVal.wakeupTimeEnd, 'HH:mm')}（${duration}分钟）`
    } else {
      alarmTime.value = '00:00'
      shallowTime.value = '00:00-00:00（0分钟）'
      wakeUpTime.value = '00:00'
    }
  },
)
const alarmTime = ref('00:00')
const shallowTime = ref('00:00-00:00（分钟）')
const wakeUpTime = ref('00:00')
</script>

<style lang="scss" scoped>
.clockView {
  position: relative;
  margin: 0 32rpx;
  width: calc(100% - 64rpx);
  box-sizing: border-box;
  border-radius: 20rpx;
  overflow: hidden;
}
.clockView-bg {
  width: 686rpx;
  height: calc(686rpx / 361 * 87);
}

.clockView-content {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 32rpx;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.clockView-side {
  display: flex;
  flex-direction: column;
  gap: 6rpx;
}
.row {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8rpx;
}
.clockView-tips {
  color: #3b76f2;
  font-size: 20rpx;
}

.clockView-left-title {
  color: #1d2129;
  font-size: 32rpx;
  font-weight: 600;
}
.clockView-left-subTitle {
  display: flex;
  flex-direction: row;
  font-size: 20rpx;
}
.text-label {
  color: #4e5969;
}
.text-value {
  color: #86909c;
}
.wakeUp-label {
  border-radius: 2px;
  background: linear-gradient(270deg, #6597ec 0%, #88b4fe 100%);
  color: white;
  padding: 4rpx 8rpx;
  font-size: 20rpx;
}
.wakeUp-value {
  font-size: 48rpx;
  background: linear-gradient(270deg, #2c53f1 0%, #466df9 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
