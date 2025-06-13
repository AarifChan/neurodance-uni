<!-- 睡眠评分 - 年 -->
<template>
  <view class="content_view">
    <view class="evaluate_bg_view">
      <view class="title_view">
        <text>佩戴科学睡眠</text>
        <text class="wear_view">{{ wear }}天</text>
      </view>

      <view class="nighttime_average_view">
        <view>
          <text>年日均夜间睡眠</text>
          <text class="time_view" style="margin-left: 15rpx">{{ nightTime }}</text>
        </view>
        <text class="time_view">{{ evaluateStr }}</text>
      </view>

      <view class="refer_top_view">
        <text>参考区间：{{ interval }}</text>
      </view>

      <view class="line_view"></view>

      <view class="evaluate_left_view">
        <view class="circular_view" id="circularYear"></view>

        <view class="score_view">
          <text class="score_text">{{ score }}</text>
          <text class="unit_view">分</text>
        </view>

        <view class="star_view">
          <view v-for="(item, index) in starList" :key="index">
            <image
              style="width: 23.92rpx; height: 22.52rpx"
              :src="
                item == 1
                  ? '/static/images/sleep/ico_xingxing_dianliang.png'
                  : '/static/images/sleep/ico_xingxing_weidianliang.png'
              "
            ></image>
          </view>
        </view>

        <view class="sleep_time_view">
          <text class="sleep_time_hour_view">{{ hour }}</text>
          <text class="sleep_time_tip_view">时</text>
          <text class="sleep_time_hour_view">{{ minute }}</text>
          <text class="sleep_time_tip_view">分</text>
        </view>

        <view class="quality_view">
          <text>睡眠质量</text>
          <text style="color: #3b76f2">{{ scoreStr }}</text>
        </view>
      </view>

      <view class="evaluate_right_view">
        <view v-for="(item, index) in averageDataList" :key="index">
          <view class="data_item_view">
            <view class="data_item_top_view">
              <view>
                <text>{{ item.title }}</text>
                <text class="time_view">{{ item.refer }}</text>
              </view>

              <text :class="item.type == 0 ? 'comment_view' : 'comment_h_view'">
                {{ item.comment }}
              </text>
            </view>

            <view class="refer_to_view">
              <text>参考区间：{{ item.refer }}</text>
            </view>
          </view>
        </view>
      </view>
    </view>

    <view class="more_data_view" @click="moreData">
      <text>更多数据</text>
      <image src="/static/images/sleep/btn_ico_shuimianhuxi_youjiantou_nor.png"></image>
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
      starList: [1, 1, 1, 1, 0],
      hour: 6,
      minute: 48,
      scoreStr: '良好',
      wear: 87,
      score: 82,
      nightTime: '6小时48分钟',
      evaluateStr: '正常',
      interval: '6-10小时',
      averageDataList: [
        {
          title: '日均入睡时间',
          time: '01:12',
          refer: '< 0:00',
          comment: '偏晚',
          type: 1,
        },
        {
          title: '日均夜间睡眠',
          time: '6小时40分钟',
          refer: '< 0:00',
          comment: '正常',
          type: 0,
        },
        {
          title: '日均深睡时长',
          time: '25%',
          refer: '20-50%',
          comment: '正常',
          type: 0,
        },
      ],
    }
  },
  mounted() {
    this.setECharts()
  },
  methods: {
    setECharts() {
      var myChart = echarts.init(document.getElementById('circularYear'))

      var option = {
        angleAxis: {
          clockwise: false, // 刻度增长是否按顺时针，默认顺时针(true)。
          axisLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          min: 0,
          max: 100, //一圈的刻度值
          startAngle: 0, //初始角度
        },
        radiusAxis: {
          type: 'category',
          data: ['1', '2', '3', '4'], // 极坐标径向轴中的类目，这边有几个数，
          // 就代表径向轴分了几份，和series中的data对应，这样就可以撑开圆环
          z: 10,
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
        },
        polar: {},
        color: ['#0723C3', '#374DF2 ', '#7967F3 ', '#CF94F8', '#FFAE23 '],
        series: [
          {
            type: 'bar',
            data: [0, 0, 0, 18],
            coordinateSystem: 'polar',
            name: 'N3深睡',
            roundCap: true,
            stack: 'a',
          },
          {
            type: 'bar',
            data: [0, 0, 0, 30], // 前面的0，累计还是0，这样径向轴上的对应的分区总数就是0，不会显示圆环
            coordinateSystem: 'polar',
            name: 'N2浅睡',
            stack: 'a',
            roundCap: true,
          },
          {
            type: 'bar',
            data: [0, 0, 0, 30],
            coordinateSystem: 'polar',
            name: 'N1浅睡',
            stack: 'a',
            roundCap: true,
          },
          {
            type: 'bar',
            data: [0, 0, 0, 20],
            coordinateSystem: 'polar',
            name: '快速动眼',
            stack: 'a',
            roundCap: true,
          },
          {
            type: 'bar',
            data: [0, 0, 0, 2],
            coordinateSystem: 'polar',
            name: '觉醒',
            stack: 'a',
            roundCap: true,
          },
        ],
      }

      myChart.setOption(option)
    },
    moreData() {
      if (window.android != null && window.android.goSleepData != null) {
        window.android.goSleepData('year')
      }
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

  position: relative;
}

.evaluate_bg_view {
  width: 689rpx;
  height: 621rpx;

  background: #ffffff;
  border-radius: 27rpx 27rpx 27rpx 27rpx;

  position: relative;

  display: flex;
  align-items: start;
  justify-content: space-between;
}

.title_view {
  width: 628rpx;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  top: 38rpx;
  left: 30rpx;
  z-index: 3;

  text {
    font-family: MiSans, MiSans;
    font-weight: 600;
    font-size: 31rpx;
    color: #1d2129;
    line-height: 36rpx;
    text-align: justified;
    font-style: normal;
    text-transform: none;
  }

  .wear_view {
    font-family: MiSans, MiSans;
    font-weight: 500;
    font-size: 31rpx;
    color: #4e5969;
    line-height: 36rpx;
    text-align: left;
    font-style: normal;
    text-transform: none;
  }
}

.nighttime_average_view {
  width: 628rpx;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  top: 108rpx;
  left: 30rpx;
  z-index: 3;

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

  .time_view {
    font-family: MiSans, MiSans;
    font-weight: 500;
    font-size: 27rpx;
    color: #4e5969;
    line-height: 42rpx;
    text-align: left;
    font-style: normal;
    text-transform: none;
  }
}

.refer_top_view {
  width: 628rpx;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  top: 154rpx;
  left: 30rpx;
  z-index: 3;

  text {
    font-family: MiSans, MiSans;
    font-weight: 500;
    font-size: 23rpx;
    color: #86909c;
    line-height: 27rpx;
    text-align: left;
    font-style: normal;
    text-transform: none;
  }
}

.line_view {
  position: absolute;
  top: 215rpx;
  left: 30rpx;
  z-index: 3;

  width: 628rpx;
  height: 1rpx;
  background: #d9d9d9;
}

.evaluate_left_view {
  width: 180rpx;
  height: auto;

  margin-top: 235rpx;
  margin-left: 45rpx;

  .circular_view {
    width: 180rpx;
    height: 180rpx;
  }

  .score_view {
    width: 61.57rpx;
    height: 68.57rpx;
    background: url('~@/static/images/sleep/ico_shuimian.png');
    background-repeat: no-repeat;
    background-size: cover;

    position: absolute;
    top: 290rpx;
    left: 107rpx;
    z-index: 99;

    display: flex;
    align-items: end;
    justify-content: center;

    .score_text {
      color: var(--color-text-1, #1d2129);
      text-align: center;
      font-family: MiSans;
      font-size: 46rpx;
      font-style: normal;
      font-weight: 520;
    }

    .unit_view {
      color: var(--color-text-2, #4e5969);
      text-align: center;
      font-family: MiSans;
      font-size: 19rpx;
      font-style: normal;
      font-weight: 450;
      line-height: normal;

      margin-bottom: 10rpx;
    }
  }

  .star_view {
    width: 180rpx;

    display: flex;
    align-items: center;
    justify-content: center;

    // background-color: #4E5969;
  }

  .sleep_time_view {
    width: 180rpx;

    display: flex;
    align-items: end;
    justify-content: center;

    // background-color: #4E5969;

    margin-top: 16rpx;

    .sleep_time_hour_view {
      font-family: MiSans, MiSans;
      font-weight: 600;
      font-size: 31rpx;
      color: #1d2129;
      text-align: center;
      font-style: normal;
      text-transform: none;

      margin-left: 2rpx;
      margin-right: 2rpx;
    }

    .sleep_time_tip_view {
      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: 19rpx;
      color: #1d2129;
      text-align: center;
      font-style: normal;
      text-transform: none;

      margin-bottom: 5rpx;
      margin-left: 2rpx;
      margin-right: 2rpx;
    }
  }

  .quality_view {
    width: 180rpx;

    display: flex;
    align-items: center;
    justify-content: center;

    text {
      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: 19rpx;
      color: #4e5969;
      line-height: 22rpx;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }
  }
}

.evaluate_right_view {
  width: 352.47rpx;
  height: 256.87rpx;

  margin-top: 260rpx;
  margin-right: 47rpx;

  .data_item_view {
    display: flex;
    align-items: center;
    justify-content: start;

    flex-direction: column; // 布局方向

    .data_item_top_view {
      width: 370rpx;

      display: flex;
      align-items: center;
      justify-content: space-between;

      text {
        font-family: MiSans, MiSans;
        font-weight: 500;
        font-size: 23rpx;
        color: #1d2129;
        line-height: 27rpx;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }

      .time_view {
        font-family: MiSans, MiSans;
        font-weight: 500;
        font-size: 23rpx;
        color: #4e5969;
        line-height: 27rpx;
        text-align: left;
        font-style: normal;
        text-transform: none;

        margin-left: 15rpx;
      }

      .comment_view {
        font-family: MiSans, MiSans;
        font-weight: 500;
        font-size: 23rpx;
        color: #4e5969;
        line-height: 27rpx;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }

      .comment_h_view {
        font-family: MiSans, MiSans;
        font-weight: 500;
        font-size: 23rpx;
        color: #3b76f2;
        line-height: 27rpx;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
    }

    .refer_to_view {
      margin-top: 2rpx;
      margin-bottom: 36rpx;

      width: 370rpx;

      display: flex;
      align-items: center;
      justify-content: start;

      text {
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
  }
}

.more_data_view {
  width: 100%;

  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 99;

  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 37rpx;
  padding-bottom: 37rpx;

  text {
    font-family: MiSans, MiSans;
    font-weight: 500;
    font-size: 23rpx;
    color: #4e5969;
    line-height: 27rpx;
    text-align: justified;
    font-style: normal;
    text-transform: none;
  }

  image {
    margin-left: 15rpx;
    width: 10rpx;
    height: 18rpx;
  }
}
</style>
