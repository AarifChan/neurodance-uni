<!-- 横屏专业版 -->
<template>
  <view class="content_view">
    <!-- 顶部操作栏 -->
    <view class="top_view">
      <image src="/static/btn_ico_zuojiantou_nor.png" @click="yesterday"></image>
      <view class="date_text_view" @click="selectTime()">
        <text>{{ dataStr }}</text>
        <image class="select_date_view" src="/static/btn_ico_zhankai_nor.png"></image>
      </view>
      <image src="/static/btn_ico_youjiantou_nor.png" @click="tomorrow"></image>
    </view>

    <!-- 内容区域 -->
    <view>
      <scroll-view :style="{ height: dynamicHeight }" scroll-y="true" show-scrollbar="false">
        <eeg-screen-vue :time="dataStr" :dynamicHeight="dynamicHeight"></eeg-screen-vue>
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
                class="uni_grid_item_view"
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

import eegScreenVue from './component/eegScreen.vue'

export default {
  props: {},
  components: {
    uniGrid,
    uniGridItem,
    eegScreenVue,
  },
  data() {
    return {
      dataStr: '2025-2-7 周五',
      currentTimestamp: 1738857600000, // 当前时间戳
      show: false,
      animationData: {},
      dynamicHeight: '369px', // 内容高
      timeHigh: '300px', // 日历高度
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
  onLoad(option) {},
  mounted() {
    this.animation = uni.createAnimation()
    this.getClineHeight()
  },
  methods: {
    getClineHeight() {
      var height = 0
      uni
        .createSelectorQuery()
        .select('.top_view')
        .boundingClientRect((data) => {
          height = data.height
        })
        .exec()

      const res = uni.getSystemInfoSync()
      this.hwHeight = res.windowHeight - height // 内容窗口高度
      this.dynamicHeight = `${this.hwHeight}px`
      // console.log('dynamicHeight：', this.dynamicHeight);

      var tHeight = 0
      uni
        .createSelectorQuery()
        .select('.top_view')
        .boundingClientRect((data) => {
          tHeight = data.height
        })
        .exec()
      this.timeHigh = this.hwHeight - tHeight
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
        // console.log('hwHeight：', this.hwHeight);
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
    // 切换到昨天
    yesterday() {
      let tfh = 24 * 60 * 60 * 1000
      this.currentTimestamp = this.currentTimestamp - tfh
      this.dataStr = this.$public.currentDateWeek(this.currentTimestamp)
    },
    // 切换到明天
    tomorrow() {
      let tfh = 24 * 60 * 60 * 1000
      this.currentTimestamp = this.currentTimestamp + tfh
      this.dataStr = this.$public.currentDateWeek(this.currentTimestamp)
    },
  },
}
</script>

<style lang="scss" scoped>
@function tovmin($rpx) {
  /* $rpx为需要转换的字号 */
  @return calc(#{$rpx * 100} / 750) vmin;
}

.content_view {
  width: 100%;
  height: auto;

  // display: flex;
  // align-items: start;
  // justify-content: center;
}

.top_view {
  width: 100%;
  height: 36rpx;

  display: flex;
  align-items: center;
  justify-content: center;

  image {
    padding-left: 10rpx;
    padding-right: 10rpx;
    width: 5rpx;
    height: 9rpx;
  }

  text {
    font-family: MiSans, MiSans;
    font-weight: 500;
    font-size: 12rpx;
    color: #4e5969;
    line-height: 12rpx;
    text-align: left;
    font-style: normal;
    text-transform: none;
  }

  .select_date_view {
    width: 10rpx;
    height: 5rpx;

    margin-left: 7rpx;
  }

  .date_text_view {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: 57rpx;
    margin-right: 57rpx;
  }
}

// 时间选择
.time_view {
  width: tovmin(750);

  position: fixed;
  // bottom: -772px;
  z-index: 100;

  background: #f3f3f3;
  border-radius: tovmin(57) tovmin(57) 0rpx 0rpx;

  .top_tiem_icon {
    display: flex;
    align-items: center;
    justify-content: center;

    image {
      width: tovmin(61.07);
      height: tovmin(13.36);
      margin-top: tovmin(23);
    }
  }

  .title_time_view {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: tovmin(31);

    text {
      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: tovmin(38);
      color: #1d2129;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }

    image {
      width: tovmin(40.08);
      height: tovmin(40.08);

      margin-left: tovmin(435);
    }
  }

  .week_day_view {
    margin-top: tovmin(30);
    margin-bottom: tovmin(23);

    display: flex;
    align-items: center;
    justify-content: center;

    text {
      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: tovmin(23);
      color: #4e5969;
      text-align: left;
      font-style: normal;
      text-transform: none;

      margin: 0 tovmin(38);
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

      padding: tovmin(38) 0;

      text {
        font-family: MiSans, MiSans;
        font-weight: 500;
        font-size: tovmin(31);
        color: #4e5969;
        text-align: center;
        font-style: normal;
        text-transform: none;
      }
    }
  }
}

// 日历宫格
.day_grid_view {
  margin-left: tovmin(42);
  margin-right: tovmin(42);
  width: tovmin(666);

  .grid-item-box {
    flex: 1;
    display: flex;
    flex-direction: column; // 布局方向
    align-items: center;
    justify-content: center;

    .uni_grid_item_view {
      width: tovmin(95);
    }

    .text_not {
      width: tovmin(61);
      height: tovmin(61);

      border-radius: tovmin(31) tovmin(31) tovmin(31) tovmin(31);

      display: flex;
      flex-direction: column; // 布局方向
      align-items: center;
      justify-content: center;

      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: tovmin(23);
      color: #1d2129;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }

    .text_not_selected {
      width: tovmin(61);
      height: tovmin(61);

      border-radius: tovmin(31) tovmin(31) tovmin(31) tovmin(31);

      display: flex;
      flex-direction: column; // 布局方向
      align-items: center;
      justify-content: center;

      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: tovmin(23);
      color: #1d2129;
      text-align: center;
      font-style: normal;
      text-transform: none;

      border: tovmin(3) solid #002bff;
    }

    .text_not_today {
      width: tovmin(61);
      height: tovmin(61);

      border-radius: tovmin(31) tovmin(31) tovmin(31) tovmin(31);

      display: flex;
      flex-direction: column; // 布局方向
      align-items: center;
      justify-content: center;

      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: tovmin(23);
      color: #002bff;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }

    .text_not_today_selected {
      width: tovmin(61);
      height: tovmin(61);

      border-radius: tovmin(31) tovmin(31) tovmin(31) tovmin(31);

      display: flex;
      flex-direction: column; // 布局方向
      align-items: center;
      justify-content: center;

      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: tovmin(23);
      color: #002bff;
      text-align: center;
      font-style: normal;
      text-transform: none;

      border: tovmin(3) solid #002bff;
    }

    .text_data {
      width: tovmin(61);
      height: tovmin(61);

      background: #a7c1fa;
      border-radius: tovmin(31) tovmin(31) tovmin(31) tovmin(31);

      display: flex;
      flex-direction: column; // 布局方向
      align-items: center;
      justify-content: center;

      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: tovmin(23);
      color: #ffffff;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }

    .text_data_selected {
      width: tovmin(61);
      height: tovmin(61);

      background: #a7c1fa;
      border-radius: tovmin(31) tovmin(31) tovmin(31) tovmin(31);

      display: flex;
      flex-direction: column; // 布局方向
      align-items: center;
      justify-content: center;

      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: tovmin(23);
      color: #ffffff;
      text-align: center;
      font-style: normal;
      text-transform: none;

      border: tovmin(3) solid #002bff;
    }

    .text_data_today {
      width: tovmin(61);
      height: tovmin(61);

      background: #a7c1fa;
      border-radius: tovmin(31) tovmin(31) tovmin(31) tovmin(31);

      display: flex;
      flex-direction: column; // 布局方向
      align-items: center;
      justify-content: center;

      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: tovmin(23);
      color: #002bff;
      text-align: center;
      font-style: normal;
      text-transform: none;
    }

    .text_data_today_selected {
      width: tovmin(61);
      height: tovmin(61);

      background: #a7c1fa;
      border-radius: tovmin(31) tovmin(31) tovmin(31) tovmin(31);

      display: flex;
      flex-direction: column; // 布局方向
      align-items: center;
      justify-content: center;

      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: tovmin(23);
      color: #002bff;
      text-align: center;
      font-style: normal;
      text-transform: none;

      border: tovmin(3) solid #002bff;
    }
  }
}
</style>
