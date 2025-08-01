<!-- 睡眠研究 -->
<template>
  <view class="content_view">
    <!-- 研究 - 左 -->
    <view class="study_left_view">
      <!-- 呼吸研究 -->
      <view class="breathe_study_view" @click="breatheStudy">
        <view class="breathe_study_bg_view">
          <view class="breathe_study_top_view">
            <text>睡眠呼吸研究</text>
            <image src="/static/images/sleep/btn_ico_shuimianhuxi_youjiantou_nor.png"></image>
          </view>
          <view class="breathe_study_bottom_view">
            <view class="snore_left_item_view">
              <text>{{ symptom }}</text>
              <text class="range_item_view">参考区间：{{ range }}</text>
            </view>
            <view class="snore_right_item_view">
              <text>{{ number }}次</text>
            </view>
          </view>
        </view>
      </view>
      <!-- 睡眠潜伏期 -->
      <view class="sleep_latency_view">
        <view class="sleep_latency_bg_view"></view>
        <view class="latency_left_view">
          <text>睡眠潜伏期</text>
          <text class="long_time_view">进入睡眠时长</text>
        </view>
        <view class="latency_right_view">
          <text class="long_time_view">{{ longTime }}</text>
          <text>分钟</text>
        </view>
      </view>
      <!-- 觉醒次数 -->
      <view class="wake_up_view">
        <view class="sleep_latency_bg_view"></view>
        <view class="latency_left_view">
          <text>觉醒次数</text>
          <text class="long_time_view">睡眠中途清醒次数</text>
        </view>
        <view class="latency_right_view">
          <text class="long_time_view">{{ upTime }}</text>
          <text>次</text>
        </view>
      </view>
    </view>
    <!-- 研究 - 右 -->
    <view class="study_right_view">
      <view class="sleeping_position_view" @click="sleepPosition">
        <view class="breathe_study_top_view">
          <text>睡眠姿势研究</text>
          <image src="/static/images/sleep/btn_ico_shuimianhuxi_youjiantou_nor.png"></image>
        </view>
        <view class="number_flips_view">
          <view class="flips_tip_bg_view">
            <view class="flips_tip_view"></view>
            <text>翻身次数</text>
          </view>
          <text class="flips_time_view">{{ flips }}次</text>
        </view>
        <view class="flips_list_view">
          <view v-for="(item, index) in flipsList" :key="index">
            <view :class="item.long ? 'flips_list_item_2_view' : 'flips_list_item_view'">
              <image
                :class="item.type == 4 ? 'image2' : 'image1'"
                :src="getSleepImage(item.type, item.long)"
              ></image>
              <view class="list_text_viwe">
                <text>{{ item.timeStr }}</text>
                <text class="scale_view">{{ item.scale }}%</text>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SleepData } from '@/api/sleep/index'
import { PropType } from 'vue'
import { formatTimestamp } from '@/utils/date'
const props = defineProps({
  report: {
    default: null,
    type: Object as PropType<SleepData | null>,
  },
})
const formatAnalysisPositionData = (percentage: number, min: number) => {
  return {
    scale: percentage,
    timeStr: `${Math.floor(min / 60)}小时${min % 60}分钟`,
  }
}
watch(
  () => props.report,
  (newVal) => {
    if (newVal) {
      number.value = newVal.breathingAnalyze?.snoreCount || 0
      flips.value = newVal.positionAnalyze.sleepTurns
      upTime.value = newVal.stagingAnalyze?.wakeCount || 0
      flipsList.value = [
        {
          ...formatAnalysisPositionData(
            newVal.positionAnalyze?.pronePercentage || 0,
            newVal.positionAnalyze?.proneMin || 0,
          ),
          type: 0,
          long: true,
          url: '/static/images/sleep/icon_yangwo_highlight_long.png',
        },
        {
          ...formatAnalysisPositionData(
            newVal.positionAnalyze?.rightPercentage || 0,
            newVal.positionAnalyze?.rightMin || 0,
          ),
          type: 1,
          long: false,
          url: '/static/images/sleep/ico_fuwo_nor.png',
        },
        {
          ...formatAnalysisPositionData(
            newVal.positionAnalyze?.leftPercentage || 0,
            newVal.positionAnalyze?.leftMin || 0,
          ),
          type: 2,
          long: false,
          url: '/static/images/sleep/ico_youcewo_nor.png',
        },
        {
          ...formatAnalysisPositionData(
            newVal.positionAnalyze?.uprightPercentage || 0,
            newVal.positionAnalyze?.uprightMin || 0,
          ),
          type: 3,
          long: false,
          url: '/static/images/sleep/ico_zuocewo_nor.png',
        },
        {
          ...formatAnalysisPositionData(
            newVal.positionAnalyze?.supinePercentage || 0,
            newVal.positionAnalyze?.supineMin || 0,
          ),
          type: 4,
          long: false,
          url: '/static/images/sleep/ico_zhan_zuozi_nor.png',
        },
      ]
    } else {
      symptom.value = '轻微打鼾'
      range.value = '<60次'
      number.value = 0
      longTime.value = 0
      upTime.value = 0
    }
  },
)
const symptom = ref('轻微打鼾')
const range = ref('<60次')
const number = ref(0)
const longTime = ref(0)
const upTime = ref(0)
const flips = ref(0)

const flipsList = ref([
  {
    timeStr: '1小时50分钟',
    scale: 35,
    type: 0,
    long: true,
    url: '/static/images/sleep/icon_yangwo_highlight_long.png',
  },
  {
    timeStr: '1小时20分钟',
    scale: 25,
    type: 1,
    long: false,
    url: '/static/images/sleep/ico_fuwo_nor.png',
  },
  {
    timeStr: '1小时20分钟',
    scale: 21,
    type: 2,
    long: false,
    url: '/static/images/sleep/ico_youcewo_nor.png',
  },
  {
    timeStr: '1小时10分钟',
    scale: 19,
    type: 3,
    long: false,
    url: '/static/images/sleep/ico_zuocewo_nor.png',
  },
  {
    timeStr: '0分钟',
    scale: 0,
    type: 4,
    long: false,
    url: '/static/images/sleep/ico_zhan_zuozi_nor.png',
  },
])

function breatheStudy() {
  console.log('呼吸研究')
}

function sleepPosition() {
  console.log('睡眠姿势研究')
}

function getSleepImage(val: number, long: boolean) {
  switch (val) {
    case 0:
      return long
        ? '/static/images/sleep/icon_yangwo_highlight_long.png'
        : '/static/images/sleep/icon_yangwo_highlight.png'
    case 1:
      return long
        ? '/static/images/sleep/ico_fuwo_highlight_long.png'
        : '/static/images/sleep/ico_fuwo_nor.png'
    case 2:
      return long
        ? '/static/images/sleep/ico_youcewo_highligh_long.png'
        : '/static/images/sleep/ico_youcewo_nor.png'
    case 3:
      return long
        ? '/static/images/sleep/ico_zuocewo_highlight_long.png'
        : '/static/images/sleep/ico_zuocewo_nor.png'
    case 4:
      return long
        ? '/static/images/sleep/ico_zhan_zuozi_highlight_long.png'
        : '/static/images/sleep/ico_zhan_zuozi_nor.png'
    default:
      return ''
  }
}
</script>

<style lang="scss" scoped>
.content_view {
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 38rpx;
}

.study_left_view {
  width: 334.92rpx;
  height: auto;

  margin-right: 9rpx;

  // 呼吸研究
  .breathe_study_view {
    width: 334.92rpx;
    height: 216rpx;

    background: #fff;
    box-shadow: 0rpx 0rpx 46rpx 0rpx rgba(177, 177, 177, 0.18);
    border-radius: 27rpx 27rpx 27rpx 27rpx;

    .breathe_study_bg_view {
      height: 216rpx;

      background: url('~@/static/images/sleep/img_shuimianhuxiyanjiu.png');
      background-repeat: no-repeat;
      background-size: cover;

      padding: 30rpx 25rpx;

      .breathe_study_top_view {
        display: flex;
        align-items: center;
        justify-content: space-between;

        text {
          font-family: MiSans, MiSans;
          font-weight: 600;
          font-size: 31rpx;
          color: #1d2129;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }

        image {
          width: 13rpx;
          height: 25rpx;
        }
      }

      .breathe_study_bottom_view {
        width: 286rpx;
        height: 95rpx;

        background: #c4d6fb;
        box-shadow: 0rpx 0rpx 46rpx 0rpx rgba(177, 177, 177, 0.15);
        border-radius: 8rpx 8rpx 8rpx 8rpx;

        margin-top: 19rpx;

        display: flex;
        align-items: center;
        justify-content: center;

        .snore_left_item_view {
          font-family: MiSans, MiSans;
          font-weight: 600;
          font-size: 27rpx;
          line-height: 42rpx;
          text-align: left;
          font-style: normal;
          text-transform: none;

          color: #3b76f2;

          display: flex;
          align-items: start;
          justify-content: center;

          flex-direction: column; // 布局方向

          .range_item_view {
            background: linear-gradient(270deg, #6597ec 0%, #88b4fe 100%);
            border-radius: 4rpx 4rpx 4rpx 4rpx;

            padding: 5rpx 8rpx;

            font-family: MiSans, MiSans;
            font-weight: 600;
            font-size: 15rpx;
            color: #f3f3f3;
            line-height: 18rpx;
            text-align: left;
            font-style: normal;
            text-transform: none;
          }
        }

        .snore_right_item_view {
          margin-left: 15rpx;

          text {
            font-family: MiSans, MiSans;
            font-weight: 600;
            font-size: 42rpx;
            color: #ffffff;
            line-height: 49rpx;
            text-align: right;
            font-style: normal;
            text-transform: none;
          }
        }
      }
    }
  }

  // 睡眠潜伏期
  .sleep_latency_view {
    width: 334.92rpx;
    height: 157rpx;

    background: #ffffff;
    box-shadow: 0rpx 0rpx 46rpx 0rpx rgba(177, 177, 177, 0.18);
    border-radius: 19rpx 19rpx 19rpx 19rpx;

    margin-top: 19rpx;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    .sleep_latency_bg_view {
      width: 137rpx;
      height: 98rpx;

      background: url('~@/static/images/sleep/img_shuimianqianfuqi.png');
      background-repeat: no-repeat;
      background-size: cover;

      position: absolute;
      bottom: 11rpx;
      right: 22rpx;
      z-index: 0;
    }

    .latency_left_view {
      display: flex;
      align-items: start;
      justify-content: center;

      flex-direction: column; // 布局方向

      z-index: 1;

      margin-right: 22rpx;

      text {
        font-family: MiSans, MiSans;
        font-weight: 600;
        font-size: 31rpx;
        color: #1d2129;
        line-height: 36rpx;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }

      .long_time_view {
        font-family: MiSans, MiSans;
        font-weight: 600;
        font-size: 19rpx;
        color: #4e5969;
        line-height: 22rpx;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
    }

    .latency_right_view {
      z-index: 1;

      text {
        font-family: MiSans, MiSans;
        font-weight: 600;
        font-size: 23rpx;
        color: #3b76f2;
        line-height: 27rpx;
        text-align: right;
        font-style: normal;
        text-transform: none;
      }

      .long_time_view {
        font-family: MiSans, MiSans;
        font-weight: 600;
        font-size: 46rpx;
        color: #3b76f2;
        line-height: 54rpx;
        text-align: right;
        font-style: normal;
        text-transform: none;
      }
    }
  }

  // 觉醒次数
  .wake_up_view {
    width: 334.92rpx;
    height: 157rpx;

    background: #ffffff;
    box-shadow: 0rpx 0rpx 46rpx 0rpx rgba(177, 177, 177, 0.18);
    border-radius: 19rpx 19rpx 19rpx 19rpx;

    margin-top: 19rpx;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    .sleep_latency_bg_view {
      width: 139rpx;
      height: 129rpx;

      background: url('~@/static/images/sleep/ico_juexingcishu.png');
      background-repeat: no-repeat;
      background-size: cover;

      position: absolute;
      bottom: 11rpx;
      right: 22rpx;
      z-index: 0;
    }

    .latency_left_view {
      display: flex;
      align-items: start;
      justify-content: center;

      flex-direction: column; // 布局方向

      z-index: 1;

      margin-right: 68rpx;

      text {
        font-family: MiSans, MiSans;
        font-weight: 600;
        font-size: 31rpx;
        color: #1d2129;
        line-height: 36rpx;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }

      .long_time_view {
        font-family: MiSans, MiSans;
        font-weight: 600;
        font-size: 19rpx;
        color: #4e5969;
        line-height: 22rpx;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
    }

    .latency_right_view {
      z-index: 1;

      text {
        font-family: MiSans, MiSans;
        font-weight: 600;
        font-size: 23rpx;
        color: #3b76f2;
        line-height: 27rpx;
        text-align: right;
        font-style: normal;
        text-transform: none;
      }

      .long_time_view {
        font-family: MiSans, MiSans;
        font-weight: 600;
        font-size: 46rpx;
        color: #3b76f2;
        line-height: 54rpx;
        text-align: right;
        font-style: normal;
        text-transform: none;
      }
    }
  }
}

.study_right_view {
  width: 334.92rpx;
  height: auto;

  margin-left: 9rpx;

  flex-direction: column; // 布局方向

  .sleeping_position_view {
    width: 334.92rpx;
    height: 566rpx;

    background: #ffffff;
    border-radius: 27rpx 27rpx 27rpx 27rpx;

    .breathe_study_top_view {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-left: 24rpx;
      margin-right: 24rpx;

      padding-top: 24rpx;

      text {
        font-family: MiSans, MiSans;
        font-weight: 600;
        font-size: 31rpx;
        color: #1d2129;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }

      image {
        width: 13rpx;
        height: 25rpx;
      }
    }

    .number_flips_view {
      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-left: 32rpx;
      margin-right: 32rpx;
      margin-top: 19rpx;

      .flips_tip_bg_view {
        display: flex;
        align-items: center;
        justify-content: center;

        .flips_tip_view {
          width: 10rpx;
          height: 10rpx;
          background: linear-gradient(270deg, #6597ec 0%, #88b4fe 100%);
          border-radius: 0rpx 0rpx 0rpx 0rpx;
          margin-right: 7rpx;
        }

        text {
          font-family: MiSans, MiSans;
          font-weight: 600;
          font-size: 27rpx;
          color: #4e5969;
          line-height: 31rpx;
          text-align: left;
          font-style: normal;
          text-transform: none;
        }
      }

      .flips_time_view {
        font-family: MiSans, MiSans;
        font-weight: 600;
        font-size: 27rpx;
        color: #3b76f2;
        line-height: 31rpx;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
    }

    .flips_list_view {
      display: flex;
      align-items: center;
      justify-content: center;

      flex-direction: column; // 布局方向
    }

    .flips_list_item_view {
      width: 248rpx;
      height: 62rpx;

      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 0 19rpx;
      margin-top: 19rpx;

      .image1 {
        width: 69rpx;
        height: 45rpx;
      }

      .image2 {
        width: 69rpx;
        height: 68rpx;
      }

      text {
        font-family: MiSans, MiSans;
        font-weight: 500;
        font-size: 19rpx;
        color: #4e5969;
        line-height: 22rpx;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }

      .list_text_viwe {
        margin-bottom: 10rpx;
      }

      .scale_view {
        margin-left: 8rpx;

        font-family: MiSans, MiSans;
        font-weight: 500;
        font-size: 19rpx;
        color: #3b76f2;
        line-height: 22rpx;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
    }

    .flips_list_item_2_view {
      width: 248rpx;
      height: 62rpx;

      display: flex;
      align-items: center;
      justify-content: space-between;

      background: #c4d6fb;
      border-radius: 8rpx 8rpx 8rpx 8rpx;

      padding: 0 19rpx;
      margin-top: 19rpx;

      .image1 {
        width: 69rpx;
        height: 45rpx;
      }

      .image2 {
        width: 69rpx;
        height: 68rpx;
      }

      .list_text_viwe {
        margin-bottom: 10rpx;
      }

      text {
        font-family: MiSans, MiSans;
        font-weight: 500;
        font-size: 19rpx;
        color: #4e5969;
        line-height: 22rpx;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }

      .scale_view {
        margin-left: 8rpx;

        font-family: MiSans, MiSans;
        font-weight: 500;
        font-size: 19rpx;
        color: #3b76f2;
        line-height: 22rpx;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
    }
  }
}
</style>
