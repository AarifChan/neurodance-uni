<!-- 体立图表 -->
<template>
  <view class="content_view">
    <view class="sleep_context_view">
      <!-- 说明 -->
      <view class="sleep_title_view">
        <text class="title_view">体位</text>
        <text class="flip_over_view">翻身 {{ num }}次</text>

        <view class="sleep_tip_view">
          <view v-for="(item, index) in sleepList" :key="index" class="n3_view">
            <view :style="{ background: item.color }"></view>
            <text>{{ item.title }}</text>
            <text class="time_view">{{ item.time }}</text>
            <text :class="item.long ? 'comment_long_view' : 'time_view'">{{ item.comment }}</text>
          </view>
        </view>
      </view>

      <view class="sleep_view" id="sleep_body"></view>
    </view>
  </view>
</template>

<script>
import * as echarts from 'echarts'

export default {
  props: {},
  components: {},
  data() {
    return {
      num: 5,
      sleepList: [
        {
          type: 0,
          color: '#FFC300',
          title: '仰卧',
          comment: '20%',
          time: '1小时50分钟',
          long: false,
        },
        {
          type: 1,
          color: '#F7682C',
          title: '俯卧',
          comment: '25%',
          time: '1小时50分钟',
          long: false,
        },
        {
          type: 2,
          color: '#00B4F0',
          title: '左侧卧',
          comment: '20%',
          time: '1小时20分钟',
          long: false,
        },
        {
          type: 3,
          color: '#90C200',
          title: '右侧卧',
          comment: '20%',
          time: '1小时20分钟',
          long: false,
        },
        {
          type: 4,
          color: '#5144FF',
          title: '站/坐姿',
          comment: '20%',
          time: '1小时20分钟',
          long: false,
        },
      ],
    }
  },
  onLoad(option) {},
  mounted() {
    this.setECharts()
  },
  methods: {
    setECharts() {
      var myChart = echarts.init(document.getElementById('sleep_body'))
      var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        grid: {
          left: '0',
          right: '0',
          top: '0',
          bottom: '0',
        },
        xAxis: {
          type: 'value',
          axisLabel: {
            show: false, // 显示刻度标签
            interval: 'auto', // 自动间隔
          },
          axisTick: {
            show: false, // 显示刻度线
          },
          show: false,
          max: 90,
          scale: true,
        },
        yAxis: {
          type: 'category',
          axisLabel: {
            show: false, // 显示刻度标签
            interval: 'auto', // 自动间隔
          },
          axisTick: {
            show: false, // 显示刻度线
          },
          show: false,
        },
        grid: {
          // 让图表占满容器
          top: '40%',
          left: '0',
          right: '0',
          bottom: '0',
          containLabel: true,
        },
        series: [
          {
            name: '仰卧',
            type: 'bar',
            stack: '睡眠结构图',
            data: [10],
            barWidth: 15,
            itemStyle: {
              color: '#FFC300',
            },
          },
          {
            name: '俯卧',
            type: 'bar',
            stack: '睡眠结构图',
            data: [13], // 时长
            barWidth: 15,
            itemStyle: {
              color: '#F7682C',
            },
          },
          {
            name: '右侧卧',
            type: 'bar',
            stack: '睡眠结构图',
            data: [14], // 时长
            barWidth: 15,
            itemStyle: {
              color: '#90C200',
            },
          },
          {
            name: '左侧卧',
            type: 'bar',
            stack: '睡眠结构图',
            data: [10], // 时长
            barWidth: 15,
            itemStyle: {
              color: '#00B4F0',
            },
          },
          {
            name: '右侧卧',
            type: 'bar',
            stack: '睡眠结构图',
            data: [20], // 时长
            barWidth: 15,
            itemStyle: {
              color: '#90C200',
            },
          },
          {
            name: '俯卧',
            type: 'bar',
            stack: '睡眠结构图',
            data: [10],
            barWidth: 15,
            itemStyle: {
              color: '#F7682C',
            },
          },
          {
            name: '站/坐姿',
            type: 'bar',
            stack: '睡眠结构图',
            data: [13], // 时长
            barWidth: 15,
            itemStyle: {
              color: '#5144FF',
            },
          },
          {
            name: '左侧卧',
            type: 'bar',
            stack: '睡眠结构图',
            data: [14], // 时长
            barWidth: 15,
            itemStyle: {
              color: '#00B4F0',
            },
          },
        ],
      }
      myChart.setOption(option)
    },
  },
}
</script>

<style lang="scss" scoped>
.content_view {
  width: 100%;
  height: auto;
}

.sleep_context_view {
  width: 100%;
  height: 40rpx;
}

.sleep_view {
  width: 663rpx;
  height: 40rpx;
}

.sleep_title_view {
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 2rpx;
  z-index: 1;

  margin-left: 20rpx;

  .flip_over_view {
    margin-left: 20rpx;

    font-family: MiSans, MiSans;
    font-weight: 500;
    font-size: 11rpx;
    line-height: 12rpx;
    text-align: left;
    font-style: normal;
    text-transform: none;
    color: #2c53f1;
  }

  .title_view {
    font-family: MiSans, MiSans;
    font-weight: 600;
    font-size: 11rpx;
    color: #1d2129;
    line-height: 19rpx;
    text-align: left;
    font-style: normal;
    text-transform: none;
  }

  .sleep_tip_view {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: 10rpx;

    .n3_view {
      display: flex;
      align-items: center;
      justify-content: center;

      margin-left: 25rpx;

      view {
        width: 5rpx;
        height: 5rpx;

        background: #0038ba;
        border-radius: 50%;

        margin-right: 2rpx;
      }

      text {
        font-family: MiSans, MiSans;
        font-weight: 500;
        font-size: 7rpx;
        color: #1d2129;
        line-height: 8rpx;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }

      .comment_long_view {
        font-family: MiSans, MiSans;
        font-weight: 500;
        font-size: 7rpx;
        color: #3b76f2;
        line-height: 8rpx;
        text-align: left;
        font-style: normal;
        text-transform: none;

        margin-left: 2rpx;
      }

      .time_view {
        font-family: MiSans, MiSans;
        font-weight: 500;
        font-size: 7rpx;
        color: #4e5969;
        line-height: 8rpx;
        text-align: left;
        font-style: normal;
        text-transform: none;

        margin-left: 2rpx;
      }
    }
  }
}
</style>
