<!-- 睡眠评分 -->
<template>
  <view class="content_view">
    <view class="evaluate_bg_view">
      <view class="evaluate_left_view">
        <view class="circular_view" id="circular"></view>
        <view class="score_view">
          <text class="score_text">82</text>
          <text class="unit_view">分</text>
        </view>

        <view class="star_view">
          <view v-for="(item, index) in starList" :key="index">
            <image
              style="width: 23.92rpx; height: 22.52rpx"
              :src="
                item == 1
                  ? '/static/ico_xingxing_dianliang.png'
                  : '/static/ico_xingxing_weidianliang.png'
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
        <view v-for="(item, index) in dataList" :key="index">
          <view class="data_item_view">
            <view
              :class="
                item.type == 0
                  ? 'data_item_tip_0_view'
                  : item.type == 1
                    ? 'data_item_tip_1_view'
                    : item.type == 2
                      ? 'data_item_tip_2_view'
                      : item.type == 3
                        ? 'data_item_tip_3_view'
                        : 'data_item_tip_4_view'
              "
            ></view>
            <text class="data_item_name_view">{{ item.name }}</text>
            <text class="data_item_value_view">{{ item.valueStr }}</text>
            <text class="data_item_time_view">{{ item.time }}</text>
          </view>
        </view>
      </view>
    </view>

    <view class="more_data_view" @click="moreData()">
      <text>更多数据</text>
      <image src="/static/btn_ico_shuimianhuxi_youjiantou_nor.png"></image>
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
      dataList: [
        {
          name: 'N3深睡',
          valueStr: '18%偏低',
          time: '1小时20分钟',
          type: 0,
        },
        {
          name: 'N2浅睡',
          valueStr: '30%正常',
          time: '2小时20分钟',
          type: 1,
        },
        {
          name: 'N1浅睡',
          valueStr: '30%正常',
          time: '1小时20分钟',
          type: 2,
        },
        {
          name: '快速动眼',
          valueStr: '20%正常',
          time: '1小时20分钟',
          type: 3,
        },
        {
          name: '觉醒',
          valueStr: '2%正常',
          time: '5次/5分钟',
          type: 4,
        },
      ],
    }
  },
  mounted() {
    this.setECharts()
  },
  methods: {
    setECharts() {
      var myChart = echarts.init(document.getElementById('circular'))

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
        window.android.goSleepData('day')
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
  height: 413rpx;

  background: #ffffff;
  border-radius: 27rpx 27rpx 27rpx 27rpx;

  margin-top: 38rpx;
  position: relative;

  display: flex;
  align-items: start;
  justify-content: space-between;
}

.evaluate_left_view {
  width: 180rpx;
  height: auto;

  margin-left: 45rpx;
  margin-top: 39rpx;

  .circular_view {
    width: 180rpx;
    height: 180rpx;
  }

  .score_view {
    width: 61.57rpx;
    height: 68.57rpx;
    background: url('~@/static/ico_shuimian.png');
    background-repeat: no-repeat;
    background-size: cover;

    position: absolute;
    top: 94rpx;
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

  margin-top: 58rpx;
  margin-right: 47rpx;

  .data_item_view {
    display: flex;
    align-items: center;
    justify-content: start;

    margin: 16rpx 0;

    .data_item_tip_0_view {
      width: 11rpx;
      height: 11rpx;

      background: #0723c3;
      border-radius: 8rpx 8rpx 8rpx 8rpx;

      margin-right: 6rpx;
    }

    .data_item_tip_1_view {
      width: 11rpx;
      height: 11rpx;

      background: #374df2;
      border-radius: 8rpx 8rpx 8rpx 8rpx;

      margin-right: 6rpx;
    }

    .data_item_tip_2_view {
      width: 11rpx;
      height: 11rpx;

      background: #7967f3;
      border-radius: 8rpx 8rpx 8rpx 8rpx;

      margin-right: 6rpx;
    }

    .data_item_tip_3_view {
      width: 11rpx;
      height: 11rpx;

      background: #cf94f8;
      border-radius: 8rpx 8rpx 8rpx 8rpx;

      margin-right: 6rpx;
    }

    .data_item_tip_4_view {
      width: 11rpx;
      height: 11rpx;

      background: #ffae23;
      border-radius: 8rpx 8rpx 8rpx 8rpx;

      margin-right: 6rpx;
    }

    .data_item_name_view {
      width: 112rpx;

      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: 23rpx;
      color: #1d2129;
      line-height: 27rpx;
      font-style: normal;
      text-transform: none;
    }

    .data_item_value_view {
      width: 110rpx;

      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: 19rpx;
      color: #4e5969;
      line-height: 22rpx;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }

    .data_item_time_view {
      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: 19rpx;
      color: #4e5969;
      text-align: left;
      font-style: normal;
      text-transform: none;
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
