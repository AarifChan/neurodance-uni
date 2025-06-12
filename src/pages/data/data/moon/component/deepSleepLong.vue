<!-- 深睡时长 - 月 -->
<template>
  <view class="content_view">
    <view class="deep_long_view">
      <view class="deep_long_top_view">
        <view class="eeg_alarm_left_view">
          <text class="clock_title_view">本月夜间深睡时长</text>
          <text>平均深睡时长：{{ longTime }}</text>
          <text>平均深睡占比：{{ ratio }}</text>
        </view>

        <view class="eeg_alarm_right_view">
          <view class="tip_top_view">
            <text>{{ score }}</text>
          </view>
          <text class="evaluate_view">{{ score_item }}</text>

          <image class="long_image_view" src="/static/ico_shichangzengjia.png"></image>
        </view>
      </view>

      <!-- 图表 -->
      <view class="deep_long_data_view">
        <view class="clock_data_context_view" id="deepMoonLong"></view>
      </view>

      <view class="wake_up_view">
        <text>深睡时长</text>
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
      longTime: '2小时30分钟',
      ratio: '25%（参考区间20%-50%）',
      score: '睡眠质量较好',
      score_item: '整体深睡时长有所增加',
    }
  },
  mounted() {
    this.setECharts()
  },
  methods: {
    setECharts() {
      var myChart = echarts.init(document.getElementById('deepMoonLong'))

      var option = {
        xAxis: [
          {
            type: 'category',
            data: [
              '2/1',
              '',
              '',
              '',
              '',
              '',
              '2/7',
              '',
              '',
              '',
              '',
              '',
              '',
              '',
              '',
              '',
              '',
              '',
              '',
              '',
              '',
              '',
              '',
              '',
              '',
              '',
              '',
              '',
            ],
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
            axisLine: {
              show: false, // 隐藏坐标轴轴线
            },
          },
        ],
        yAxis: {
          type: 'value',
          show: false,
          axisLabel: {
            show: false, // 显示刻度标签
            interval: 'auto', // 自动间隔
          },
          axisTick: {
            show: false, // 显示刻度线
          },
          boundaryGap: true, //设置为true
          alignWithLabel: true,
          max: function (value) {
            if (value.max > 120) {
              return Math.ceil(value.max)
            } else {
              return Math.ceil(120)
            }
          },
        },
        grid: {
          top: '30%', // 增加顶部留白
          bottom: '25%',
          left: '2.5%',
          right: '2.5%',
        },
        series: [
          {
            data: [600, 400, 350, 380, 270, 380, 460], // 8小时 == 480分钟
            barWidth: '40%',
            markLine: {
              symbol: 'none',
              data: [
                {
                  yAxis: 400,
                  name: '自定义平均值',
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
                fontSize: 8,
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
                },
              },
            },
            label: {
              normal: {
                show: true,
                position: 'top',
                textStyle: {
                  color: '#86909C',
                  fontSize: 9,
                },
                formatter: function (params) {
                  // params 包含当前数据的详细信息
                  if (option.series[0].data.length - 1 == params.dataIndex) {
                    if (params.value == 0) {
                      return ''
                    } else {
                      // console.log('到这里！！哈哈哈' + params.dataIndex)
                      let num = parseInt(params.value / 60)
                      if (num > 0) {
                        let nmin = params.value - num * 60
                        if (nmin == 0) {
                          return num + 'h'
                        } else {
                          return num + 'h' + nmin + 'min'
                        }
                      } else {
                        return params.value + 'min'
                      }
                    }
                  } else {
                    return ''
                  }
                },
              },
            },
            type: 'bar',
            itemStyle: {
              borderRadius: [15, 15, 15, 15], // 设置柱状图头尾圆角
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#0038BA ',
                },
                {
                  offset: 0.5,
                  color: '#0038BA ',
                },
                {
                  offset: 1,
                  color: '#0038BA ',
                },
              ]),
            },
            emphasis: {
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#3B76F2',
                  },
                  {
                    offset: 0.7,
                    color: '#3B76F2',
                  },
                  {
                    offset: 1,
                    color: '#3B76F2',
                  },
                ]),
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

  margin-top: 38rpx;
}

.deep_long_view {
  width: 687rpx;
  height: 414rpx;

  background: linear-gradient(98deg, #ffffff 0%, #e2ebff 100%);
  box-shadow: 0rpx 0rpx 46rpx 0rpx rgba(177, 177, 177, 0.18);
  border-radius: 19rpx 19rpx 19rpx 19rpx;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column; // 布局方向

  position: relative;
}

// 上方内容
.deep_long_top_view {
  width: 632rpx;
  height: 105rpx;

  position: absolute;
  top: 30rpx;
  z-index: 0;

  display: flex;
  align-items: start;
  justify-content: space-between;

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
      text {
        font-family: MiSans, MiSans;
        font-weight: 600;
        font-size: 27rpx;
        line-height: 31rpx;
        font-style: normal;
        text-transform: none;
        color: #466df9;
      }
    }

    .evaluate_view {
      font-family: MiSans, MiSans;
      font-weight: 600;
      font-size: 19rpx;
      color: #3b76f2;
      line-height: 22rpx;
      font-style: normal;
      text-transform: none;
    }

    .long_image_view {
      width: 58rpx;
      height: 58rpx;

      position: absolute;
      top: 10rpx;
      right: 157rpx;
      z-index: -1;
    }
  }
}

// 图表
.deep_long_data_view {
  width: 623.49rpx;
  height: 233rpx;

  position: absolute;
  bottom: 30rpx;
  z-index: 0;

  background: linear-gradient(to right, #ffffff 50%, #f6f6f6 0);
  background-size: 41.6rpx 100%;
  border-radius: 27rpx 27rpx 27rpx 27rpx;

  .clock_data_context_view {
    width: 623.49rpx;
    height: 233rpx;
  }
}

.wake_up_view {
  position: absolute;
  top: 155rpx;
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
</style>
