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

<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      alarmTime: '10:45',
      shallowTime: '10:30-10:45（15分钟）',
      wakeUpTime: '10:33',
    }
  },
  mounted() {},
  methods: {},
}
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
