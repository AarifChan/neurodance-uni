<!-- HoST - 日 -->
<template>
  <view class="content_view">
    <!-- 时间切换 -->
    <view class="data_top_view" ref="topView">
      <view class="data_top_item_view">
        <image :src="leftImage"></image>
        <view class="data_select_view" @click="selectTime()">
          <text>{{ dataStr }}</text>
          <image
            src="/static/btn_ico_zhankai_nor.png"
            style="width: 20.99rpx; height: 11.45rpx; padding-left: 15rpx"
          ></image>
        </view>
        <image :src="rightImage" @click="nextPage()"></image>
      </view>
    </view>

    <!-- 内容区域 -->
    <view>
      <scroll-view :style="{ height: dynamicHeight }" scroll-y="true" show-scrollbar="false">
        <sleep-data />
        <clock />
        <sleep-rating />
        <sleep-study />
        <sleep-long />
        <suggestions-logs />
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
          <text>日</text>
          <text>一</text>
          <text>二</text>
          <text>三</text>
          <text>四</text>
          <text>五</text>
          <text>六</text>
        </view>
      </view>

      <view class="time_context_view">
        <scroll-view class="data_list_view" :style="{ height: timeHigh }" :scroll-y="true">
          <view v-for="(item, index) in listData" :key="index">
            <view class="moon_title_view">
              <text>{{ item.year + '年' + item.moon + '月' }}</text>
            </view>

            <uni-grid
              :column="7"
              :square="true"
              :show-border="false"
              @change="change($event, item.id)"
              class="day_grid_view"
            >
              <uni-grid-item
                v-for="(dayItem, i) in item.day"
                :index="i"
                :key="i"
                style="width: 95rpx"
              >
                <view class="grid-item-box">
                  <text
                    v-if="!dayItem.data"
                    :class="[
                      dayItem.today && dayItem.selected
                        ? 'text_not_today_selected'
                        : dayItem.today
                          ? 'text_not_today'
                          : dayItem.selected
                            ? 'text_not_selected'
                            : 'text_not',
                    ]"
                  >
                    {{ dayItem.day }}
                  </text>
                  <text
                    v-if="dayItem.data"
                    :class="[
                      dayItem.today && dayItem.selected
                        ? 'text_data_today_selected'
                        : dayItem.today
                          ? 'text_data_today'
                          : dayItem.selected
                            ? 'text_data_selected'
                            : 'text_data',
                    ]"
                  >
                    {{ dayItem.day }}
                  </text>
                </view>
              </uni-grid-item>
            </uni-grid>
          </view>
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
      leftImage: '/static/btn_ico_zuojiantou_dis.png',
      rightImage: '/static/btn_ico_youjiantou_nor.png',
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
  width: 100%;
  height: auto;
  background-color: #f3f3f3;
}

// 顶部时间选择
.data_top_view {
  width: 100%;
  padding: 32rpx;
  box-sizing: border-box;
  height: 261rpx;
  background-color: #ffffff;

  .data_top_item_view {
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
