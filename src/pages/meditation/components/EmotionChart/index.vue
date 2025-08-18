<template>
  <view class="emotion-chart">
    <div ref="chartRef" class="chart"></div>

    <view class="chart-labels">
      <text>{{ startTime }}</text>

      <text>{{ endTime }}</text>
    </view>
    <view class="chart-labels-sub">
      <text>冥想开始</text>
      <text></text>
      <text>冥想结束</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, PropType, nextTick } from 'vue'

const props = defineProps({
  startTime: {
    type: String,
    default: '',
  },
  endTime: {
    type: String,
    default: '',
  },
  dataList: {
    type: Array as PropType<number[]>,
    default: () => [],
  },
  duration: {
    type: Number,
    default: 0,
  },
  // 折线颜色
  lineColor: {
    type: String,
    default: '#D198FA',
  },
})
const chartRef = ref<HTMLDivElement>()
let chart: echarts.ECharts | null = null

// 生成时间轴标签
const generateTimeAxis = () => {
  return calculateTimeLabels(props.duration * 60, 5)
}
const hasData = computed(() => props.dataList.length > 0)
// 初始化图表
const initChart = () => {
  if (!chartRef.value || !hasData.value) return

  // 先销毁旧图表实例
  if (chart) {
    chart.dispose()
  }

  chart = echarts.init(chartRef.value)
  updateChart()
}

// 更新图表数据
const updateChart = () => {
  // if (!chart || !hasData.value) return
  // console.log('Updating chart with data:', props.dataList)
  const option = {
    grid: {
      top: 10,
      bottom: 32,
      left: 32,
      right: 32,
      containLabel: false,
    },

    xAxis: {
      type: 'category',
      data: generateTimeAxis(),

      boundaryGap: false,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: true, interval: 0 },
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 100,
      interval: 100 / 3, // 三等分 (100, 200, 300)
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
        },
      },

      axisLabel: {
        formatter: function (value) {
          // 隐藏0值的标签
          return ''
        },
      },
      axisPointer: {
        label: {
          formatter: function (params) {
            const value = params.value
            if (value < 30) return '入定'
            if (value < 70) return '自然'
            return '活跃'
          },
        },
      },
    },
    series: [
      {
        name: '',
        data: props.dataList,
        type: 'line',
        smooth: false,
        showSymbol: false,
        lineStyle: {
          color: props.lineColor,
          width: 1,
        },

        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#DFB2FF' },
            { offset: 0.37, color: '#D198FA' },
            { offset: 0.71, color: '#8270F3' },
            { offset: 1, color: '#0038BA' },
          ]),
        },
      },
    ],
  }

  // 使用notMerge确保完全替换旧配置
  chart.setOption(option, true)
}

// 响应窗口变化
const handleResize = () => {
  chart?.resize()
}

onMounted(() => {
  nextTick(() => {
    initChart()
  })
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  chart?.dispose()
})

// 监听数据变化
watch(
  () => [props.dataList, props.startTime, props.endTime],
  () => {
    nextTick(() => {
      if (hasData.value) {
        if (!chart) {
          initChart()
        } else {
          updateChart()
        }
      }
    })
  },
  { deep: true, immediate: true },
)

// 计算时间间隔并生成标签数组
const calculateTimeLabels = (totalSeconds: number, count: number): string[] => {
  const interval = totalSeconds / (count - 1)
  const labels: string[] = new Array(totalSeconds / 2).fill('') // 先全填空字符串

  for (let i = 0; i < count; i++) {
    console.log('i:', i)
    let index = 0
    if (i > 0) {
      index = Math.round(Number(i * interval) / 2) - 1
    }
    labels[index] = formatMinute(Math.floor(i * interval))
  }
  console.log('label:', labels, interval, totalSeconds)
  return labels
}

// 格式化分钟数为 MM:SS 格式
const formatMinute = (minute: number): string => {
  const m = Math.floor(minute / 60)
  const s = minute % 60
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
}
</script>

<style scoped lang="scss">
.emotion-chart {
  width: 100%;
  min-height: 480rpx; /* 保证无数据时也有统一高度 */

  .chart {
    width: 100%;
    height: 400rpx;
  }

  .chart-labels,
  .chart-labels-sub {
    display: flex;
    justify-content: space-between;

    padding: 0 32rpx;
    color: #999;
    font-size: 24rpx;

    .label-center {
      text-align: center;
      flex: 1;
      color: #d198fa;
      font-size: 26rpx;
    }
  }
}
.no-data {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ccc;
  font-size: 16px;
  width: 100%;
  height: 400rpx;
  .no-data-text {
    opacity: 0.6;
  }
}
</style>
