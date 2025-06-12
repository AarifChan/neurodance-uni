<!-- 脑电横屏 -->
<template>
  <view class="content_view">
    <!-- 当前睡眠时长 -->
    <view class="current_sleep">
      <text class="num_view">{{ hour }}</text>
      <text>小时</text>
      <text class="num_view">{{ minute }}</text>
      <text>分钟</text>
    </view>

    <!-- 时间标签 -->
    <view class="time_stamp_view">
      <swiper class="swiper_view">
        <swiper-item v-for="(item, index) in setReportList" :key="index">
          <view class="swiper_item_view">
            <view v-for="(item2, index2) in item" :key="index2">
              <text v-if="item2.id != id" @click="switchData(item2.id)">{{ item2.name }}</text>
              <text v-if="item2.id == id" class="sleep_text_view">{{ item2.name }}</text>
            </view>
          </view>
        </swiper-item>
      </swiper>
    </view>

    <scroll-view
      class="control_area_view"
      :style="{ height: dynamicHeight }"
      scroll-y="true"
      show-scrollbar="false"
    >
      <!-- 内容区 -->
      <view class="chart_area_view">
        <!-- 上 -->
        <view class="chart_top_view">
          <view class="long_time_view">
            <view>
              <text style="margin-left: 10rpx">入睡 {{ startTime }}</text>
              <text style="margin-left: 10rpx">睡眠潜伏期：{{ latency }}分钟</text>
            </view>

            <text style="margin-right: 10rpx">清醒 {{ endTime }}</text>
          </view>
          <!-- 睡眠分期图 -->
          <view class="inst_chart_view">
            <sleep-chart-vue></sleep-chart-vue>
          </view>

          <view class="divider_view"></view>

          <!-- 体立 -->
          <view class="body_chart_view">
            <body-stand-vue></body-stand-vue>
          </view>
        </view>

        <view class="divider_view"></view>

        <!-- 下 -->
        <view class="chart_bottom_view">
          <!-- 脑电 -->
          <view class="eeg_view">
            <eeg-chart-vue></eeg-chart-vue>
          </view>

          <!-- 分割线 -->
          <view class="divider_view"></view>

          <!-- 鼾声 -->
          <view class="snore_view">
            <snore-chart-vue></snore-chart-vue>
          </view>
        </view>
      </view>

      <!-- 当前时间 -->
      <view class="current_time_view" :style="{ left: currentTimePosition + 'rpx' }">
        <text>{{ currentTime }}</text>
      </view>

      <!-- 时间轴 -->
      <movable-area class="movaBox">
        <movable-view
          class="movaDot"
          direction="horizontal"
          @change="onChange"
          @touchstart="onTouchStart"
          @touchend="onTouchEnd"
          @touchmove="onTouchMove"
        >
          <view class="dot_line"></view>
        </movable-view>
      </movable-area>

      <!-- 针 -->
      <view class="position-indicator" :style="{ left: currentSegment + 'rpx' }"></view>
    </scroll-view>
  </view>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'

import sleepChartVue from './sleepChart.vue'
import bodyStandVue from './bodyStand.vue'
import eegChartVue from './eegChart.vue'
import snoreChartVue from './snoreChart.vue'

export default {
  props: {
    time: '',
    dynamicHeight: '',
  },
  components: {
    sleepChartVue,
    bodyStandVue,
    eegChartVue,
    snoreChartVue,
  },
  data() {
    return {
      currentSegment: 16,
      currentTime: '00:00',
      currentTimePosition: 6,
      currentWidth: 800,

      hour: 23,
      minute: 59,
      state: '正常',
      isExtend: 1, // 0: 无变化、1: 增加、2: 减少
      id: undefined, // 当前id
      startTime: '2:09', // 开始时间 - 时分
      endTime: '7:49', // 结束时间 - 时分
      startDate: '', // 开始日期
      endDate: '', // 结束日期
      difference: undefined, // 开始与结束的时间差
      startDateTamp: undefined, // 具体开始时间
      endDateTamp: undefined, // 具体结束时间
      latency: 0, // 当前潜伏期

      reportList: [
        {
          id: uuidv4(),
          hour: 8,
          minute: 26,
          state: '上升',
          isExtend: 1, // 0: 无变化、1: 增加、2: 减少
          name: '夜间睡眠',
          startTime: '2025-02-10 2:09',
          endTime: '2025-02-10 7:49',
          latency: 10,
          option: {},
        },
        {
          id: uuidv4(),
          hour: 6,
          minute: 46,
          state: '正常',
          isExtend: 0, // 0: 无变化、1: 增加、2: 减少
          name: '小睡1',
          startTime: '2025-02-09 12:09',
          endTime: '2025-02-10 6:49',
          latency: 12,
          option: {},
        },
        {
          id: uuidv4(),
          hour: 4,
          minute: 46,
          state: '下降',
          isExtend: 2, // 0: 无变化、1: 增加、2: 减少
          name: '小睡2',
          startTime: '2025-02-10 21:09',
          endTime: '2025-02-11 7:49',
          latency: 14,
          option: {},
        },
        {
          id: uuidv4(),
          hour: 8,
          minute: 16,
          state: '上升',
          isExtend: 1, // 0: 无变化、1: 增加、2: 减少
          name: '夜间睡眠',
          startTime: '2025-02-10 20:09',
          endTime: '2025-02-11 7:49',
          latency: 17,
          option: {},
        },
        {
          id: uuidv4(),
          hour: 6,
          minute: 36,
          state: '正常',
          isExtend: 0, // 0: 无变化、1: 增加、2: 减少
          name: '小睡1',
          startTime: '2025-02-10 18:09',
          endTime: '2025-02-11 00:49',
          latency: 18,
          option: {},
        },
        {
          id: uuidv4(),
          hour: 5,
          minute: 26,
          state: '下降',
          isExtend: 2, // 0: 无变化、1: 增加、2: 减少
          name: '小睡2',
          startTime: '2025-02-10 9:09',
          endTime: '2025-02-10 17:49',
          latency: 20,
          option: {},
        },
      ],

      setReportList: [],
    }
  },
  onLoad(option) {},
  mounted() {
    console.log(this.time)
    this.setReportListVal()
    uni
      .createSelectorQuery()
      .select('.movaBox')
      .boundingClientRect((data) => {
        this.currentWidth = data.width
        // console.log(this.currentWidth)
      })
      .exec()
  },
  methods: {
    onTouchStart() {
      // console.log("touchstart");
    },
    onTouchMove() {
      // console.log("touchmove");
    },
    onTouchEnd() {
      // console.log("touchend");
    },
    // 时间结算
    onChange(e) {
      let pointer = parseInt(e.detail.x + 18)
      let position = parseInt(e.detail.x + 6)
      this.currentSegment = this.pxToRpx(pointer)
      this.currentTimePosition = this.pxToRpx(position)
      // console.log(parseInt(e.detail.x));

      let currentPosition =
        (parseInt(e.detail.x) / this.currentWidth) * this.difference + this.startDateTamp
      let cT = new Date(currentPosition)
      this.currentTime =
        (cT.getHours() > 9 ? cT.getHours() : '0' + cT.getHours()) +
        ':' +
        (cT.getMinutes() > 9 ? cT.getMinutes() : '0' + cT.getMinutes())
    },
    pxToRpx(px) {
      let scale = uni.upx2px(100) / 100
      return px / scale
    },
    setReportListVal() {
      this.setReportList = this.$public.chunkArray(this.reportList, 3)
      this.switchData(undefined)
    },

    // 切换数据
    switchData(val) {
      for (var i = 0; i < this.reportList.length; i++) {
        if (this.reportList[i].id == val || (val == undefined && i == 0)) {
          this.id = this.reportList[i].id
          this.hour = this.reportList[i].hour
          this.minute = this.reportList[i].minute
          this.state = this.reportList[i].state
          this.isExtend = this.reportList[i].isExtend
          this.latency = this.reportList[i].latency

          var startTime = this.reportList[i].startTime
          var endTime = this.reportList[i].endTime
          let stt = new Date(startTime)
          let ett = new Date(endTime)

          this.startTime =
            (stt.getHours() > 9 ? stt.getHours() : '0' + stt.getHours()) +
            ':' +
            (stt.getMinutes() > 9 ? stt.getMinutes() : '0' + stt.getMinutes())
          this.endTime =
            (ett.getHours() > 9 ? ett.getHours() : '0' + ett.getHours()) +
            ':' +
            (ett.getMinutes() > 9 ? ett.getMinutes() : '0' + ett.getMinutes())

          this.startDate = '入睡 ' + (stt.getMonth() + 1) + '/' + stt.getDate()
          this.endDate = '清醒 ' + (ett.getMonth() + 1) + '/' + ett.getDate()

          this.startDateTamp = stt.getTime()
          this.endDateTamp = ett.getTime()
          this.difference = this.endDateTamp - this.startDateTamp
          this.currentTime = this.startTime

          break
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@function tovmin($rpx) {
  /* $rpx为需要转换的字号 */
  @return #{$rpx * 100 / 750}vmin;
}

.content_view {
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; // 布局方向

  position: relative;
}

.control_area_view {
  width: 695rpx;

  position: absolute;
  top: 26rpx;
  z-index: 1;
}

/**
	 * 图表显示区域
	 */
.chart_area_view {
  width: 663rpx;
  height: 265rpx;
  border-radius: 0rpx 0rpx 0rpx 0rpx;
  border: 1rpx solid #c9cdd4;

  position: absolute;
  top: 21rpx;
  z-index: 1;

  margin-left: 16rpx;
  margin-right: 16rpx;

  .chart_top_view {
    width: 100%;
    height: 136rpx;

    background: linear-gradient(to right, #ffffff 50%, #f6f6f6 0);
    background-size: 149rpx 100%;

    position: relative;

    .long_time_view {
      height: auto;
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: space-between;

      position: absolute;
      z-index: 3;

      text {
        margin-top: 10rpx;

        font-family: MiSans, MiSans;
        font-weight: 500;
        font-size: 9rpx;
        color: #4e5969;
        line-height: 10rpx;
        text-align: center;
        font-style: normal;
        text-transform: none;
      }
    }

    /**
			 * 睡眠分期图
			 */
    .inst_chart_view {
      width: 100%;
      height: 96rpx;
    }

    .divider_view {
      width: 100%;
      height: 1rpx;
      background-color: #c9cdd4;
    }

    /**
			 * 体立分期图
			 */
    .body_chart_view {
      width: 100%;
      height: 40rpx;
    }
  }

  .divider_view {
    width: 100%;
    height: 1rpx;
    background-color: #c9cdd4;
  }

  .chart_bottom_view {
    width: 100%;
    height: 128rpx;

    background: linear-gradient(to right, #ffffff 99%, #dce7ff 0);
    background-size: 40rpx 100%;

    .eeg_view {
      width: 100%;
      height: 79rpx;
    }

    .divider_view {
      width: 100%;
      height: 1rpx;
    }

    .snore_view {
      width: 100%;
      height: 48rpx;
    }
  }
}

/**
	 * 圆点
	 */
.movaBox {
  width: 679rpx;
  height: 16rpx;

  margin-left: 8rpx;
  margin-right: 8rpx;

  position: absolute;
  top: 12rpx;
  z-index: 2;

  .dot_line {
  }

  .movaDot {
    width: 16rpx;
    height: 16rpx;
    background: #ffffff;
    box-shadow: 0rpx 0rpx 21rpx 0rpx rgba(177, 177, 177, 0.18);
    border: 1rpx solid #a7c1fa;
    border-radius: 50%;
  }
}

/**
	 * 指针
	 */
.position-indicator {
  width: 2rpx;
  height: 136rpx;
  background-color: #e11f14;

  position: absolute;
  top: 18rpx;
  z-index: 1;
}

/**
	 * 顶部时间
	 */
.current_time_view {
  position: absolute;
  top: 0rpx;
  z-index: 2;

  font-family: MiSans, MiSans;
  font-weight: 500;
  font-size: 9rpx;
  color: #3b76f2;
  line-height: 10rpx;
  text-align: left;
  font-style: normal;
  text-transform: none;
}

/**
	 * 当前时间
	 */
.current_sleep {
  .num_view {
    font-family: MiSans, MiSans;
    font-weight: 600;
    font-size: 18rpx;
    color: #1d2129;
    line-height: 21rpx;
    text-align: left;
    font-style: normal;
    text-transform: none;

    margin-left: 2rpx;
    margin-right: 2rpx;
  }

  text {
    font-family: MiSans, MiSans;
    font-weight: 500;
    font-size: 11rpx;
    color: #1d2129;
    line-height: 12rpx;
    text-align: left;
    font-style: normal;
    text-transform: none;
  }
}

.time_stamp_view {
  width: 169rpx;
  height: 19rpx;
  position: absolute;
  top: 4rpx;
  z-index: 2;

  margin-left: 280rpx;

  .swiper_view {
    height: 19rpx;
  }

  .swiper_item_view {
    display: flex;
    align-items: center;
    justify-content: center;

    text {
      padding: 2rpx 5rpx;
      margin: 1rpx 4rpx;

      border-radius: 4rpx 4rpx 4rpx 4rpx;
      border: 1rpx solid #c9cdd4;

      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: 11rpx;
      color: #4e5969;
      line-height: 12rpx;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }

    .sleep_text_view {
      border-radius: 4rpx 4rpx 4rpx 4rpx;
      border: 1rpx solid #6597ec;

      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: 11rpx;
      color: #3b76f2;
      line-height: 12rpx;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }
  }
}
</style>
