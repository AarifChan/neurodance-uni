<template>
  <view class="container">
    <!-- 星空背景canvas -->
    <canvas
      canvas-id="starCanvas"
      class="star-canvas"
      @touchstart="handleTouch"
      @touchmove="handleTouch"
    ></canvas>
  </view>
</template>

<script>
export default {
  data() {
    return {
      stars: [], // 星星数组
      canvasWidth: 0, // canvas宽度
      canvasHeight: 0, // canvas高度
      ctx: null, // canvas上下文
      animationId: null, // 动画ID
      touchX: 0, // 触摸点X坐标
      touchY: 0, // 触摸点Y坐标
    }
  },
  mounted() {
    // 获取系统信息，用于设置canvas尺寸
    uni.getSystemInfo({
      success: (res) => {
        this.canvasWidth = res.windowWidth
        this.canvasHeight = res.windowHeight
        this.initCanvas()
      },
    })
  },
  onUnload() {
    // 页面卸载时停止动画
    if (this.animationId) {
      cancelAnimationFrame(this.animationId)
    }
  },
  methods: {
    initCanvas() {
      // 获取canvas上下文
      this.ctx = uni.createCanvasContext('starCanvas', this)

      // 初始化星星
      this.initStars()

      // 开始动画
      this.animate()
    },

    initStars() {
      // console.log("到这里！")
      const starCount = 200 // 星星数量
      this.stars = []

      for (let i = 0; i < starCount; i++) {
        this.stars.push({
          x: Math.random() * this.canvasWidth, // 随机x坐标
          y: Math.random() * this.canvasHeight, // 随机y坐标
          radius: Math.random() * 1.5, // 随机半径
          alpha: Math.random(), // 随机透明度
          vx: Math.floor(Math.random() * 50) - 25, // x轴速度
          vy: Math.floor(Math.random() * 50) - 25, // y轴速度
        })
      }
    },

    drawStars() {
      // 清除画布
      this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)

      // 绘制渐变背景
      const gradient = this.ctx.createLinearGradient(0, 0, 0, this.canvasHeight)
      gradient.addColorStop(0, '#000428')
      gradient.addColorStop(1, '#004e92')
      this.ctx.fillStyle = gradient
      this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight)

      // 绘制每颗星星
      this.stars.forEach((star) => {
        this.ctx.beginPath()
        this.ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI)

        // 星星颜色和透明度
        this.ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`
        this.ctx.fill()

        // 更新星星位置
        star.x += star.vx / 100
        star.y += star.vy / 100

        // 如果星星移出画布，重新放置到画布另一侧
        if (star.x < 0) star.x = this.canvasWidth
        if (star.x > this.canvasWidth) star.x = 0
        if (star.y < 0) star.y = this.canvasHeight
        if (star.y > this.canvasHeight) star.y = 0

        // 随机改变透明度，实现闪烁效果
        star.alpha += Math.random() * 0.2 - 0.1
        star.alpha = Math.max(0.1, Math.min(1, star.alpha))
      })

      // 绘制到canvas
      this.ctx.draw()
    },

    animate() {
      this.drawStars()
      this.animationId = requestAnimationFrame(this.animate.bind(this))
    },

    handleTouch(e) {
      // 获取触摸点坐标
      this.touchX = e.touches[0].x
      this.touchY = e.touches[0].y

      // 让星星向触摸点相反方向移动，产生互动效果
      this.stars.forEach((star) => {
        const dx = star.x - this.touchX
        const dy = star.y - this.touchY
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 100) {
          star.vx = dx * 0.1
          star.vy = dy * 0.1
        }
      })
    },
  },
}
</script>

<style>
.container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.star-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.content {
  position: relative;
  z-index: 1;
  padding: 20px;
  color: white;
}

.title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 40px;
}
</style>
