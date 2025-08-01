<template>
  <view class="container-top">
    <view class="container">
      <!-- 当前时间显示 -->
      <view class="time-display">
        <text class="current-time">{{ currentTime }}</text>
      </view>

      <view class="container-null"></view>

      <!-- 显示选择的睡眠时间 -->
      <view class="selected-time">
        <text class="selected-time-text1">{{ selectedWakeUpTime }}</text>
        <text class="selected-time-text2">唤醒你</text>
        <!-- <text>睡眠时长: {{ sleepDuration }}</text> -->
      </view>

      <view class="wake_up_view">
        <image :src="icon_tip"></image>
        <view class="wake_up_tip">
          脑电闹钟会在您设定的唤醒区间种找到您的浅眠时刻，让您更舒适的苏醒
        </view>
      </view>
    </view>

    <!-- Canvas 环形滑块 -->
    <view class="canvas-container">
      <canvas
        canvas-id="sleepPicker"
        class="sleep-picker"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      ></canvas>
    </view>

    <!-- 唤醒区间 -->
    <wake-up-vue class="up-view" :number="numberText" @time="getTime"></wake-up-vue>
  </view>
</template>

<script>
import wakeUpVue from './wakeUp.vue'

export default {
  props: {},
  components: {
    wakeUpVue,
  },
  data() {
    return {
      currentTime: '00:00',
      currentHour: 0,
      currentMinute: 0,
      sleepDuration: '0小时0分钟',
      selectedBedTime: '00:00',
      selectedWakeUpTime: '00:00',
      canvasSize: 300,
      center: 150,
      radius: 120,
      isDragging: false,
      activeHandle: null, // 'bedTime' 或 'wakeUp'
      bedTimeAngle: 0, // 就寝时间角度
      wakeUpAngle: Math.PI, // 起床时间角度
      oldWakeUpAngle: Math.PI,
      timeUpdateInterval: null,
      icon_tip: 'https://ndweb.oss-rg-china-mainland.aliyuncs.com/app/icon_tishi.png',
      numberText: 0,
      wakeUpTime: Math.PI / 2,
      update: false,
    }
  },
  mounted() {
    this.getComponentSize()
    this.updateCurrentTime()

    this.SNBindingList()
  },
  onUnload() {
    clearInterval(this.timeUpdateInterval)
  },
  onReady() {
    this.drawSleepPicker()
  },
  methods: {
    // 起始时间
    startingTime(val) {
      const total = 24 * 60
      const now = new Date()
      const currentHour = now.getHours()
      const currentMinute = now.getMinutes()
      const totalMinutes = this.currentHour * 60 + this.currentMinute

      let every = (Math.PI * 2) / total
      let cAngle = every * totalMinutes
      let sAngle = every * val
      var newAngle = cAngle + sAngle - Math.PI / 2
      newAngle = this.normalizeAngle(newAngle)
      this.wakeUpAngle = newAngle
    },

    // 获取唤醒时间
    getTime(val) {
      if (val.data) {
        try {
          let number = Number(val.data)
          if (this.isNumber(number)) {
            this.numberText = val.data
            this.UpdateAlarm()
          }
        } catch (e) {}
      }
    },

    // 自动刷新
    autoRefresh() {
      // 每秒更新当前时间
      this.timeUpdateInterval = setInterval(() => {
        this.updateCurrentTime()
        this.drawSleepPicker()
      }, 300)
    },

    updateCurrentTime() {
      const now = new Date()
      this.currentHour = now.getHours()
      this.currentMinute = now.getMinutes()
      this.currentTime = `${this.formatTime(this.currentHour)}:${this.formatTime(this.currentMinute)}`

      // 更新当前时间对应的角度 (0点在顶部，顺时针方向)
      const total = 24 * 60
      const totalMinutes = this.currentHour * 60 + this.currentMinute
      this.bedTimeAngle = ((Math.PI * 2) / total) * totalMinutes - Math.PI / 2

      // 自动计算睡眠时长
      this.calculateSleepDuration()
    },

    formatTime(time) {
      return time < 10 ? `0${time}` : time
    },

    drawSleepPicker() {
      const ctx = uni.createCanvasContext('sleepPicker', this)
      const center = this.center
      const radius = this.radius

      // 清空画布
      ctx.clearRect(0, 0, this.canvasSize, this.canvasSize)

      // 绘制背景圆环
      ctx.beginPath()
      ctx.arc(center, center, radius, Math.PI * 2, 0)
      ctx.strokeStyle = 'rgba(32, 46, 82, 0.8)' // RGBA颜色（带透明度）
      ctx.lineWidth = uni.upx2px(123)
      ctx.stroke()

      // 绘制活动圆环 (从起床时间到就寝时间)
      ctx.beginPath()
      ctx.arc(center, center, radius, this.bedTimeAngle, this.wakeUpAngle)
      const gradient = ctx.createLinearGradient(0, 0, 200, 0)
      gradient.addColorStop(0, '#758BA2')
      gradient.addColorStop(1, '#495163')
      ctx.strokeStyle = gradient
      ctx.lineWidth = uni.upx2px(88)
      ctx.lineCap = 'round'
      ctx.stroke()

      // 唤醒区间
      this.wakeUpTime = this.wakeUpAngle - ((Math.PI * 2) / 1440) * this.numberText
      ctx.beginPath()
      ctx.arc(center, center, radius, this.wakeUpAngle, this.wakeUpTime, true)
      ctx.strokeStyle = 'rgba(255, 222, 113, 0.7)'
      ctx.lineWidth = uni.upx2px(88)
      ctx.lineCap = 'round'
      ctx.stroke()

      // 绘制当前时间标记 (固定)
      this.drawHandle(ctx, this.bedTimeAngle, '#A7C1FA', this.currentTime)

      // 绘制可调整的起床时间标记
      this.drawHandle(ctx, this.wakeUpAngle, '#FBC001', this.selectedWakeUpTime)

      ctx.draw()

      // 判断是否需要更新闹钟
      if (this.oldWakeUpAngle != this.wakeUpAngle && !this.update) {
        this.update = true
      } else if (this.oldWakeUpAngle == this.wakeUpAngle && this.update) {
        this.update = false
        this.UpdateAlarm()
      }

      this.oldWakeUpAngle = this.wakeUpAngle
    },

    drawHandle(ctx, angle, color, label) {
      const center = this.center
      const radius = this.radius
      const handleSize = uni.upx2px(19)

      // 计算手柄位置
      const x = center + Math.cos(angle) * radius
      const y = center + Math.sin(angle) * radius

      // 绘制手柄
      ctx.beginPath()
      ctx.arc(x, y, handleSize, 0, Math.PI * 2)
      ctx.fillStyle = color
      ctx.fill()
      ctx.strokeStyle = '#fff'
      ctx.lineWidth = uni.upx2px(6)
      ctx.stroke()

      // 绘制标签
      ctx.fillStyle = color
      ctx.font = uni.upx2px(22) + 'px Arial'
      ctx.textAlign = 'center'
      const labelX = center + Math.cos(angle) * (radius + 30)
      const labelY = center + Math.sin(angle) * (radius + 30) + 5
      ctx.fillText(label, labelX, labelY)
    },

    handleTouchStart(e) {
      const touch = e.touches[0]
      const x = touch.x
      const y = touch.y
      const center = this.center

      // 计算触摸点与圆心的距离和角度
      const dx = x - center
      const dy = y - center
      const distance = Math.sqrt(dx * dx + dy * dy)

      // 检查是否触摸到起床时间手柄
      if (Math.abs(distance - this.radius) < 20) {
        const touchAngle = Math.atan2(dy, dx)
        const angleDiff = Math.abs(this.normalizeAngle(touchAngle - this.wakeUpAngle))
        // console.log("angleDiff：" + angleDiff)
        if (angleDiff < 1.5 || angleDiff > 4.5) {
          // 阈值
          this.isDragging = true
          this.activeHandle = 'wakeUp'
          return
        }
      }
    },

    handleTouchMove(e) {
      if (!this.isDragging || this.activeHandle !== 'wakeUp') return
      const touch = e.touches[0]
      const x = touch.x
      const y = touch.y
      const center = this.center

      // 计算新角度
      const dx = x - center
      const dy = y - center
      let newAngle = Math.atan2(dy, dx)

      // 确保角度在0-2π范围内
      newAngle = this.normalizeAngle(newAngle)

      // 更新起床时间角度
      this.wakeUpAngle = newAngle

      // 计算睡眠时间
      this.calculateSleepDuration()

      // 重绘
      this.drawSleepPicker()
    },

    handleTouchEnd() {
      this.isDragging = false
      this.activeHandle = null
    },

    normalizeAngle(angle) {
      // 将角度规范到0-2π范围
      while (angle < 0) angle += Math.PI * 2
      while (angle >= Math.PI * 2) angle -= Math.PI * 2
      return angle
    },

    calculateSleepDuration() {
      // 计算角度差 (考虑跨越0点的情况)
      let angleDiff = this.wakeUpAngle - this.bedTimeAngle
      if (angleDiff < 0) angleDiff += Math.PI * 2

      // 将角度转换为分钟 (整个圆=24小时=1440分钟)
      const total = 24 * 60
      const sleepMinutes = Math.round((angleDiff / (Math.PI * 2)) * total)

      // 计算小时和分钟
      const hours = Math.floor(sleepMinutes / 60)
      const minutes = sleepMinutes % 60

      this.sleepDuration = `${hours}小时${minutes}分钟`

      // 计算并格式化就寝和起床时间
      this.calculateTimeFromAngles()
    },

    calculateTimeFromAngles() {
      // 计算就寝时间 (当前时间)
      const bedHours = this.currentHour
      const bedMinutes = this.currentMinute
      this.selectedBedTime = `${this.formatTime(bedHours)}:${this.formatTime(bedMinutes)}`

      // 计算起床时间 (从角度转换)
      const total = 24 * 60
      const wakeMinutes = Math.round((this.wakeUpAngle / (Math.PI * 2)) * total)
      var wakeMs = wakeMinutes + 360
      if (wakeMs >= 1440) wakeMs = wakeMs - 1440
      // console.log("wakeMs：" + wakeMs)

      let wakeHours = Math.floor(wakeMs / 60)
      const wakeMins = wakeMs % 60

      // 处理24小时制
      wakeHours = wakeHours % 24

      this.selectedWakeUpTime = `${this.formatTime(wakeHours)}:${this.formatTime(wakeMins)}`
    },

    // 获取画布实际尺寸
    getComponentSize() {
      const _this = this
      uni.getSystemInfo({
        success: function (res) {
          let obj = uni.createSelectorQuery().select('.sleep-picker')
          obj
            .boundingClientRect(function (data) {
              _this.canvasSize = data.width
              _this.center = Math.round(data.width / 2)
              _this.radius = Math.round(data.width / 2) - uni.upx2px(85)

              _this.autoRefresh() // 获取组件信息后启动刷新
            })
            .exec()
        },
      })
    },
    // 判断是否为数字
    isNumber(value) {
      return typeof value === 'number' && !isNaN(value)
    },
    // 获取当前用设备列表
    SNBindingList() {
      this.$http
        .request({
          url: this.$http.SN_BINDING_LIST,
          method: 'GET',
          data: {
            deviceType: 'WIRELESS-REPEATER-DSP',
          },
        })
        .then((res) => {
          if (res.state == 200) {
            uni.setStorageSync(this.$key.device, res)
            console.log(JSON.stringify(res))
            this.GetAlarm(res.data.sn)
          }
        })
    },
    // 获取闹钟
    GetAlarm(val) {
      this.$http
        .request({
          url: this.$http.ALARM_GETALARM,
          method: 'GET',
          data: {
            sn: val,
          },
        })
        .then((res) => {
          if (res.state == 200) {
            if (res.data.alarmClock != null) {
              this.numberText = res.data.timeRange
              let time = res.data.alarmClock.split(':')
              let Hour = Number(time[0]) * 60
              let Minute = Number(time[1])
              let clock = Hour + Minute

              let every = (Math.PI * 2) / 1440
              let cAngle = every * clock
              var newAngle = cAngle - Math.PI / 2
              newAngle = this.normalizeAngle(newAngle)
              this.wakeUpAngle = newAngle
            } else {
              this.startingTime(480) // 默认8小时
            }
          }

          // console.log(JSON.stringify(res));
        })
    },
    // 更新闹钟
    UpdateAlarm() {
      const _this = this

      const total = 24 * 60
      var upAngle = this.wakeUpAngle + Math.PI / 2
      if (upAngle >= Math.PI * 2) upAngle = upAngle - Math.PI * 2
      const sleepMinutes = Math.round((upAngle / (Math.PI * 2)) * total)
      const hours = Math.floor(sleepMinutes / 60)
      const minutes = sleepMinutes % 60

      // console.log(hours + ':' + minutes)

      this.$http
        .request({
          url: this.$http.UPDATE_ALARM,
          method: 'POST',
          data: {
            alarmClock: hours + ':' + minutes,
            timeRange: _this.numberText,
          },
        })
        .then((res) => {
          if (res.state == 200) {
            // console.log(res);
          }
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.container-top {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.time-display {
  margin-top: 130rpx;
  margin-bottom: 90rpx;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.current-time {
  font-size: 122rpx;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 1.28px;
}

.container-null {
  width: 680rpx;
  height: 680rpx;
}

.selected-time {
  margin-top: 32rpx;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
}

.selected-time-text1 {
  display: block;
  font-family: MiSans, MiSans;
  font-weight: 600;
  font-size: 42rpx;
  color: #fff;
  text-align: left;
  font-style: normal;
  text-transform: none;

  margin-right: 10rpx;
}

.selected-time-text2 {
  display: block;
  font-family: MiSans, MiSans;
  font-weight: 500;
  font-size: 38rpx;
  color: #a7c1fa;
  text-align: left;
  font-style: normal;
  text-transform: none;
}

.canvas-container {
  position: absolute;
  z-index: 2;
  margin-top: 280rpx;
}

.sleep-picker {
  width: 680rpx;
  height: 680rpx;
}

.up-view {
  position: absolute;
  z-index: 3;

  margin-top: 280rpx;
}

.wake_up_view {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20rpx;

  .wake_up_tip {
    font-family: MiSans, MiSans;
    font-weight: 500;
    font-size: 19rpx;
    color: #c9cdd4;
    text-align: left;
    font-style: normal;
    text-transform: none;

    margin-left: 8rpx;
  }
}

.wake_up_view image {
  width: 23rpx;
  height: 23rpx;
}
</style>
