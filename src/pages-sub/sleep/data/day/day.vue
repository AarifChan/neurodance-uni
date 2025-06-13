<!-- HoST - 日 -->
<template>
  <view class="content_view">
    <sleep-data />
    <clock />
    <sleep-rating />
    <sleep-study />
    <sleep-long />
    <suggestions-logs />
  </view>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'

import uniGrid from '@dcloudio/uni-ui/lib/uni-grid/uni-grid.vue'
import uniGridItem from '@dcloudio/uni-ui/lib/uni-grid-item/uni-grid-item.vue'

import sleepData from './component/sleepData.vue'
import clock from './component/clock.vue'
import sleepRating from './component/sleepRating.vue'
import sleepStudy from './component/sleepStudy.vue'
import sleepLong from './component/sleepLong.vue'
import suggestionsLogs from './component/suggestionsLogs.vue'

export default {
  props: {
    selected: undefined,
  },
  components: {
    uniGrid,
    uniGridItem,
    sleepData,
    clock,
    sleepRating,
    sleepStudy,
    sleepLong,
    suggestionsLogs,
  },
  data() {
    return {
      page: 0, // 当前显示的页面
      osName: '',

      dataStr: '2025-02-07 周五',
      show: false,
      animationData: {},
      dynamicHeight: '772px', // 内容高
      timeHigh: '660px', // 日历高度
      hwHeight: 0, // 内容窗口高度
      listData: [
        {
          id: uuidv4(),
          year: '2025',
          moon: '01',
          day: [
            {
              id: uuidv4(),
              week: '周日',
              day: '',
              data: false,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周一',
              day: '',
              data: false,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周二',
              day: '',
              data: false,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周三',
              day: '01',
              data: true,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周四',
              day: '02',
              data: true,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周五',
              day: '03',
              data: true,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周六',
              day: '04',
              data: false,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周日',
              day: '05',
              data: true,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周一',
              day: '06',
              data: true,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周二',
              day: '07',
              data: false,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周三',
              day: '08',
              data: true,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周四',
              day: '09',
              data: false,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周五',
              day: '10',
              data: false,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周六',
              day: '11',
              data: true,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周日',
              day: '12',
              data: true,
              today: false,
            },

            {
              id: uuidv4(),
              week: '周一',
              day: '13',
              data: true,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周二',
              day: '14',
              data: false,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周三',
              day: '15',
              data: true,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周四',
              day: '16',
              data: false,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周五',
              day: '17',
              data: false,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周六',
              day: '18',
              data: true,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周日',
              day: '19',
              data: true,
              today: false,
            },

            {
              id: uuidv4(),
              week: '周一',
              day: '20',
              data: true,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周二',
              day: '21',
              data: false,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周三',
              day: '22',
              data: true,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周四',
              day: '23',
              data: false,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周五',
              day: '24',
              data: false,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周六',
              day: '25',
              data: false,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周日',
              day: '26',
              data: true,
              today: false,
            },

            {
              id: uuidv4(),
              week: '周一',
              day: '27',
              data: true,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周二',
              day: '28',
              data: false,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周三',
              day: '29',
              data: true,
              today: false,
              selected: false,
            },
            {
              id: uuidv4(),
              week: '周四',
              day: '30',
              data: false,
              today: false,
              selected: false,
            },
            {
              id: uuidv4(),
              week: '周五',
              day: '31',
              data: false,
              today: true,
            },
          ],
        },
        {
          id: uuidv4(),
          year: '2024',
          moon: '12',
          day: [
            {
              id: uuidv4(),
              week: '周日',
              day: '',
              data: false,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周一',
              day: '',
              data: false,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周二',
              day: '',
              data: false,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周三',
              day: '01',
              data: true,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周四',
              day: '02',
              data: true,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周五',
              day: '03',
              data: true,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周六',
              day: '04',
              data: false,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周日',
              day: '05',
              data: true,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周一',
              day: '06',
              data: true,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周二',
              day: '07',
              data: false,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周三',
              day: '08',
              data: true,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周四',
              day: '09',
              data: false,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周五',
              day: '10',
              data: false,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周六',
              day: '11',
              data: true,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周日',
              day: '12',
              data: true,
              today: false,
            },

            {
              id: uuidv4(),
              week: '周一',
              day: '13',
              data: true,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周二',
              day: '14',
              data: false,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周三',
              day: '15',
              data: true,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周四',
              day: '16',
              data: false,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周五',
              day: '17',
              data: false,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周六',
              day: '18',
              data: true,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周日',
              day: '19',
              data: true,
              today: false,
            },

            {
              id: uuidv4(),
              week: '周一',
              day: '20',
              data: true,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周二',
              day: '21',
              data: false,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周三',
              day: '22',
              data: true,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周四',
              day: '23',
              data: false,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周五',
              day: '24',
              data: false,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周六',
              day: '25',
              data: false,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周日',
              day: '26',
              data: true,
              today: false,
            },

            {
              id: uuidv4(),
              week: '周一',
              day: '27',
              data: true,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周二',
              day: '28',
              data: false,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周三',
              day: '29',
              data: true,
              today: false,
              selected: false,
            },
            {
              id: uuidv4(),
              week: '周四',
              day: '30',
              data: false,
              today: false,
              selected: false,
            },
            {
              id: uuidv4(),
              week: '周五',
              day: '31',
              data: false,
              today: true,
            },
          ],
        },
        {
          id: uuidv4(),
          year: '2024',
          moon: '11',
          day: [
            {
              id: uuidv4(),
              week: '周日',
              day: '',
              data: false,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周一',
              day: '',
              data: false,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周二',
              day: '',
              data: false,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周三',
              day: '01',
              data: true,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周四',
              day: '02',
              data: true,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周五',
              day: '03',
              data: true,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周六',
              day: '04',
              data: false,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周日',
              day: '05',
              data: true,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周一',
              day: '06',
              data: true,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周二',
              day: '07',
              data: false,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周三',
              day: '08',
              data: true,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周四',
              day: '09',
              data: false,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周五',
              day: '10',
              data: false,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周六',
              day: '11',
              data: true,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周日',
              day: '12',
              data: true,
              today: false,
            },

            {
              id: uuidv4(),
              week: '周一',
              day: '13',
              data: true,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周二',
              day: '14',
              data: false,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周三',
              day: '15',
              data: true,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周四',
              day: '16',
              data: false,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周五',
              day: '17',
              data: false,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周六',
              day: '18',
              data: true,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周日',
              day: '19',
              data: true,
              today: false,
            },

            {
              id: uuidv4(),
              week: '周一',
              day: '20',
              data: true,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周二',
              day: '21',
              data: false,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周三',
              day: '22',
              data: true,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周四',
              day: '23',
              data: false,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周五',
              day: '24',
              data: false,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周六',
              day: '25',
              data: false,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周日',
              day: '26',
              data: true,
              today: false,
            },

            {
              id: uuidv4(),
              week: '周一',
              day: '27',
              data: true,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周二',
              day: '28',
              data: false,
              today: false,
            },
            {
              id: uuidv4(),
              week: '周三',
              day: '29',
              data: true,
              today: false,
              selected: false,
            },
            {
              id: uuidv4(),
              week: '周四',
              day: '30',
              data: false,
              today: false,
              selected: false,
            },
            {
              id: uuidv4(),
              week: '周五',
              day: '31',
              data: false,
              today: true,
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
      //   uni
      //     .createSelectorQuery()
      //     .select('.data_top_view')
      //     .boundingClientRect((data) => {
      //       height = data.height
      //     })
      //     .exec()

      const res = uni.getSystemInfoSync()
      this.hwHeight = res.windowHeight - height // 内容窗口高度
      this.dynamicHeight = `${this.hwHeight}px`
      // console.log('dynamicHeight：', this.hwHeight);

      var tHeight = 0
      //   uni
      //     .createSelectorQuery()
      //     .select('.data_top_view')
      //     .boundingClientRect((data) => {
      //       tHeight = data.height
      //     })
      //     .exec()
      this.timeHigh = this.hwHeight - tHeight
    },
    // 切换下一页
    nextPage() {
      this.page = 1
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
        var item = this.listData[i].day
        for (var j = 0; j < item.length; j++) {
          item[j].selected = false
        }

        if (this.listData[i].id == id) {
          var item = this.listData[i].day
          item[e.detail.index].selected = true
          var strData =
            this.listData[i].year + '-' + this.listData[i].moon + '-' + item[e.detail.index].day
          this.dataStr = strData + ' ' + item[e.detail.index].week
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.content_view {
  position: relative;
  width: 100%;

  background-color: #f3f3f3;
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
