<!-- 睡眠分期图 -->
<template>
  <view class="content_view">
    <view class="sleep_context_view">
      <!-- 时间显示 -->
      <view class="time_show_view">
        <view v-for="(item, index) in timeList" :key="index">
          <text>{{ item }}</text>
        </view>
      </view>

      <!-- 说明 -->
      <view class="sleep_title_view">
        <text class="title_view">睡眠结构图</text>

        <view class="sleep_tip_view">
          <view v-for="(item, index) in sleepList" :key="index" class="n3_view">
            <view :style="{ background: item.color }"></view>
            <text>{{ item.title }}</text>
            <text :class="item.long ? 'comment_long_view' : 'time_view'">{{ item.comment }}</text>
            <text class="time_view">{{ item.time }}</text>
          </view>
        </view>
      </view>

      <view class="sleep_view" id="sleep_main"></view>
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
      sleepList: [
        {
          type: 0,
          color: '#0038BA',
          title: 'N3深睡',
          comment: '20%偏低',
          time: '1小时20分钟',
          long: true,
        },
        {
          type: 1,
          color: '#374DF2',
          title: 'N2浅睡',
          comment: '20%偏低',
          time: '1小时20分钟',
          long: false,
        },
        {
          type: 2,
          color: '#8776F4',
          title: 'N1浅睡',
          comment: '20%偏低',
          time: '1小时20分钟',
          long: false,
        },
        {
          type: 3,
          color: '#D29AFB',
          title: '快速眼动',
          comment: '20%偏低',
          time: '1小时20分钟',
          long: false,
        },
        {
          type: 4,
          color: '#FFAC11',
          title: '觉醒',
          comment: '（5次）',
          time: '1小时20分钟',
          long: true,
        },
      ],

      timeList: [
        '02:09',
        '03:00',
        '04:00',
        '05:00',
        '06:00',
        '07:00',
        '08:00',
        '09:00',
        '10:00',
        '10:33',
      ],
    }
  },
  onLoad(option) {},
  mounted() {
    this.setECharts()
  },
  methods: {
    setECharts() {
      var myChart = echarts.init(document.getElementById('sleep_main'))

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
          max: 134,
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
          top: '50%',
          left: '0',
          right: '0',
          bottom: '0',
          containLabel: true,
        },
        series: [
          {
            name: 'N3深睡',
            type: 'bar',
            stack: '睡眠结构图',
            data: [10],
            barWidth: 15,
            itemStyle: {
              color: '#0038BA',
            },
          },
          {
            name: 'N2浅睡',
            type: 'bar',
            stack: '睡眠结构图',
            data: [13], // 时长
            barWidth: 15,
            itemStyle: {
              color: '#374DF2',
            },
          },
          {
            name: 'N1浅睡',
            type: 'bar',
            stack: '睡眠结构图',
            data: [14], // 时长
            barWidth: 15,
            itemStyle: {
              color: '#7663F2',
            },
          },
          {
            name: '快速眼动',
            type: 'bar',
            stack: '睡眠结构图',
            data: [10], // 时长
            barWidth: 15,
            itemStyle: {
              color: '#CD92F7',
            },
          },
          {
            name: '觉醒',
            type: 'bar',
            stack: '睡眠结构图',
            data: [20], // 时长
            barWidth: 15,
            itemStyle: {
              color: '#FFC300',
            },
          },
          {
            name: 'N3深睡',
            type: 'bar',
            stack: '睡眠结构图',
            data: [10],
            barWidth: 15,
            itemStyle: {
              color: '#0038BA',
            },
          },
          {
            name: 'N2浅睡',
            type: 'bar',
            stack: '睡眠结构图',
            data: [13], // 时长
            barWidth: 15,
            itemStyle: {
              color: '#374DF2',
            },
          },
          {
            name: 'N1浅睡',
            type: 'bar',
            stack: '睡眠结构图',
            data: [14], // 时长
            barWidth: 15,
            itemStyle: {
              color: '#7663F2',
            },
          },
          {
            name: '快速眼动',
            type: 'bar',
            stack: '睡眠结构图',
            data: [10], // 时长
            barWidth: 15,
            itemStyle: {
              color: '#CD92F7',
            },
          },
          {
            name: '觉醒',
            type: 'bar',
            stack: '睡眠结构图',
            data: [20], // 时长
            barWidth: 15,
            itemStyle: {
              color: '#FFC300',
            },
            barMaxWidth: '80%',
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
  height: 96rpx;

  position: relative;

  .time_show_view {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 20rpx;
    z-index: 1;

    text {
      margin-left: 10rpx;
      margin-right: 37rpx;

      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: 9rpx;
      color: #1d2129;
      line-height: 10rpx;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }
  }

  .sleep_title_view {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 41rpx;
    z-index: 1;

    margin-left: 20rpx;

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

      .n3_view {
        display: flex;
        align-items: center;
        justify-content: center;

        margin-left: 18rpx;

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

  .sleep_view {
    width: 663rpx;
    height: 96rpx;
  }
}
</style>
