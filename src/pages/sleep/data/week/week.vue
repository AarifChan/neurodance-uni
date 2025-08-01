<!-- HoST - 周 -->
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
      dataStr: '02月02日-02月08日',
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
              year: '2024',
              moon: '12',
              week: '周日',
              day: '29',
              data: false,
              today: false,
              this: false,
            },
            {
              id: uuidv4(),
              year: '2024',
              moon: '12',
              week: '周一',
              day: '30',
              data: false,
              today: false,
              this: false,
            },
            {
              id: uuidv4(),
              year: '2024',
              moon: '12',
              week: '周二',
              day: '31',
              data: false,
              today: false,
              this: false,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '01',
              week: '周三',
              day: '01',
              data: true,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '01',
              week: '周四',
              day: '02',
              data: true,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '01',
              week: '周五',
              day: '03',
              data: true,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '01',
              week: '周六',
              day: '04',
              data: false,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '01',
              week: '周日',
              day: '05',
              data: true,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '01',
              week: '周一',
              day: '06',
              data: true,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '01',
              week: '周二',
              day: '07',
              data: false,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '01',
              week: '周三',
              day: '08',
              data: true,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '01',
              week: '周四',
              day: '09',
              data: false,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '01',
              week: '周五',
              day: '10',
              data: false,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '01',
              week: '周六',
              day: '11',
              data: true,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '01',
              week: '周日',
              day: '12',
              data: true,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '01',
              week: '周一',
              day: '13',
              data: true,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '01',
              week: '周二',
              day: '14',
              data: false,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '01',
              week: '周三',
              day: '15',
              data: true,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '01',
              week: '周四',
              day: '16',
              data: false,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '01',
              week: '周五',
              day: '17',
              data: false,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '01',
              week: '周六',
              day: '18',
              data: true,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '01',
              week: '周日',
              day: '19',
              data: true,
              today: false,
              this: true,
            },

            {
              id: uuidv4(),
              year: '2025',
              moon: '01',
              week: '周一',
              day: '20',
              data: true,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '01',
              week: '周二',
              day: '21',
              data: false,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '01',
              week: '周三',
              day: '22',
              data: true,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '01',
              week: '周四',
              day: '23',
              data: false,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '01',
              week: '周五',
              day: '24',
              data: false,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '01',
              week: '周六',
              day: '25',
              data: false,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '01',
              week: '周日',
              day: '26',
              data: true,
              today: false,
              this: true,
            },

            {
              id: uuidv4(),
              year: '2025',
              moon: '01',
              week: '周一',
              day: '27',
              data: true,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '01',
              week: '周二',
              day: '28',
              data: false,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '01',
              week: '周三',
              day: '29',
              data: true,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '01',
              week: '周四',
              day: '30',
              data: false,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '01',
              week: '周五',
              day: '31',
              data: false,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '02',
              week: '周六',
              day: '01',
              data: false,
              today: false,
              this: false,
            },
          ],
        },
        {
          id: uuidv4(),
          year: '2025',
          moon: '02',
          day: [
            {
              id: uuidv4(),
              year: '2025',
              moon: '02',
              week: '周日',
              day: '02',
              data: false,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '02',
              week: '周一',
              day: '03',
              data: false,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '02',
              week: '周二',
              day: '04',
              data: false,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '02',
              week: '周三',
              day: '05',
              data: true,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '02',
              week: '周四',
              day: '06',
              data: true,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '02',
              week: '周五',
              day: '07',
              data: true,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '02',
              week: '周六',
              day: '08',
              data: false,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '02',
              week: '周日',
              day: '09',
              data: true,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '02',
              week: '周一',
              day: '10',
              data: true,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '02',
              week: '周二',
              day: '11',
              data: false,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '02',
              week: '周三',
              day: '12',
              data: true,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '02',
              week: '周四',
              day: '13',
              data: false,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '02',
              week: '周五',
              day: '14',
              data: false,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '02',
              week: '周六',
              day: '15',
              data: true,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '02',
              week: '周日',
              day: '16',
              data: true,
              today: false,
              this: true,
            },

            {
              id: uuidv4(),
              year: '2025',
              moon: '02',
              week: '周一',
              day: '17',
              data: true,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '02',
              week: '周二',
              day: '18',
              data: false,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '02',
              week: '周三',
              day: '19',
              data: true,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '02',
              week: '周四',
              day: '20',
              data: false,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '02',
              week: '周五',
              day: '21',
              data: false,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '02',
              week: '周六',
              day: '22',
              data: true,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '02',
              week: '周日',
              day: '23',
              data: true,
              today: false,
              this: true,
            },

            {
              id: uuidv4(),
              year: '2025',
              moon: '02',
              week: '周一',
              day: '24',
              data: true,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '02',
              week: '周二',
              day: '25',
              data: false,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '02',
              week: '周三',
              day: '26',
              data: true,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '02',
              week: '周四',
              day: '27',
              data: false,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '02',
              week: '周五',
              day: '28',
              data: false,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '03',
              week: '周六',
              day: '01',
              data: false,
              today: false,
              this: false,
            },
          ],
        },
        {
          id: uuidv4(),
          year: '2025',
          moon: '03',
          day: [
            {
              id: uuidv4(),
              year: '2025',
              moon: '03',
              week: '周日',
              day: '02',
              data: false,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '03',
              week: '周一',
              day: '03',
              data: false,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '03',
              week: '周二',
              day: '04',
              data: false,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '03',
              week: '周三',
              day: '05',
              data: true,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '03',
              week: '周四',
              day: '06',
              data: true,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '03',
              week: '周五',
              day: '07',
              data: true,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '03',
              week: '周六',
              day: '08',
              data: false,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '03',
              week: '周日',
              day: '09',
              data: true,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '03',
              week: '周一',
              day: '10',
              data: true,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '03',
              week: '周二',
              day: '11',
              data: false,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '03',
              week: '周三',
              day: '12',
              data: true,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '03',
              week: '周四',
              day: '13',
              data: false,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '03',
              week: '周五',
              day: '14',
              data: false,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '03',
              week: '周六',
              day: '15',
              data: true,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '03',
              week: '周日',
              day: '16',
              data: true,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '03',
              week: '周一',
              day: '17',
              data: true,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '03',
              week: '周二',
              day: '18',
              data: false,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '03',
              week: '周三',
              day: '19',
              data: true,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '03',
              week: '周四',
              day: '20',
              data: false,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '03',
              week: '周五',
              day: '21',
              data: false,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '03',
              week: '周六',
              day: '22',
              data: true,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '03',
              week: '周日',
              day: '23',
              data: true,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '03',
              week: '周一',
              day: '24',
              data: true,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '03',
              week: '周二',
              day: '25',
              data: false,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '03',
              week: '周三',
              day: '26',
              data: true,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '03',
              week: '周四',
              day: '27',
              data: false,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '03',
              week: '周五',
              day: '28',
              data: false,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '03',
              week: '周六',
              day: '29',
              data: false,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '03',
              week: '周日',
              day: '30',
              data: true,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '03',
              week: '周一',
              day: '31',
              data: true,
              today: false,
              this: true,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '04',
              week: '周二',
              day: '01',
              data: false,
              today: false,
              this: false,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '04',
              week: '周三',
              day: '02',
              data: true,
              today: false,
              this: false,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '04',
              week: '周四',
              day: '03',
              data: false,
              today: false,
              this: false,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '04',
              week: '周五',
              day: '04',
              data: false,
              today: false,
              this: false,
            },
            {
              id: uuidv4(),
              year: '2025',
              moon: '04',
              week: '周六',
              day: '05',
              data: false,
              today: false,
              this: false,
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
        var item = this.listData[i].day
        for (var j = 0; j < item.length; j++) {
          item[j].selected = false
        }

        if (this.listData[i].id == id) {
          var item = this.listData[i].day

          let week = item[e.detail.index].week
          switch (week) {
            case '周日':
              item[e.detail.index].selected = true
              item[e.detail.index + 1].selected = true
              item[e.detail.index + 2].selected = true
              item[e.detail.index + 3].selected = true
              item[e.detail.index + 4].selected = true
              item[e.detail.index + 5].selected = true
              item[e.detail.index + 6].selected = true

              // var strData = item[e.detail.index].year + "-" + item[e.detail.index].moon + "-" + item[e.detail.index].day
              // var endData = item[e.detail.index + 6].year + "-" + item[e.detail.index + 6].moon + "-" + item[e.detail.index + 6].day
              var strData = item[e.detail.index].moon + '月' + item[e.detail.index].day + '日'
              var endData =
                item[e.detail.index + 6].moon + '月' + item[e.detail.index + 6].day + '日'
              this.dataStr = strData + '-' + endData
              break

            case '周一':
              item[e.detail.index - 1].selected = true
              item[e.detail.index].selected = true
              item[e.detail.index + 1].selected = true
              item[e.detail.index + 2].selected = true
              item[e.detail.index + 3].selected = true
              item[e.detail.index + 4].selected = true
              item[e.detail.index + 5].selected = true

              // var strData = item[e.detail.index - 1].year + "-" + item[e.detail.index - 1].moon + "-" + item[e.detail.index - 1].day
              // var endData = item[e.detail.index + 5].year + "-" + item[e.detail.index + 5].moon + "-" + item[e.detail.index + 5].day
              var strData =
                item[e.detail.index - 1].moon + '月' + item[e.detail.index - 1].day + '日'
              var endData =
                item[e.detail.index + 5].moon + '月' + item[e.detail.index + 5].day + '日'
              this.dataStr = strData + '-' + endData
              break

            case '周二':
              item[e.detail.index - 2].selected = true
              item[e.detail.index - 1].selected = true
              item[e.detail.index].selected = true
              item[e.detail.index + 1].selected = true
              item[e.detail.index + 2].selected = true
              item[e.detail.index + 3].selected = true
              item[e.detail.index + 4].selected = true

              // var strData = item[e.detail.index - 2].year + "-" + item[e.detail.index - 2].moon + "-" + item[e.detail.index - 2].day
              // var endData = item[e.detail.index + 4].year + "-" + item[e.detail.index + 4].moon + "-" + item[e.detail.index + 4].day
              var strData =
                item[e.detail.index - 2].moon + '月' + item[e.detail.index - 2].day + '日'
              var endData =
                item[e.detail.index + 4].moon + '月' + item[e.detail.index + 4].day + '日'
              this.dataStr = strData + '-' + endData
              break

            case '周三':
              item[e.detail.index - 3].selected = true
              item[e.detail.index - 2].selected = true
              item[e.detail.index - 1].selected = true
              item[e.detail.index].selected = true
              item[e.detail.index + 1].selected = true
              item[e.detail.index + 2].selected = true
              item[e.detail.index + 3].selected = true

              // var strData = item[e.detail.index - 3].year + "-" + item[e.detail.index - 3].moon + "-" + item[e.detail.index - 3].day
              // var endData = item[e.detail.index + 3].year + "-" + item[e.detail.index + 3].moon + "-" + item[e.detail.index + 3].day
              var strData =
                item[e.detail.index - 3].moon + '月' + item[e.detail.index - 3].day + '日'
              var endData =
                item[e.detail.index + 3].moon + '月' + item[e.detail.index + 3].day + '日'
              this.dataStr = strData + '-' + endData
              break

            case '周四':
              item[e.detail.index - 4].selected = true
              item[e.detail.index - 3].selected = true
              item[e.detail.index - 2].selected = true
              item[e.detail.index - 1].selected = true
              item[e.detail.index].selected = true
              item[e.detail.index + 1].selected = true
              item[e.detail.index + 2].selected = true

              // var strData = item[e.detail.index - 4].year + "-" + item[e.detail.index - 4].moon + "-" + item[e.detail.index - 4].day
              // var endData = item[e.detail.index + 2].year + "-" + item[e.detail.index + 2].moon + "-" + item[e.detail.index + 2].day
              var strData =
                item[e.detail.index - 4].moon + '月' + item[e.detail.index - 4].day + '日'
              var endData =
                item[e.detail.index + 2].moon + '月' + item[e.detail.index + 2].day + '日'
              this.dataStr = strData + '-' + endData
              break

            case '周五':
              item[e.detail.index - 5].selected = true
              item[e.detail.index - 4].selected = true
              item[e.detail.index - 3].selected = true
              item[e.detail.index - 2].selected = true
              item[e.detail.index - 1].selected = true
              item[e.detail.index].selected = true
              item[e.detail.index + 1].selected = true

              // var strData = item[e.detail.index - 5].year + "-" + item[e.detail.index - 5].moon + "-" + item[e.detail.index - 5].day
              // var endData = item[e.detail.index + 1].year + "-" + item[e.detail.index + 1].moon + "-" + item[e.detail.index + 1].day
              var strData =
                item[e.detail.index - 5].moon + '月' + item[e.detail.index - 5].day + '日'
              var endData =
                item[e.detail.index + 1].moon + '月' + item[e.detail.index + 1].day + '日'
              this.dataStr = strData + '-' + endData
              break

            case '周六':
              item[e.detail.index - 6].selected = true
              item[e.detail.index - 5].selected = true
              item[e.detail.index - 4].selected = true
              item[e.detail.index - 3].selected = true
              item[e.detail.index - 2].selected = true
              item[e.detail.index - 1].selected = true
              item[e.detail.index].selected = true

              // var strData = item[e.detail.index - 6].year + "-" + item[e.detail.index - 6].moon + "-" + item[e.detail.index - 6].day
              // var endData = item[e.detail.index].year + "-" + item[e.detail.index].moon + "-" + item[e.detail.index].day
              var strData =
                item[e.detail.index - 6].moon + '月' + item[e.detail.index - 6].day + '日'
              var endData = item[e.detail.index].moon + '月' + item[e.detail.index].day + '日'
              this.dataStr = strData + '-' + endData
              break
          }
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

    /**
			 * 周 - 不是当月显示
			 */
    .text_not_this {
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
      color: #86909c;
      line-height: 27rpx;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }

    .text_not_selected_this {
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
      color: #86909c;
      line-height: 27rpx;
      text-align: center;
      font-style: normal;
      text-transform: none;

      border: 3rpx solid #002bff;
    }

    .text_data_this {
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
      color: #86909c;
      line-height: 27rpx;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }

    .text_data_selected_this {
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
      color: #86909c;
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
