<!-- HoST - 年 -->
<template>
  <view class="content_view">
    <!-- 时间切换 -->
    <view class="data_top_view" ref="topView">
      <view class="data_top_item_view">
        <image :src="leftImage" @click="nextPage()"></image>
        <view class="data_select_view" @click="selectTime()">
          <text>{{ dataStr }}</text>
          <image
            src="/static/btn_ico_zhankai_nor.png"
            style="width: 20.99rpx; height: 11.45rpx; padding-left: 15rpx"
          ></image>
        </view>
        <image :src="rightImage"></image>
      </view>
    </view>

    <!-- 内容区域 -->
    <view>
      <scroll-view :style="{ height: dynamicHeight }" scroll-y="true" show-scrollbar="false">
        <sleep-data />
        <sleep-rating />
        <alarm-clock />
        <deep-sleep-long />
        <deep-sleep-average />
        <average-start-up />
        <average-breathe />
        <average-sleep-position />
        <average-time-sleep />
        <suggestion-explain />
      </scroll-view>
    </view>

    <!-- 时间选择 -->
    <view
      :animation="animationData"
      class="time_view"
      :style="{ height: dynamicHeight, bottom: -dynamicHeight }"
    >
      <view>
        <view class="top_tiem_icon" @click="selectTime()">
          <image src="/static/datepicker_ico_close.png"></image>
        </view>

        <view class="title_time_view">
          <text>选择时间</text>
          <image src="/static/datepicker_ico_backtotoday.png"></image>
        </view>

        <view class="week_day_view">
          <text></text>
          <text></text>
          <text></text>
          <text></text>
          <text></text>
          <text></text>
          <text></text>
        </view>
      </view>

      <view class="time_context_view">
        <scroll-view class="data_list_view" :style="{ height: timeHigh }" :scroll-y="true">
          <uni-grid
            :column="4"
            :square="false"
            :show-border="false"
            @change=""
            class="day_grid_view"
          >
            <uni-grid-item v-for="(item, index) in listData" :key="index" style="width: 166.5rpx">
              <view class="grid-item-box" @click="change(index)">
                <text
                  v-if="!item.data"
                  :class="[
                    item.today && item.selected
                      ? 'text_not_today_selected'
                      : item.today
                        ? 'text_not_today'
                        : item.selected
                          ? 'text_not_selected'
                          : 'text_not',
                  ]"
                >
                  {{ item.year + '年' }}
                </text>
                <text
                  v-if="item.data"
                  :class="[
                    item.today && item.selected
                      ? 'text_data_today_selected'
                      : item.today
                        ? 'text_data_today'
                        : item.selected
                          ? 'text_data_selected'
                          : 'text_data',
                  ]"
                >
                  {{ item.year + '年' }}
                </text>
              </view>
            </uni-grid-item>
          </uni-grid>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'

import uniGrid from '@dcloudio/uni-ui/lib/uni-grid/uni-grid.vue'
import uniGridItem from '@dcloudio/uni-ui/lib/uni-grid-item/uni-grid-item.vue'

import sleepData from './component/sleepData.vue'
import sleepRating from './component/sleepRating.vue'
import alarmClock from './component/alarmClock.vue'
import deepSleepLong from './component/deepSleepLong.vue'
import deepSleepAverage from './component/deepSleepAverage.vue'
import averageStartUp from './component/averageStartUp.vue'
import averageBreathe from './component/averageBreathe.vue'
import averageSleepPosition from './component/averageSleepPosition.vue'
import averageTimeSleep from './component/averageTimeSleep.vue'
import suggestionExplain from './component/suggestionExplain.vue'

export default {
  props: {
    selected: undefined,
  },
  components: {
    uniGrid,
    uniGridItem,
    sleepData,
    sleepRating,
    alarmClock,
    deepSleepLong,
    deepSleepAverage,
    averageStartUp,
    averageBreathe,
    averageSleepPosition,
    averageTimeSleep,
    suggestionExplain,
  },
  data() {
    return {
      page: 0, // 当前显示的页面
      osName: '',
      leftImage: '/static/btn_ico_zuojiantou_nor.png',
      rightImage: '/static/btn_ico_youjiantou_dis.png',
      dataStr: '2025年',
      show: false,
      animationData: {},
      dynamicHeight: '772px', // 内容高
      timeHigh: '660px', // 日历高度
      hwHeight: 0, // 内容窗口高度
      listData: [
        {
          id: uuidv4(),
          year: '2025',
          statData: '2025-01-01',
          endData: '2025-12-31',
          data: true,
          today: true,
        },
        {
          id: uuidv4(),
          year: '2024',
          statData: '2024-01-01',
          endData: '2024-12-31',
          data: false,
          today: false,
        },
        {
          id: uuidv4(),
          year: '2023',
          statData: '2023-01-01',
          endData: '2023-12-31',
          data: false,
          today: false,
        },
      ],
    }
  },
  mounted() {
    // 获取系统信息
    uni.getSystemInfo({
      success(res) {
        this.osName = res.osName
        console.log('当前系统：' + this.osName) // 系统信息
      },
    })

    this.page = this.$props.selected
    this.animation = uni.createAnimation()
    this.getClineHeight()
  },
  methods: {
    // 获取可视高度
    getClineHeight() {
      var height = 0
      uni
        .createSelectorQuery()
        .select('.data_top_view')
        .boundingClientRect((data) => {
          height = data.height
        })
        .exec()

      const res = uni.getSystemInfoSync()
      this.hwHeight = res.windowHeight - height // 内容窗口高度
      this.dynamicHeight = `${this.hwHeight}px`
      // console.log('dynamicHeight：', this.hwHeight);

      var tHeight = 0
      uni
        .createSelectorQuery()
        .select('.data_top_view')
        .boundingClientRect((data) => {
          tHeight = data.height
        })
        .exec()
      this.timeHigh = this.hwHeight - tHeight
    },
    // 切换下一页
    nextPage() {
      this.page = 2
      this.$emit('page', this.page)
    },
    // 选择时间
    selectTime() {
      this.running()
    },
    // 日历动画
    running() {
      if (this.show) {
        this.show = false
        var num = this.hwHeight
        this.animation.translateY(num).step({
          duration: 500,
        })
        this.animationData = this.animation.export()
      } else {
        // console.log("到这里！！")
        this.show = true
        var num = this.hwHeight
        this.animation.translateY(-num).step({
          duration: 600,
        })
        this.animationData = this.animation.export()
      }
    },
    change(val) {
      this.running()
      for (var i = 0; i < this.listData.length; i++) {
        this.listData[i].selected = false
      }
      this.listData[val].selected = true
      this.dataStr = this.listData[val].year + '年'
      console.log(JSON.stringify(val))
    },
  },
}
</script>

<style lang="scss" scoped>
.content_view {
  width: 100%;
  height: auto;

  background-color: #f3f3f3;
}

// 顶部时间选择
.data_top_view {
  width: 100%;
  height: 261rpx;
  background-color: #ffffff;

  .data_top_item_view {
    padding-top: 190rpx;

    display: flex;
    align-items: center;
    justify-content: center;

    image {
      padding: 0 5rpx;
      width: 13.36rpx;
      height: 24.81rpx;
    }
  }

  // 时间选择
  .data_select_view {
    width: 424rpx;
    height: 40rpx;

    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 30rpx;

    text {
      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: 31rpx;
      color: #4e5969;
      font-style: normal;
      text-transform: none;
    }
  }
}

// 时间选择
.time_view {
  width: 100%;

  position: fixed;
  // bottom: -772px;
  z-index: 100;

  background: #f3f3f3;
  border-radius: 57rpx 57rpx 0rpx 0rpx;

  .top_tiem_icon {
    display: flex;
    align-items: center;
    justify-content: center;

    image {
      width: 61.07rpx;
      height: 13.36rpx;
      margin-top: 23rpx;
    }
  }

  .title_time_view {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 31rpx;

    text {
      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: 38rpx;
      color: #1d2129;
      line-height: 45rpx;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }

    image {
      width: 40.08rpx;
      height: 40.08rpx;

      margin-left: 435rpx;
    }
  }

  .week_day_view {
    margin-top: 30rpx;
    margin-bottom: 23rpx;

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

      margin: 0 38rpx;
    }
  }

  .time_context_view {
    width: 100%;
    height: auto;

    background-color: #fafafa;
  }

  .data_list_view {
    width: 100%;

    .moon_title_view {
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 38rpx 0;
    }
  }
}

// 日历宫格
.day_grid_view {
  margin-left: 42rpx;
  margin-right: 42rpx;
  width: 666rpx;

  .grid-item-box {
    flex: 1;
    display: flex;
    flex-direction: column; // 布局方向
    align-items: center;
    justify-content: center;

    .text_not {
      margin: 20rpx;

      width: 130rpx;
      height: 130rpx;

      border-radius: 50%;

      display: flex;
      flex-direction: column; // 布局方向
      align-items: center;
      justify-content: center;

      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: 26rpx;
      color: #1d2129;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }

    .text_not_selected {
      margin: 20rpx;

      width: 130rpx;
      height: 130rpx;

      border-radius: 50%;

      display: flex;
      flex-direction: column; // 布局方向
      align-items: center;
      justify-content: center;

      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: 26rpx;
      color: #1d2129;
      text-align: center;
      font-style: normal;
      text-transform: none;

      border: 3rpx solid #002bff;
    }

    .text_not_today {
      margin: 20rpx;

      width: 130rpx;
      height: 130rpx;

      border-radius: 50%;

      display: flex;
      flex-direction: column; // 布局方向
      align-items: center;
      justify-content: center;

      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: 26rpx;
      color: #002bff;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }

    .text_not_today_selected {
      margin: 20rpx;

      width: 130rpx;
      height: 130rpx;

      border-radius: 50%;

      display: flex;
      flex-direction: column; // 布局方向
      align-items: center;
      justify-content: center;

      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: 26rpx;
      color: #002bff;
      text-align: center;
      font-style: normal;
      text-transform: none;

      border: 3rpx solid #002bff;
    }

    .text_data {
      margin: 20rpx;

      width: 130rpx;
      height: 130rpx;

      background: #a7c1fa;
      border-radius: 50%;

      display: flex;
      flex-direction: column; // 布局方向
      align-items: center;
      justify-content: center;

      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: 26rpx;
      color: #ffffff;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }

    .text_data_selected {
      margin: 20rpx;

      width: 130rpx;
      height: 130rpx;

      background: #a7c1fa;
      border-radius: 50%;

      display: flex;
      flex-direction: column; // 布局方向
      align-items: center;
      justify-content: center;

      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: 26rpx;
      color: #ffffff;
      text-align: center;
      font-style: normal;
      text-transform: none;

      border: 3rpx solid #002bff;
    }

    .text_data_today {
      margin: 20rpx;

      width: 130rpx;
      height: 130rpx;

      background: #a7c1fa;
      border-radius: 50%;

      display: flex;
      flex-direction: column; // 布局方向
      align-items: center;
      justify-content: center;

      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: 26rpx;
      color: #002bff;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }

    .text_data_today_selected {
      margin: 20rpx;

      width: 130rpx;
      height: 130rpx;

      background: #a7c1fa;
      border-radius: 50%;

      display: flex;
      flex-direction: column; // 布局方向
      align-items: center;
      justify-content: center;

      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: 26rpx;
      color: #002bff;
      text-align: center;
      font-style: normal;
      text-transform: none;

      border: 3rpx solid #002bff;
    }
  }
}

.test_view {
  width: 100%;
  height: 1200px;
}
</style>
