<template>
  <view class="emotion-chart">
    <view v-if="!hasData" class="no-data">
      <text class="no-data-text">No Data</text>
    </view>
    <div v-else ref="chartRef" class="chart"></div>

    <view class="chart-labels">
      <text>{{ startTime }}</text>
      <!-- <text class="label-center">情绪变化</text> -->
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
  const count = props.dataList.length
  const axis = new Array(count).fill('')
  axis[0] = props.startTime
  axis[count - 1] = props.endTime
  return axis
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
  if (!chart || !hasData.value) return

  const option = {
    grid: {
      top: 10,
      bottom: 10,
      left: 16,
      right: 16,
      containLabel: false,
    },
    xAxis: {
      type: 'category',
      data: generateTimeAxis(),
      boundaryGap: false,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false },
    },
    yAxis: {
      type: 'value',
      show: false,
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
          width: 2,
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: `${props.lineColor}80` },
            { offset: 1, color: `${props.lineColor}00` },
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

    padding: 0 20rpx;
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
