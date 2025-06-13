<!-- 睡眠时长 = 深睡时长 -->
<template>
  <view class="content_view">
    <view class="long_left_view">
      <view class="long_data_bg_view">
        <view class="long_title_view">
          <text>睡眠时长</text>
        </view>
        <view class="long_data_view" id="long_left"></view>
        <view class="xaxis_data_view">
          <view v-for="(item, index) in weekData" :key="index">
            <view class="xaxis_item_data_view">
              <text>{{ item }}</text>
            </view>
          </view>
        </view>
        <view class="long_rating_view">
          <text>睡眠时长</text>
          <text class="rating_text">{{ rating == 0 ? '达标' : '不达标' }}</text>
          <image
            v-if="isExtend == 1"
            src="/static/images/sleep/ico_shujushangsheng.png"
            style="width: 19rpx; height: 27rpx; margin-left: 4rpx"
          ></image>
          <image
            v-if="isExtend == 0"
            src="/static/images/sleep/ico_shujububian.png"
            style="width: 19rpx; height: 6rpx; margin-left: 4rpx"
          ></image>
          <image
            v-if="isExtend == 2"
            src="/static/images/sleep/ico_shujuxiajiang.png"
            style="width: 19rpx; height: 27rpx; margin-left: 4rpx"
          ></image>
        </view>
      </view>
    </view>

    <view class="long_right_view">
      <view class="long_data_bg_view">
        <view class="long_title_view">
          <text>深睡时长</text>
        </view>
        <view class="long_data_view" id="long_right"></view>
        <view class="xaxis_data_view">
          <view v-for="(item, index) in weekData" :key="index">
            <view class="xaxis_item_data_view">
              <text>{{ item }}</text>
            </view>
          </view>
        </view>
        <view class="long_rating_view">
          <text>睡眠质量</text>
          <text class="rating_text">{{ rating == 0 ? '达标' : '不达标' }}</text>
          <image
            v-if="isExtend == 1"
            src="/static/images/sleep/ico_shujushangsheng.png"
            style="width: 19rpx; height: 27rpx; margin-left: 4rpx"
          ></image>
          <image
            v-if="isExtend == 0"
            src="/static/images/sleep/ico_shujububian.png"
            style="width: 19rpx; height: 6rpx; margin-left: 4rpx"
          ></image>
          <image
            v-if="isExtend == 2"
            src="/static/images/sleep/ico_shujuxiajiang.png"
            style="width: 19rpx; height: 27rpx; margin-left: 4rpx"
          ></image>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
import * as echarts from 'echarts'

export default {
  props: {},
  components: {},
  data() {
    return {
      weekData: ['2/10', '', '', '2/13', '', '', '2/16'],
      rating: 0,
      isExtend: 1, // 0: 无变化、1: 增加、2: 减少
    }
  },
  mounted() {
    this.setECharts()
  },
  methods: {
    setECharts() {
      var myChart = echarts.init(document.getElementById('long_left'))

      var option = {
        xAxis: {
          type: 'category',
          data: ['2/10', '2/11', '2/12', '2/13', '2/14', '2/15', '2/16'],
          show: false,
          axisLabel: {
            show: true, // 显示刻度标签
            interval: 'auto', // 自动间隔
          },
          axisTick: {
            show: false, // 显示刻度线
          },
        },
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
          top: '20%', // 增加顶部留白
          bottom: '20%',
          left: '0%',
          right: '0%',
        },
        series: [
          {
            data: [600, 400, 350, 380, 270, 0, 0], // 8小时 == 480分钟
            barWidth: '35%',
            markLine: {
              symbol: 'none',
              data: [
                {
                  yAxis: 400,
                  name: '自定义平均值',
                },
              ],
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
                  if (params.value == 0) {
                    return ''
                  } else {
                    let num = parseInt(params.value / 60)
                    if (num > 0) {
                      let nmin = params.value - num * 60
                      if (nmin == 0) {
                        return num + 'h'
                      } else {
                        return num + 'h' + nmin
                      }
                    } else {
                      return params.value
                    }
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
                  color: '#B1C8FA ',
                },
                {
                  offset: 0.5,
                  color: '#B1C8FA ',
                },
                {
                  offset: 1,
                  color: '#B1C8FA ',
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

      this.setECharts2()
    },

    setECharts2() {
      var myChart = echarts.init(document.getElementById('long_right'))

      var option = {
        xAxis: {
          type: 'category',
          data: ['2/10', '2/11', '2/12', '2/13', '2/14', '2/15', '2/16'],
          show: false,
          axisLabel: {
            show: true, // 显示刻度标签
            interval: 'auto', // 自动间隔
          },
          axisTick: {
            show: false, // 显示刻度线
          },
        },
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
          top: '20%', // 增加顶部留白
          bottom: '20%',
          left: '0%',
          right: '0%',
        },
        series: [
          {
            data: [600, 400, 350, 380, 270, 0, 0], // 8小时 == 480分钟
            barWidth: '35%',
            markLine: {
              symbol: 'none',
              data: [
                {
                  yAxis: 400,
                  name: '平均值',
                },
              ],
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
                  if (params.value == 0) {
                    return ''
                  } else {
                    let num = parseInt(params.value / 60)
                    if (num > 0) {
                      let nmin = params.value - num * 60
                      if (nmin == 0) {
                        return num + 'h'
                      } else {
                        return num + 'h' + nmin
                      }
                    } else {
                      return params.value
                    }
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
                  color: '#B1C8FA ',
                },
                {
                  offset: 0.5,
                  color: '#B1C8FA ',
                },
                {
                  offset: 1,
                  color: '#B1C8FA ',
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

  margin-top: 38rpx;

  display: flex;
  align-items: center;
  justify-content: center;
}

.long_left_view {
  width: 335rpx;
  height: 317rpx;

  background: linear-gradient(to right, #ffffff 50%, #f6f6f6 0);
  background-size: 97rpx 100%;
  border-radius: 27rpx 27rpx 27rpx 27rpx;

  margin-right: 10rpx;

  .long_data_bg_view {
    width: 335rpx;
    height: 317rpx;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column; // 布局方向

    position: relative;

    .long_data_view {
      width: 335rpx;
      height: 168rpx;

      // background-color: #666;
    }

    .long_title_view {
      position: absolute;
      top: 20rpx;
      left: 27rpx;
      z-index: 99;

      text {
        font-family: MiSans, MiSans;
        font-weight: 600;
        font-size: 31rpx;
        color: #1d2129;
        line-height: 36rpx;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
    }

    .long_rating_view {
      position: absolute;
      top: 261rpx;
      z-index: 99;

      image {
        width: 19rpx;
        height: 24rpx;

        margin-left: 4rpx;
      }

      text {
        font-family: MiSans, MiSans;
        font-weight: 500;
        font-size: 27rpx;
        color: #1d2129;
        line-height: 42rpx;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }

      .rating_text {
        font-family: MiSans, MiSans;
        font-weight: 500;
        font-size: 27rpx;
        color: #3b76f2;
        line-height: 42rpx;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
    }

    .xaxis_data_view {
      position: absolute;
      top: 231rpx;
      right: 0;
      z-index: 99;

      display: flex;
      align-items: center;
      justify-content: center;

      .xaxis_item_data_view {
        width: 47.71rpx;

        display: flex;
        align-items: center;
        justify-content: center;

        text {
          font-family: MiSans, MiSans;
          font-weight: 500;
          font-size: 15rpx;
          color: #4e5969;
          line-height: 18rpx;
          text-align: center;
          font-style: normal;
          text-transform: none;
        }
      }
    }
  }
}

.long_right_view {
  width: 335rpx;
  height: 317rpx;

  background: linear-gradient(to right, #ffffff 50%, #f6f6f6 0);
  background-size: 97rpx 100%;
  border-radius: 27rpx 27rpx 27rpx 27rpx;

  margin-left: 10rpx;

  .long_data_bg_view {
    width: 335rpx;
    height: 317rpx;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column; // 布局方向

    position: relative;

    .long_data_view {
      width: 335rpx;
      height: 168rpx;

      // background-color: #666;
    }

    .long_title_view {
      position: absolute;
      top: 20rpx;
      left: 27rpx;
      z-index: 99;

      text {
        font-family: MiSans, MiSans;
        font-weight: 600;
        font-size: 31rpx;
        color: #1d2129;
        line-height: 36rpx;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
    }

    .long_rating_view {
      position: absolute;
      top: 261rpx;
      z-index: 99;

      image {
        width: 19rpx;
        height: 24rpx;

        margin-left: 4rpx;
      }

      text {
        font-family: MiSans, MiSans;
        font-weight: 500;
        font-size: 27rpx;
        color: #1d2129;
        line-height: 42rpx;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }

      .rating_text {
        font-family: MiSans, MiSans;
        font-weight: 500;
        font-size: 27rpx;
        color: #3b76f2;
        line-height: 42rpx;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
    }

    .xaxis_data_view {
      position: absolute;
      top: 231rpx;
      right: 0;
      z-index: 99;

      display: flex;
      align-items: center;
      justify-content: center;

      .xaxis_item_data_view {
        width: 47.71rpx;

        display: flex;
        align-items: center;
        justify-content: center;

        text {
          font-family: MiSans, MiSans;
          font-weight: 500;
          font-size: 15rpx;
          color: #4e5969;
          line-height: 18rpx;
          text-align: center;
          font-style: normal;
          text-transform: none;
        }
      }
    }
  }
}
</style>
