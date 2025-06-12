<template>
  <view class="container">
    <!-- 当前时间显示 -->
    <view class="time-display">
      <text class="current-time">{{ currentTime }}</text>
      <text class="sleep-duration">睡眠时长: {{ sleepDuration }}</text>
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

    <!-- 显示选择的睡眠时间 -->
    <view class="selected-time">
      <text>就寝时间: {{ selectedBedTime }}</text>
      <text>起床时间: {{ selectedWakeUpTime }}</text>
    </view>
  </view>
</template>

<script>
export default {
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
      wakeUpAngle: Math.PI / 2, // 起床时间角度
      timeUpdateInterval: null,
    }
  },
  onLoad() {
    this.updateCurrentTime()
    // 每秒更新当前时间
    this.timeUpdateInterval = setInterval(() => {
      this.updateCurrentTime()
      this.drawSleepPicker()
    }, 1000)
  },
  onUnload() {
    clearInterval(this.timeUpdateInterval)
  },
  onReady() {
    this.drawSleepPicker()
  },
  methods: {
    updateCurrentTime() {
      const now = new Date()
      this.currentHour = now.getHours()
      this.currentMinute = now.getMinutes()
      this.currentTime = `${this.formatTime(this.currentHour)}:${this.formatTime(this.currentMinute)}`

      // 更新当前时间对应的角度 (0点在顶部，顺时针方向)
      const totalMinutes = this.currentHour * 60 + this.currentMinute
      this.bedTimeAngle = ((totalMinutes / 720) * Math.PI * 2 - Math.PI / 2) % (Math.PI * 2)

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
      ctx.arc(center, center, radius, 0, Math.PI * 2)
      ctx.strokeStyle = '#4a90e2'
      ctx.lineWidth = 15
      ctx.stroke()

      // 绘制活动圆环 (从起床时间到就寝时间)
      ctx.beginPath()
      ctx.arc(center, center, radius, this.wakeUpAngle, this.bedTimeAngle)
      ctx.strokeStyle = '#e0e0e0'
      ctx.lineWidth = 15
      ctx.lineCap = 'round'
      ctx.stroke()

      // 绘制当前时间标记 (固定)
      this.drawHandle(ctx, this.bedTimeAngle, '#ff6b6b', '当前时间')

      // 绘制可调整的起床时间标记
      this.drawHandle(ctx, this.wakeUpAngle, '#4caf50', '起床时间')

      // 绘制中心文字
      ctx.fillStyle = '#333'
      ctx.font = '16px Arial'
      ctx.textAlign = 'center'
      ctx.fillText('调整起床时间', center, center)

      ctx.draw()
    },

    drawHandle(ctx, angle, color, label) {
      const center = this.center
      const radius = this.radius
      const handleSize = 10

      // 计算手柄位置
      const x = center + Math.cos(angle) * radius
      const y = center + Math.sin(angle) * radius

      // 绘制手柄
      ctx.beginPath()
      ctx.arc(x, y, handleSize, 0, Math.PI * 2)
      ctx.fillStyle = color
      ctx.fill()
      ctx.strokeStyle = '#fff'
      ctx.lineWidth = 2
      ctx.stroke()

      // 绘制标签
      ctx.fillStyle = color
      ctx.font = '12px Arial'
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

        if (angleDiff < 0.3) {
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
      const sleepMinutes = Math.round((angleDiff / (Math.PI * 2)) * 1440)

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
      const wakeMinutes = Math.round((this.wakeUpAngle / (Math.PI * 2)) * 1440)
      let wakeHours = Math.floor(wakeMinutes / 60)
      const wakeMins = wakeMinutes % 60

      // 处理24小时制
      wakeHours = wakeHours % 24

      this.selectedWakeUpTime = `${this.formatTime(wakeHours)}:${this.formatTime(wakeMins)}`
    },
  },
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.time-display {
  margin-bottom: 20px;
  text-align: center;
}

.current-time {
  font-size: 24px;
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
}

.sleep-duration {
  font-size: 16px;
  color: #666;
}

.canvas-container {
  margin: 20px 0;
}

.sleep-picker {
  width: 300px;
  height: 300px;
}

.selected-time {
  margin-top: 20px;
  text-align: center;
}

.selected-time text {
  display: block;
  margin: 5px 0;
  font-size: 16px;
}
</style>
