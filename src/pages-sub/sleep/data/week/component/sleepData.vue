<!-- 周 - 顶部数据 -->
<template>
  <view>
    <view class="content_view">
      <!-- 今天 - 日期 -->
      <view class="top_day_view">{{ toDay }}</view>

      <!-- 睡眠时长 -->
      <view class="sleep_long_view">
        <text class="hour_view">{{ hour }}</text>
        <text style="margin-bottom: 10rpx; margin-left: 4rpx; margin-right: 4rpx">小时</text>
        <text class="minute_view">{{ minute }}</text>
        <text style="margin-bottom: 10rpx; margin-left: 4rpx; margin-right: 4rpx">分钟</text>
      </view>

      <!-- 提示 -->
      <view class="tip_view">{{ tip }}</view>

      <!-- 睡眠分析图 -->
      <view class="sleep_context_view">
        <view class="sleep_view" id="main"></view>
      </view>
    </view>

    <view class="type_tip_view">
      <view class="n3_view">
        <view></view>
        <text>N3深睡</text>
      </view>

      <view class="n2_view">
        <view></view>
        <text>N2浅睡</text>
      </view>

      <view class="n1_view">
        <view></view>
        <text>N1浅睡</text>
      </view>

      <view class="eye_view">
        <view></view>
        <text>快速眼动</text>
      </view>

      <view class="up_view">
        <view></view>
        <text>觉醒</text>
      </view>

      <view class="min_view">
        <view></view>
        <text>零星小睡</text>
      </view>
    </view>
  </view>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
import * as echarts from 'echarts'

export default {
  data() {
    return {
      hour: 7,
      minute: 48,
      state: '正常',
      isExtend: 1, // 0: 无变化、1: 增加、2: 减少
      id: undefined, // 当前id
      startTime: '2:09', // 开始时间 - 时分
      endTime: '7:49', // 结束时间 - 时分
      startDate: '', // 开始日期
      endDate: '', // 结束日期
      toDay: '2月12日', // 今日日期
      tip: '夜间睡眠6小时46分钟｜零星小睡1小时2分钟',
    }
  },
  components: {},
  mounted() {
    this.setECharts()
  },
  methods: {
    getStateImgae(val) {
      switch (val) {
        case 0:
          return '/static/images/sleep/ico_shujububian.png'

        case 1:
          return '/static/images/sleep/ico_shujushangsheng.png'

        case 2:
          return '/static/images/sleep/ico_shujuxiajiang.png'
      }
    },
    setECharts() {
      var myChart = echarts.init(document.getElementById('main'))

      var colors = ['#0723C3', '#374DF2', '#7967F3', '#CF94F8', '#FFAE23'] // N3深睡、N2浅睡、N1浅睡、快速眼动、觉醒
      var state = ['N3深睡', 'N2浅睡', 'N1浅睡', '快速眼动', '觉醒']

      var option = {
        tooltip: {
          //提示框
          trigger: 'item',
          triggerOn: 'click',
          formatter: function (params) {
            if (params.value == 0) {
              return ''
            } else {
              let num = parseInt(params.value / 60)
              if (num > 0) {
                let nmin = params.value - num * 60
                if (nmin == 0) {
                  return num + 'h'
                } else {
                  return num + 'h' + nmin + 'min'
                }
              } else {
                return params.value
              }
            }
          }, //数据的值
        },
        xAxis: [
          {
            type: 'category',
            data: [
              '2/9\n周日',
              '2/10\n周一',
              '2/11\n周二',
              '2/12\n周三',
              '2/13\n周四',
              '2/14\n周五',
              '2/15\n周六',
            ],
            axisLabel: {
              show: true, // 显示刻度标签
              interval: 'auto', // 自动间隔
              lineHeight: 15, // 行高
              color: '#4E5969',
              fontSize: 10,
            },
            axisTick: {
              show: false, // 显示刻度线
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            show: false,
            axisLabel: {
              show: false, // 显示刻度标签
              interval: 'auto', // 自动间隔
            },
            axisTick: {
              show: false, // 显示刻度线
            },
          },
        ],
        grid: {
          top: '0%', // 增加顶部留白
          bottom: '19.5%',
          left: '0%',
          right: '0%',
        },
        series: [
          {
            name: 'N3深睡',
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
              focus: 'series',
            },
            data: [120, 8, 101, 134, 290, 230, 220],
            barWidth: '20%',
            itemStyle: {
              color: '#0723C3',
            },
          },
          {
            name: 'N2浅睡',
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
              focus: 'series',
            },
            data: [60, 72, 71, 74, 190, 130, 110],
            barWidth: '20%',
            itemStyle: {
              color: '#374DF2',
            },
          },
          {
            name: 'N1浅睡',
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
              focus: 'series',
            },
            data: [62, 82, 91, 84, 109, 110, 120],
            barWidth: '20%',
            itemStyle: {
              color: '#7967F3',
            },
          },
          {
            name: '快速动眼',
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
              focus: 'series',
            },
            data: [62, 82, 91, 84, 109, 110, 120],
            barWidth: '20%',
            itemStyle: {
              color: '#CF94F8',
            },
          },
          {
            name: '觉醒',
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
              focus: 'series',
            },
            data: [62, 82, 91, 84, 109, 110, 120],
            barWidth: '20%',
            itemStyle: {
              color: '#FFAE23',
            },
          },
          {
            name: '零星小睡',
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
              focus: 'series',
            },
            data: [62, 82, 91, 84, 109, 110, 120],
            barWidth: '20%',
            itemStyle: {
              barBorderRadius: [12, 12, 0, 0],
              color: '#00B4F0',
            },
            markLine: {
              symbol: 'none',
              data: [
                {
                  yAxis: 300,
                  name: '平均值',
                },
              ],
              label: {
                position: 'insideEndTop',
                show: true,
                borderColor: '#00000000',
                color: '#1D2129',
                fontSize: 10,
                formatter: function (params) {
                  if (params.value == 0) {
                    return ''
                  } else {
                    let num = parseInt(params.value / 60)
                    if (num > 0) {
                      let nmin = params.value - num * 60
                      if (nmin == 0) {
                        return '日均' + num + 'h'
                      } else {
                        return '日均' + num + 'h' + nmin + 'min'
                      }
                    } else {
                      return '日均' + params.value
                    }
                  }
                },
              },
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

  background: #fff;
}

// 今日 - 日期
.top_day_view {
  font-family: MiSans, MiSans;
  font-weight: 500;
  font-size: 23rpx;
  color: #4e5969;
  line-height: 27rpx;
  text-align: center;
  font-style: normal;
  text-transform: none;
}

// 睡眠时长
.sleep_long_view {
  display: flex;
  align-items: end;
  justify-content: center;

  position: relative;

  text {
    font-family: MiSans, MiSans;
    font-weight: 500;
    font-size: 38rpx;
    color: #1d2129;
    text-align: left;
    font-style: normal;
    text-transform: none;
  }

  .hour_view {
    font-family: MiSans, MiSans;
    font-weight: 600;
    font-size: 69rpx;
    color: #1d2129;
    text-align: left;
    font-style: normal;
    text-transform: none;
  }

  .minute_view {
    font-family: MiSans, MiSans;
    font-weight: 600;
    font-size: 69rpx;
    color: #1d2129;
    text-align: left;
    font-style: normal;
    text-transform: none;
  }
}

// 提示语
.tip_view {
  font-family: MiSans, MiSans;
  font-weight: 500;
  font-size: 23rpx;
  color: #4e5969;
  line-height: 27rpx;
  text-align: center;
  font-style: normal;
  text-transform: none;

  margin-top: 4rpx;
}

// 睡眠波
.sleep_context_view {
  width: 100%;
  height: 410rpx;

  display: flex;
  align-items: center;
  justify-content: center;

  .sleep_view {
    width: 584rpx;
    height: 351rpx;
  }
}

// 睡眠图表提示
.type_tip_view {
  width: 100%;
  height: 90rpx;

  display: flex;
  align-items: center;
  justify-content: center;

  text {
    font-family: MiSans, MiSans;
    font-weight: 500;
    font-size: 23rpx;
    color: #4e5969;
    line-height: 27rpx;
    text-align: left;
    font-style: normal;
    text-transform: none;
  }

  .n3_view {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 10rpx;

    view {
      width: 11rpx;
      height: 11rpx;

      background: #0723c3;
      border-radius: 8rpx 8rpx 8rpx 8rpx;

      margin-right: 6rpx;
    }
  }

  .n2_view {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 10rpx;

    view {
      width: 11rpx;
      height: 11rpx;

      background: #374df2;
      border-radius: 8rpx 8rpx 8rpx 8rpx;

      margin-right: 6rpx;
    }
  }

  .n1_view {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 10rpx;

    view {
      width: 11rpx;
      height: 11rpx;

      background: #7967f3;
      border-radius: 8rpx 8rpx 8rpx 8rpx;

      margin-right: 6rpx;
    }
  }

  .eye_view {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 10rpx;

    view {
      width: 11rpx;
      height: 11rpx;

      background: #cf94f8;
      border-radius: 8rpx 8rpx 8rpx 8rpx;

      margin-right: 6rpx;
    }
  }

  .up_view {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 10rpx;

    view {
      width: 11rpx;
      height: 11rpx;

      background: #ffae23;
      border-radius: 8rpx 8rpx 8rpx 8rpx;

      margin-right: 6rpx;
    }
  }

  .min_view {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 10rpx;

    view {
      width: 11rpx;
      height: 11rpx;

      background: #00b4f0;
      border-radius: 8rpx 8rpx 8rpx 8rpx;

      margin-right: 6rpx;
    }
  }
}
</style>
