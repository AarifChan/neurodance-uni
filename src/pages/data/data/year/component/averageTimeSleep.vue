<!-- 平均入睡时间 -->
<template>
  <view class="content_view">
    <view class="alarm_clock_view">
      <!-- <view class="alarm_bg_view"></view> -->

      <view class="eeg_alarm_clock_view">
        <view class="eeg_alarm_left_view">
          <text class="clock_title_view">平均入睡时间</text>
          <!-- <text>平均唤醒时刻：{{average}}</text>
					<text>最常使用唤醒区间：{{min}}分钟</text> -->
        </view>

        <view class="eeg_alarm_right_view">
          <view class="tip_top_view">
            <text>{{ stateEvaluate }}</text>
          </view>
          <text class="evaluate_view">建议入睡时间：{{ num }}</text>
        </view>
      </view>

      <view class="clock_data_view">
        <view class="clock_data_context_view" id="yearAverageTime"></view>
      </view>

      <view class="wake_up_view">
        <text>月日均入睡时间</text>
      </view>
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
      average: '9:00',
      min: 15,
      num: '11:00前',
      stateEvaluate: '年日均12:50' + ' ' + '入睡较晚',
    }
  },
  mounted() {
    this.setECharts()
  },
  methods: {
    setECharts() {
      var myChart = echarts.init(document.getElementById('yearAverageTime'))

      var option = {
        grid: {
          top: '25%', // 增加顶部留白
          bottom: '27%',
          left: '0%',
          right: '0%',
        },
        xAxis: {
          type: 'category',
          data: [
            '1月',
            '2月',
            '3月',
            '4月',
            '5月',
            '6月',
            '7月',
            '8月',
            '9月',
            '10月',
            '11月',
            '12月',
          ],
          axisLine: {
            show: false, // 隐藏坐标轴轴线
          },
          axisLabel: {
            show: true, // 显示刻度标签
            interval: 'auto', // 自动间隔
            lineHeight: 15, // 行高
            color: '#4E5969',
            fontSize: 11,
          },
          axisTick: {
            show: false, // 显示刻度线
          },
        },
        yAxis: {
          type: 'value',
          show: false,
          // min: 20,
          axisLabel: {
            show: true, // 显示刻度标签
            interval: 'auto', // 自动间隔
          },
          axisTick: {
            show: false, // 显示刻度线
          },
        },
        series: [
          {
            data: [0, 0, 0, 0, 0, 150, 230, 224, 218, 135, 147, 260],
            type: 'line',
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
              color: '#3B76F2',
            },
            label: {
              show: true, // 显示标签
              position: 'top', // 标签显示在数据点下方
              color: '#3B76F2',
              fontSize: 11,
              formatter: function (params) {
                if (params.value == 0) {
                  return ''
                } else {
                  let num = parseInt(params.value / 60)
                  if (num > 0) {
                    let nmin = params.value - num * 60
                    if (nmin == 0) {
                      return num + ':00'
                    } else {
                      return num + ':' + nmin
                    }
                  } else {
                    return params.value
                  }
                }
              },
            },
            markLine: {
              symbol: 'none',
              data: [
                {
                  yAxis: 260,
                  name: '平均值',
                },
              ],
              lineStyle: {
                color: '#C9CDD4',
              },
              label: {
                position: 'insideEndTop',
                show: true,
                borderColor: '#00000000',
                color: '#C9CDD4',
                fontSize: 10,
                formatter: function (params) {
                  if (params.value == 0) {
                    return ''
                  } else {
                    let num = parseInt(params.value / 60)
                    if (num > 0) {
                      let nmin = params.value - num * 60
                      if (nmin == 0) {
                        return num + ':00'
                      } else {
                        return num + ':' + nmin
                      }
                    } else {
                      return params.value
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

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 37rpx;
}

.alarm_clock_view {
  width: 687rpx;
  height: 345rpx;

  background: linear-gradient(98deg, #ffffff 0%, #e2ebff 100%);
  box-shadow: 0rpx 0rpx 46rpx 0rpx rgba(177, 177, 177, 0.18);
  border-radius: 19rpx 19rpx 19rpx 19rpx;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column; // 布局方向

  .alarm_bg_view {
    width: 632rpx;
    height: 105rpx;

    background: url('~@/static/img_naodiannaozhong.png');
    background-repeat: no-repeat;
    background-size: cover;

    position: absolute;
    top: 30rpx;
    z-index: 0;
  }

  .clock_data_view {
    width: 623.49rpx;
    height: 208rpx;

    position: absolute;
    bottom: 30rpx;
    z-index: 1;

    background: linear-gradient(to right, #ffffff 50%, #f6f6f6 0);
    background-size: 104rpx 100%;
    border-radius: 27rpx 27rpx 27rpx 27rpx;

    .clock_data_context_view {
      width: 623.49rpx;
      height: 208rpx;
    }
  }

  .eeg_alarm_clock_view {
    width: 632rpx;
    height: 61rpx;

    display: flex;
    align-items: start;
    justify-content: space-between;

    position: absolute;
    top: 30rpx;
    z-index: 1;

    .eeg_alarm_left_view {
      display: flex;
      align-items: start;
      justify-content: start;

      flex-direction: column; // 布局方向

      .clock_title_view {
        font-family: MiSans, MiSans;
        font-weight: 600;
        font-size: 31rpx;
        color: #1d2129;
        line-height: 36rpx;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }

      text {
        margin-top: 8rpx;
        font-family: MiSans, MiSans;
        font-weight: 500;
        font-size: 19rpx;
        color: #86909c;
        line-height: 22rpx;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
    }

    .eeg_alarm_right_view {
      text-align: right;

      .tip_top_view {
        display: flex;
        align-items: center;
        justify-content: center;

        text {
          font-family: MiSans, MiSans;
          font-weight: 600;
          font-size: 27rpx;
          line-height: 31rpx;
          text-align: left;
          font-style: normal;
          text-transform: none;

          color: #466df9;
        }
      }

      .evaluate_view {
        width: 100%;
        font-family: MiSans, MiSans;
        font-weight: 600;
        font-size: 19rpx;
        color: #3b76f2;
        line-height: 22rpx;
        text-align: center;
        font-style: normal;
        text-transform: none;
      }
    }
  }

  .wake_up_view {
    position: absolute;
    top: 115rpx;
    left: 55rpx;
    z-index: 2;

    text {
      font-family: MiSans, MiSans;
      font-weight: 600;
      font-size: 23rpx;
      color: #4e5969;
      line-height: 27rpx;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
  }
}
</style>
