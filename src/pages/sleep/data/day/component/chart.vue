<template>
  <canvas canvas-id="sleepCanvas" style="width: 100%; height: 300px"></canvas>
</template>

<script lang="ts" setup>
import { onMounted, watch, nextTick } from 'vue'

// 枚举睡眠阶段
enum SleepStage {
  Deep = 0,
  Light = 1,
  REM = 2,
  Awake = 3,
}

// 睡眠阶段对应颜色
const SleepStageColors: Record<
  SleepStage,
  { startColor: string; endColor: string; level: number }
> = {
  [SleepStage.Deep]: { startColor: '#0038BA', endColor: '#0038BA', level: 0 },
  [SleepStage.Light]: { startColor: '#8776F4', endColor: '#7663F2', level: 1 },
  [SleepStage.REM]: { startColor: '#D29AFB', endColor: '#CD92F7', level: 2 },
  [SleepStage.Awake]: { startColor: '#FFAC11', endColor: '#FFCC26', level: 3 },
}

// 睡眠段
interface SleepStateDuration {
  duration: number
  stage: SleepStage
  start: number
}

// 将 int[] 转为 SleepStateDuration[]
function convertToSleepStateDurations(
  rawStages: number[],
  interval: number = 30,
): SleepStateDuration[] {
  if (!rawStages || rawStages.length === 0) return []

  const result: SleepStateDuration[] = []
  let currentStage = rawStages[0]
  let count = 1
  let currentStart = 0

  for (const stage of rawStages.slice(1)) {
    if (stage === currentStage) {
      count++
    } else {
      const duration = count * interval
      result.push({ duration, stage: currentStage as SleepStage, start: currentStart })
      currentStart += duration
      currentStage = stage
      count = 1
    }
  }
  // 最后一段
  result.push({
    duration: count * interval,
    stage: currentStage as SleepStage,
    start: currentStart,
  })
  return result
}

// props
const props = defineProps<{ stages: number[]; interval?: number }>()

const canvasWidth = 375
const canvasHeight = 200
// 绘制圆角矩形函数
function drawRoundedRect(ctx: any, x: number, y: number, w: number, h: number, r: number) {
  const radius = Math.min(r, w / 2, h / 2)
  ctx.beginPath()
  ctx.moveTo(x + radius, y)
  ctx.lineTo(x + w - radius, y)
  ctx.arcTo(x + w, y, x + w, y + radius, radius)
  ctx.lineTo(x + w, y + h - radius)
  ctx.arcTo(x + w, y + h, x + w - radius, y + h, radius)
  ctx.lineTo(x + radius, y + h)
  ctx.arcTo(x, y + h, x, y + h - radius, radius)
  ctx.lineTo(x, y + radius)
  ctx.arcTo(x, y, x + radius, y, radius)
  ctx.closePath()
  ctx.fill()
}

// 绘制图表
function drawChart() {
  const ctx = uni.createCanvasContext('sleepCanvas')
  ctx.clearRect(0, 0, canvasWidth, canvasHeight)

  const data = convertToSleepStateDurations(props.stages, props.interval ?? 30)
  const totalDuration = data.reduce((sum, d) => sum + d.duration, 0)

  const stageHeight = (canvasHeight - 16 - 3 * 12) / 4
  let accumulatedTime = 0

  for (let i = 0; i < data.length; i++) {
    const segment = data[i]
    const startRatio = accumulatedTime / totalDuration
    accumulatedTime += segment.duration
    const endRatio = accumulatedTime / totalDuration

    const rectX = canvasWidth * startRatio
    const rectWidth = canvasWidth * (endRatio - startRatio)
    const rectY = canvasHeight - (SleepStageColors[segment.stage].level + 1) * stageHeight + 8

    const radius = rectWidth > 12 ? 6 : rectWidth / 2

    // 设置渐变
    const gradient = ctx.createLinearGradient
      ? ctx.createLinearGradient(rectX, rectY, rectX, rectY + stageHeight)
      : segment.stage
    if (gradient && 'addColorStop' in gradient) {
      gradient.addColorStop(0, SleepStageColors[segment.stage].startColor)
      gradient.addColorStop(1, SleepStageColors[segment.stage].endColor)
      ctx.setFillStyle(gradient)
    } else {
      ctx.setFillStyle(SleepStageColors[segment.stage].startColor)
    }

    drawRoundedRect(ctx, rectX, rectY, rectWidth, stageHeight, radius)

    // 绘制连线
    const nextSegment = i < data.length - 1 ? data[i + 1] : null
    if (nextSegment) {
      const nextRectY =
        canvasHeight - (SleepStageColors[nextSegment.stage].level + 1) * stageHeight + 8
      const startX = rectX + rectWidth
      const startY = rectY + stageHeight / 2
      const endX = startX
      const endY = nextRectY + stageHeight / 2
      ctx.beginPath()
      ctx.moveTo(startX, startY)
      ctx.lineTo(endX, endY)
      // 渐变线
      ctx.setStrokeStyle(SleepStageColors[segment.stage].startColor)
      ctx.setLineWidth(1)
      ctx.stroke()
    }
  }

  ctx.draw()
}

// 初始化
onMounted(() => {
  nextTick(drawChart)
})

watch(
  () => props.stages,
  () => nextTick(drawChart),
  { deep: true },
)
</script>

<style scoped>
canvas {
  width: 100%;
  height: 200px;
}
</style>
