<!-- HoST - 月 -->
<template>
  <view class="content_view">
    <!-- 内容区域 -->
    <view>
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
    </view>

    <!-- 时间选择 -->
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
      leftImage: '/static/images/sleep/btn_ico_zuojiantou_nor.png',
      rightImage: '/static/images/sleep/btn_ico_youjiantou_nor.png',
      dataStr: '02月',
      show: false,
      animationData: {},
      dynamicHeight: '772px', // 内容高
      timeHigh: '660px', // 日历高度
      hwHeight: 0, // 内容窗口高度
      listData: [
        {
          id: uuidv4(),
          year: '2025',
          moon: [
            {
              id: uuidv4(),
              moon: '01',
              statData: '2025-01-01',
              endData: '2025-01-31',
              data: true,
              today: false,
            },
            {
              id: uuidv4(),
              moon: '02',
              statData: '2025-02-01',
              endData: '2025-02-28',
              data: false,
              today: true,
            },
            {
              id: uuidv4(),
              moon: '03',
              statData: '2025-03-01',
              endData: '2025-03-31',
              data: false,
            },
            {
              id: uuidv4(),
              moon: '04',
              statData: '2025-04-01',
              endData: '2025-04-30',
              data: true,
            },
            {
              id: uuidv4(),
              moon: '05',
              statData: '2025-05-01',
              endData: '2025-05-31',
              data: true,
            },
            {
              id: uuidv4(),
              moon: '06',
              statData: '2025-06-01',
              endData: '2025-6-30',
              data: false,
            },
            {
              id: uuidv4(),
              moon: '07',
              statData: '2025-07-01',
              endData: '2025-07-31',
              data: false,
            },
            {
              id: uuidv4(),
              moon: '08',
              statData: '2025-08-01',
              endData: '2025-08-31',
              data: false,
            },
            {
              id: uuidv4(),
              moon: '09',
              statData: '2025-09-01',
              endData: '2025-09-30',
              data: true,
            },
            {
              id: uuidv4(),
              moon: '10',
              statData: '2025-10-01',
              endData: '2025-10-31',
              data: true,
            },
            {
              id: uuidv4(),
              moon: '11',
              statData: '2025-11-01',
              endData: '2025-11-30',
              data: true,
            },
            {
              id: uuidv4(),
              moon: '12',
              statData: '2025-12-01',
              endData: '2025-12-31',
              data: true,
            },
          ],
        },
        {
          id: uuidv4(),
          year: '2024',
          moon: [
            {
              id: uuidv4(),
              moon: '01',
              statData: '2025-01-01',
              endData: '2025-01-31',
              data: true,
            },
            {
              id: uuidv4(),
              moon: '02',
              statData: '2025-02-01',
              endData: '2025-02-28',
              data: false,
            },
            {
              id: uuidv4(),
              moon: '03',
              statData: '2025-03-01',
              endData: '2025-03-31',
              data: false,
            },
            {
              id: uuidv4(),
              moon: '04',
              statData: '2025-04-01',
              endData: '2025-04-30',
              data: true,
            },
            {
              id: uuidv4(),
              moon: '05',
              statData: '2025-05-01',
              endData: '2025-05-31',
              data: true,
            },
            {
              id: uuidv4(),
              moon: '06',
              statData: '2025-06-01',
              endData: '2025-6-30',
              data: false,
            },
            {
              id: uuidv4(),
              moon: '07',
              statData: '2025-07-01',
              endData: '2025-07-31',
              data: false,
            },
            {
              id: uuidv4(),
              moon: '08',
              statData: '2025-08-01',
              endData: '2025-08-31',
              data: false,
            },
            {
              id: uuidv4(),
              moon: '09',
              statData: '2025-09-01',
              endData: '2025-09-30',
              data: true,
            },
            {
              id: uuidv4(),
              moon: '10',
              statData: '2025-10-01',
              endData: '2025-10-31',
              data: true,
            },
            {
              id: uuidv4(),
              moon: '11',
              statData: '2025-11-01',
              endData: '2025-11-30',
              data: true,
            },
            {
              id: uuidv4(),
              moon: '12',
              statData: '2025-12-01',
              endData: '2025-12-31',
              data: true,
            },
          ],
        },
        {
          id: uuidv4(),
          year: '2023',
          moon: [
            {
              id: uuidv4(),
              moon: '01',
              statData: '2025-01-01',
              endData: '2025-01-31',
              data: true,
            },
            {
              id: uuidv4(),
              moon: '02',
              statData: '2025-02-01',
              endData: '2025-02-28',
              data: false,
            },
            {
              id: uuidv4(),
              moon: '03',
              statData: '2025-03-01',
              endData: '2025-03-31',
              data: false,
            },
            {
              id: uuidv4(),
              moon: '04',
              statData: '2025-04-01',
              endData: '2025-04-30',
              data: true,
            },
            {
              id: uuidv4(),
              moon: '05',
              statData: '2025-05-01',
              endData: '2025-05-31',
              data: true,
            },
            {
              id: uuidv4(),
              moon: '06',
              statData: '2025-06-01',
              endData: '2025-6-30',
              data: false,
            },
            {
              id: uuidv4(),
              moon: '07',
              statData: '2025-07-01',
              endData: '2025-07-31',
              data: false,
            },
            {
              id: uuidv4(),
              moon: '08',
              statData: '2025-08-01',
              endData: '2025-08-31',
              data: false,
            },
            {
              id: uuidv4(),
              moon: '09',
              statData: '2025-09-01',
              endData: '2025-09-30',
              data: true,
            },
            {
              id: uuidv4(),
              moon: '10',
              statData: '2025-10-01',
              endData: '2025-10-31',
              data: true,
            },
            {
              id: uuidv4(),
              moon: '11',
              statData: '2025-11-01',
              endData: '2025-11-30',
              data: true,
            },
            {
              id: uuidv4(),
              moon: '12',
              statData: '2025-12-01',
              endData: '2025-12-31',
              data: true,
            },
          ],
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
    nextPage(val) {
      this.page = this.$props.selected + val
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
    change(e, id) {
      this.running()
      for (var i = 0; i < this.listData.length; i++) {
        var item = this.listData[i].moon
        for (var j = 0; j < item.length; j++) {
          item[j].selected = false
        }

        if (this.listData[i].id == id) {
          var item = this.listData[i].moon
          item[e.detail.index].selected = true
          // var strData = this.listData[i].year + "年" + item[e.detail.index].moon + "月"
          var strData = item[e.detail.index].moon + '月'
          this.dataStr = strData
        }
      }
      // console.log(JSON.stringify(e.detail.index))
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
      width: 61rpx;
      height: 61rpx;

      border-radius: 31rpx 31rpx 31rpx 31rpx;

      display: flex;
      flex-direction: column; // 布局方向
      align-items: center;
      justify-content: center;

      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: 23rpx;
      color: #1d2129;
      line-height: 27rpx;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }

    .text_not_selected {
      width: 61rpx;
      height: 61rpx;

      border-radius: 31rpx 31rpx 31rpx 31rpx;

      display: flex;
      flex-direction: column; // 布局方向
      align-items: center;
      justify-content: center;

      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: 23rpx;
      color: #1d2129;
      line-height: 27rpx;
      text-align: center;
      font-style: normal;
      text-transform: none;

      border: 3rpx solid #002bff;
    }

    .text_not_today {
      width: 61rpx;
      height: 61rpx;

      border-radius: 31rpx 31rpx 31rpx 31rpx;

      display: flex;
      flex-direction: column; // 布局方向
      align-items: center;
      justify-content: center;

      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: 23rpx;
      color: #002bff;
      line-height: 27rpx;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }

    .text_not_today_selected {
      width: 61rpx;
      height: 61rpx;

      border-radius: 31rpx 31rpx 31rpx 31rpx;

      display: flex;
      flex-direction: column; // 布局方向
      align-items: center;
      justify-content: center;

      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: 23rpx;
      color: #002bff;
      line-height: 27rpx;
      text-align: center;
      font-style: normal;
      text-transform: none;

      border: 3rpx solid #002bff;
    }

    .text_data {
      width: 61rpx;
      height: 61rpx;

      background: #a7c1fa;
      border-radius: 31rpx 31rpx 31rpx 31rpx;

      display: flex;
      flex-direction: column; // 布局方向
      align-items: center;
      justify-content: center;

      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: 23rpx;
      color: #ffffff;
      line-height: 27rpx;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }

    .text_data_selected {
      width: 61rpx;
      height: 61rpx;

      background: #a7c1fa;
      border-radius: 31rpx 31rpx 31rpx 31rpx;

      display: flex;
      flex-direction: column; // 布局方向
      align-items: center;
      justify-content: center;

      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: 23rpx;
      color: #ffffff;
      line-height: 27rpx;
      text-align: center;
      font-style: normal;
      text-transform: none;

      border: 3rpx solid #002bff;
    }

    .text_data_today {
      width: 61rpx;
      height: 61rpx;

      background: #a7c1fa;
      border-radius: 31rpx 31rpx 31rpx 31rpx;

      display: flex;
      flex-direction: column; // 布局方向
      align-items: center;
      justify-content: center;

      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: 23rpx;
      color: #002bff;
      line-height: 27rpx;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }

    .text_data_today_selected {
      width: 61rpx;
      height: 61rpx;

      background: #a7c1fa;
      border-radius: 31rpx 31rpx 31rpx 31rpx;

      display: flex;
      flex-direction: column; // 布局方向
      align-items: center;
      justify-content: center;

      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: 23rpx;
      color: #002bff;
      line-height: 27rpx;
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
