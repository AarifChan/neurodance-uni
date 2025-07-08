<!-- 睡眠波 -->
<template>
  <view class="sleep_chart">
    <view class="content_view">
      <!-- 睡眠时长 -->
      <view class="sleep_long_view">
        <text class="hour_view">{{ item.hour }}</text>
        <text style="margin-bottom: 10rpx; margin-left: 4rpx; margin-right: 4rpx">小时</text>
        <text class="minute_view">{{ item.minute }}</text>
        <text style="margin-bottom: 10rpx; margin-left: 4rpx; margin-right: 4rpx">分钟</text>

        <view class="state_view">
          <text>{{ item.state }}</text>
          <image
            v-if="item.isExtend == 1"
            src="/static/images/sleep/ico_shujushangsheng.png"
            style="width: 19.08rpx; height: 27.13rpx; margin-left: 2rpx"
          ></image>
          <image
            v-if="item.isExtend == 0"
            src="/static/images/sleep/ico_shujububian.png"
            style="width: 19.08rpx; height: 5.73rpx; margin-left: 2rpx"
          ></image>
          <image
            v-if="item.isExtend == 2"
            src="/static/images/sleep/ico_shujuxiajiang.png"
            style="width: 19.08rpx; height: 27.13rpx; margin-left: 2rpx"
          ></image>
        </view>
      </view>

      <!-- 状态标签 -->
      <view class="report_view">
        <view class="swiper_item_view">
          <view v-for="(item2, index2) in reportList" :key="index2">
            <text v-if="item2.id != item.id" @click="switchData(item2.id)">{{ item2.name }}</text>
            <text v-if="item2.id == item.id" class="sleep_text_view">{{ item2.name }}</text>
          </view>
        </view>
      </view>

      <!-- 睡眠脑电波 -->
      <view class="eeg_view">
        <view class="button_view" @click="eegView()">
          <text>睡眠脑电波</text>
          <image src="/static/images/sleep/btn_ico_hengpingzhankai_nor.png"></image>
        </view>
      </view>

      <!-- 睡眠分析图 -->
      <view class="sleep_context_view">
        <view class="sleep_view" id="main"></view>
      </view>

      <!-- 前后时间 -->
      <view class="se_time_view">
        <view class="specific_time_view">
          <text>{{ item.startTime }}</text>
          <text>{{ item.endTime }}</text>
        </view>

        <view class="specific_data_view">
          <text>{{ item.startDate }}</text>
          <text>{{ item.endDate }}</text>
        </view>
      </view>
    </view>

    <view class="type_tip_view">
      <view class="n3_view">
        <view></view>
        <text>深睡</text>
      </view>

      <view class="n2_view">
        <view></view>
        <text>浅睡</text>
      </view>

      <view class="eye_view">
        <view></view>
        <text>快速眼动</text>
      </view>

      <view class="up_view">
        <view></view>
        <text>觉醒</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { v4 as uuidv4 } from 'uuid'
import * as echarts from 'echarts'

const item = ref({
  hour: 0,
  minute: 0,
  state: '正常',
  isExtend: 1, // 0: 无变化、1: 增加、2: 减少
  id: undefined, // 当前id
  startTime: '2:09', // 开始时间 - 时分
  endTime: '7:49', // 结束时间 - 时分
  startDate: '', // 开始日期
  endDate: '', // 结束日期
})
const option = ref(undefined)
const myChart = ref(undefined)
const reportList = ref([])
const getStateImage = (val: number) => {
  switch (val) {
    case 0:
      return '/static/images/sleep/ico_shujububian.png'

    case 1:
      return '/static/images/sleep/ico_shujushangsheng.png'

    case 2:
      return '/static/images/sleep/ico_shujuxiajiang.png'
  }
}
const setECharts = () => {
  myChart.value = echarts.init(document.getElementById('main'))
}
// 切换数据
const switchData = (val) => {
  for (var i = 0; i < reportList.value.length; i++) {
    if (reportList.value[i].id == val) {
      item.value = reportList.value[i]
      getSleepList(item.value?.id)
    }
  }
}
const getSleepList = () => {}
</script>

<style lang="scss" scoped>
.sleep_chart {
  position: relative;
  width: 100%;
}
.content_view {
  width: 100%;
  // height: auto;
  height: 350px;
  background: #fff;
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

// 睡眠波
.sleep_context_view {
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 68rpx;

  .sleep_view {
    width: 627.86rpx;
    height: 269.75rpx;
  }
}

// 状态图标
.state_view {
  position: absolute;
  top: 37rpx;
  right: 117rpx;
  z-index: 99;

  display: flex;
  align-items: center;
  justify-content: center;

  text {
    font-family: MiSans, MiSans;
    font-weight: 500;
    font-size: 31rpx;
    color: #1d2129;
    text-align: left;
    font-style: normal;
    text-transform: none;
  }
}

// 报告title
.report_view {
  width: 100%;
  height: 40rpx;

  margin-top: 4rpx;
  margin-bottom: 12rpx;

  .swiper_view {
  }

  .swiper_item_view {
    display: flex;
    align-items: center;
    justify-content: center;

    text {
      padding: 4rpx 11rpx;
      margin: 1rpx 6rpx;

      border-radius: 8rpx 8rpx 8rpx 8rpx;
      border: 2rpx solid #c9cdd4;

      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: 23rpx;
      color: #4e5969;
      line-height: 27rpx;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }

    .sleep_text_view {
      border-radius: 8rpx 8rpx 8rpx 8rpx;
      border: 2rpx solid #6597ec;

      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: 23rpx;
      color: #3b76f2;
      line-height: 27rpx;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }
  }
}

// 睡眠脑电波
.eeg_view {
  width: 100%;
  height: 48rpx;

  display: flex;
  align-items: center;
  justify-content: end;

  position: absolute;
  z-index: 1;

  .button_view {
    width: 138rpx;
    height: 34rpx;

    margin-right: 30rpx;

    display: flex;
    align-items: center;
    justify-content: center;

    background: linear-gradient(270deg, #4d73ef 0%, #5096ff 100%);
    border-radius: 4rpx 4rpx 4rpx 4rpx;

    text {
      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: 19rpx;
      color: #ffffff;
      line-height: 22rpx;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }

    image {
      margin-left: 7rpx;
      width: 20rpx;
      height: 20rpx;
    }
  }
}

// 前后时间
.se_time_view {
  width: 100%;
  height: auto;

  margin-top: 20rpx;
  padding-bottom: 57rpx;

  .specific_time_view {
    width: auto;
    height: auto;

    padding-left: 70rpx;
    padding-right: 70rpx;

    display: flex;
    align-items: center;
    justify-content: space-between;

    text {
      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: 19rpx;
      color: #1d2129;
      line-height: 22rpx;
      text-align: center;
      font-style: normal;
      text-transform: non;
    }
  }

  .specific_data_view {
    margin-top: 6rpx;

    width: auto;
    height: auto;

    padding-left: 70rpx;
    padding-right: 70rpx;

    display: flex;
    align-items: center;
    justify-content: space-between;

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

// 睡眠图表提示
.type_tip_view {
  width: 100%;
  height: 90rpx;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

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

    margin: 0 27.5rpx;

    view {
      width: 11rpx;
      height: 11rpx;

      background: #0723c3;
      border-radius: 8rpx 8rpx 8rpx 8rpx;

      margin-right: 4rpx;
    }
  }

  .n2_view {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 27.5rpx;

    view {
      width: 11rpx;
      height: 11rpx;

      background: #374df2;
      border-radius: 8rpx 8rpx 8rpx 8rpx;

      margin-right: 4rpx;
    }
  }

  .n1_view {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 27.5rpx;

    view {
      width: 11rpx;
      height: 11rpx;

      background: #7967f3;
      border-radius: 8rpx 8rpx 8rpx 8rpx;

      margin-right: 4rpx;
    }
  }

  .eye_view {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 27.5rpx;

    view {
      width: 11rpx;
      height: 11rpx;

      background: #cf94f8;
      border-radius: 8rpx 8rpx 8rpx 8rpx;

      margin-right: 4rpx;
    }
  }

  .up_view {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 27.5rpx;

    view {
      width: 11rpx;
      height: 11rpx;

      background: #ffae23;
      border-radius: 8rpx 8rpx 8rpx 8rpx;

      margin-right: 4rpx;
    }
  }
}
</style>
