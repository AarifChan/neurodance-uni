<template>
  <view class="container">
    <!-- 当前时间显示 -->
    <view class="time-display">
      <text class="current-time">{{ currentTime }}</text>
      <text class="sleep-time">睡眠时长: {{ sleepDuration }}</text>
    </view>

    <!-- 环形滑块 -->
    <view class="canvas-container">
      <canvas
        canvas-id="sleepCanvas"
        class="canvas"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      ></canvas>
    </view>

    <!-- 时间显示 -->
    <view class="time-info">
      <text class="time-label">就寝时间: {{ formatTime(bedtime) }}</text>
      <text class="time-label">起床时间: {{ formatTime(wakeupTime) }}</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      currentTime: '', // 当前时间显示
      currentHour: 0, // 当前小时
      currentMinute: 0, // 当前分钟
      ctx: null, // canvas 上下文
      canvasWidth: 0, // canvas 宽度
      canvasHeight: 0, // canvas 高度
      centerX: 0, // 圆心x坐标
      centerY: 0, // 圆心y坐标
      radius: 0, // 圆半径
      bedtime: 0, // 就寝时间(分钟)
      isDragging: false, // 是否正在拖动
      dragHandle: null, // 当前拖动的滑块
      touchStartAngle: 0, // 触摸开始角度
    }
  },
  computed: {
    // 起床时间计算
    wakeupTime() {
      if (this.bedtime < this.currentTimeInMinutes) {
        return this.bedtime + 24 * 60
      }
      return this.bedtime
    },
    // 当前时间转换为分钟
    currentTimeInMinutes() {
      return this.currentHour * 60 + this.currentMinute
    },
    // 睡眠时长计算
    sleepDuration() {
      const duration = this.wakeupTime - this.currentTimeInMinutes
      const hours = Math.floor(duration / 60)
      const minutes = duration % 60
      return `${hours}小时${minutes}分钟`
    },
  },
  mounted() {
    this.updateCurrentTime()
    // 每秒更新当前时间
    setInterval(this.updateCurrentTime, 1000)

    // 初始化canvas
    this.$nextTick(() => {
      this.initCanvas()
    })
  },
  methods: {
    // 更新当前时间
    updateCurrentTime() {
      const now = new Date()
      this.currentHour = now.getHours()
      this.currentMinute = now.getMinutes()
      this.currentTime = this.formatTime(this.currentHour * 60 + this.currentMinute)

      // 重绘canvas
      if (this.ctx) {
        this.drawCanvas()
      }
    },

    // 初始化canvas
    initCanvas() {
      const systemInfo = uni.getSystemInfoSync()
      this.canvasWidth = systemInfo.windowWidth * 0.9
      this.canvasHeight = this.canvasWidth
      this.centerX = this.canvasWidth / 2
      this.centerY = this.canvasHeight / 2
      this.radius = this.canvasWidth * 0.4

      // 初始化就寝时间为当前时间+15分钟
      this.bedtime = this.currentTimeInMinutes + 15
      if (this.bedtime >= 1440) {
        this.bedtime -= 1440
      }

      // 获取canvas上下文
      this.ctx = uni.createCanvasContext('sleepCanvas', this)

      // 绘制canvas
      this.drawCanvas()
    },

    // 绘制canvas
    drawCanvas() {
      // 清空画布
      this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)

      // 绘制背景圆
      this.ctx.setLineWidth(10)
      this.ctx.setStrokeStyle('#e0e0e0')
      this.ctx.beginPath()
      this.ctx.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI)
      this.ctx.stroke()

      // 计算当前时间和就寝时间的角度
      const currentAngle = this.minutesToAngle(this.currentTimeInMinutes)
      const bedtimeAngle = this.minutesToAngle(this.bedtime)

      // 绘制活动圆弧
      this.ctx.setLineWidth(12)
      this.ctx.setStrokeStyle('#4a90e2')
      this.ctx.beginPath()

      // 确定圆弧方向
      if (bedtimeAngle > currentAngle) {
        this.ctx.arc(this.centerX, this.centerY, this.radius, currentAngle, bedtimeAngle, false)
      } else {
        this.ctx.arc(this.centerX, this.centerY, this.radius, currentAngle, bedtimeAngle, true)
      }
      this.ctx.stroke()

      // 绘制当前时间滑块(固定)
      this.drawHandle(currentAngle, '#ff6b6b', '当前')

      // 绘制就寝时间滑块(可拖动)
      this.drawHandle(bedtimeAngle, '#4a90e2', '就寝')

      // 绘制时间刻度
      this.drawTimeTicks()

      // 绘制
      this.ctx.draw()
    },

    // 绘制滑块
    drawHandle(angle, color, text) {
      const handleLength = 20
      const handleWidth = 10

      // 计算滑块位置
      const x1 = this.centerX + (this.radius - handleLength) * Math.cos(angle)
      const y1 = this.centerY + (this.radius - handleLength) * Math.sin(angle)
      const x2 = this.centerX + (this.radius + handleLength) * Math.cos(angle)
      const y2 = this.centerY + (this.radius + handleLength) * Math.sin(angle)

      // 绘制滑块
      this.ctx.setLineWidth(handleWidth)
      this.ctx.setStrokeStyle(color)
      this.ctx.beginPath()
      this.ctx.moveTo(x1, y1)
      this.ctx.lineTo(x2, y2)
      this.ctx.stroke()

      // 绘制滑块文本
      this.ctx.setFontSize(12)
      this.ctx.setFillStyle(color)
      const textX = this.centerX + (this.radius + 30) * Math.cos(angle)
      const textY = this.centerY + (this.radius + 30) * Math.sin(angle)
      this.ctx.fillText(text, textX, textY)
    },

    // 绘制时间刻度
    drawTimeTicks() {
      this.ctx.setFontSize(10)
      this.ctx.setFillStyle('#333')

      for (let hour = 0; hour < 24; hour++) {
        const angle = this.minutesToAngle(hour * 60)
        const x = this.centerX + (this.radius - 25) * Math.cos(angle)
        const y = this.centerY + (this.radius - 25) * Math.sin(angle)

        // 绘制刻度线
        this.ctx.setLineWidth(2)
        this.ctx.setStrokeStyle('#999')
        this.ctx.beginPath()
        this.ctx.moveTo(
          this.centerX + (this.radius - 15) * Math.cos(angle),
          this.centerY + (this.radius - 15) * Math.sin(angle),
        )
        this.ctx.lineTo(
          this.centerX + (this.radius - 5) * Math.cos(angle),
          this.centerY + (this.radius - 5) * Math.sin(angle),
        )
        this.ctx.stroke()

        // 绘制时间文本
        this.ctx.fillText(`${hour}:00`, x - 15, y + 5)
      }
    },

    // 分钟数转换为角度
    minutesToAngle(minutes) {
      // 0分钟对应12点钟方向，顺时针为正方向
      return (minutes / 1440) * 2 * Math.PI - Math.PI / 2
    },

    // 角度转换为分钟数
    angleToMinutes(angle) {
      // 转换角度到0-2π范围
      let normalizedAngle = angle + Math.PI / 2
      if (normalizedAngle < 0) {
        normalizedAngle += 2 * Math.PI
      }
      if (normalizedAngle > 2 * Math.PI) {
        normalizedAngle -= 2 * Math.PI
      }

      // 转换为分钟
      let minutes = Math.round((normalizedAngle / (2 * Math.PI)) * 1440)
      if (minutes >= 1440) minutes -= 1440
      if (minutes < 0) minutes += 1440

      return minutes
    },

    // 格式化时间显示
    formatTime(minutes) {
      const hours = Math.floor(minutes / 60) % 24
      const mins = minutes % 60
      return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`
    },

    // 触摸开始事件
    handleTouchStart(e) {
      const touch = e.touches[0]
      const x = touch.x
      const y = touch.y

      // 计算触摸点相对于圆心的角度
      const angle = Math.atan2(y - this.centerY, x - this.centerX)
      const touchMinutes = this.angleToMinutes(angle)

      // 计算就寝时间滑块的角度
      const bedtimeAngle = this.minutesToAngle(this.bedtime)

      // 检查是否触摸到就寝时间滑块
      const distanceToBedtime = Math.abs(angle - bedtimeAngle)
      const minAngleDiff = 0.2 // 约11度的容差范围

      if (distanceToBedtime < minAngleDiff || distanceToBedtime > 2 * Math.PI - minAngleDiff) {
        this.isDragging = true
        this.dragHandle = 'bedtime'
        this.touchStartAngle = angle
      }
    },

    // 触摸移动事件
    handleTouchMove(e) {
      if (!this.isDragging) return

      const touch = e.touches[0]
      const x = touch.x
      const y = touch.y

      // 计算触摸点相对于圆心的角度
      const angle = Math.atan2(y - this.centerY, x - this.centerX)

      if (this.dragHandle === 'bedtime') {
        // 更新就寝时间
        this.bedtime = this.angleToMinutes(angle)

        // 确保就寝时间不等于当前时间
        if (Math.abs(this.bedtime - this.currentTimeInMinutes) < 5) {
          if (this.bedtime > this.currentTimeInMinutes) {
            this.bedtime = this.currentTimeInMinutes + 5
          } else {
            this.bedtime = this.currentTimeInMinutes - 5
          }
        }

        // 重绘canvas
        this.drawCanvas()
      }
    },

    // 触摸结束事件
    handleTouchEnd() {
      this.isDragging = false
      this.dragHandle = null
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
  color: #333;
}

.sleep-time {
  display: block;
  font-size: 16px;
  color: #666;
  margin-top: 5px;
}

.canvas-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.canvas {
  width: 400px;
  height: 400px;
}

.time-info {
  margin-top: 20px;
  text-align: center;
}

.time-label {
  display: block;
  font-size: 18px;
  margin: 5px 0;
  color: #333;
}
</style>
