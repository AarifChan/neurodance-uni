<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '',
    disableScroll: true,
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <scroll-view scroll-y class="meditation">
    <DateTab
      v-model:selected="selected"
      @did-change="dateDidChange"
      color="#D198FA"
      v-model:current-date="currentDate"
    />
    <view class="content">
      <view class="top">
        <view class="top-title">
          <text>{{ meditationReport?.durationMin ?? 0 }}</text>
          <text style="font-size: 40rpx">分钟</text>
        </view>
        <ItemTab :list="reportList ?? []" :current="selectId" @click-item="handleClickTab" />
        <view class="top-chart">
          <EmotionsChart
            :data-list="meditationReport?.meditationData ?? []"
            :duration="meditationReport?.durationMin ?? 0"
            :start-time="
              meditationReport ? formatTimestamp(meditationReport?.meditationStart, 'HH:mm') : '- -'
            "
            :end-time="
              meditationReport ? formatTimestamp(meditationReport?.meditationEnd, 'HH:mm') : '- -'
            "
          />
        </view>
        <view class="top-data">
          <view class="item">
            <view class="title">活跃</view>
            <view class="time">
              <view class="minute" v-if="getMinute(meditationReport?.deepEnergeticSeconds ?? 0)">
                {{ getMinute(meditationReport?.deepEnergeticSeconds ?? 0) }}
              </view>
              <view class="seconds" v-if="getMinute(meditationReport?.deepEnergeticSeconds ?? 0)">
                分
              </view>
              <view class="minute">
                {{ getSeconds(meditationReport?.deepEnergeticSeconds ?? 0) }}
              </view>
              <view class="seconds">秒</view>
            </view>
          </view>
          <view class="item">
            <view class="title">自然</view>
            <view class="time">
              <view class="minute" v-if="getMinute(meditationReport?.spontaneousSeconds ?? 0)">
                {{ getMinute(meditationReport?.spontaneousSeconds ?? 0) }}
              </view>
              <view class="seconds" v-if="getMinute(meditationReport?.spontaneousSeconds ?? 0)">
                分
              </view>
              <view class="minute">
                {{ getSeconds(meditationReport?.spontaneousSeconds ?? 0) }}
              </view>
              <view class="seconds">秒</view>
            </view>
          </view>
          <view class="item">
            <view class="title">入定</view>
            <view class="time">
              <view class="minute" v-if="getMinute(meditationReport?.concentrationSeconds ?? 0)">
                {{ getMinute(meditationReport?.concentrationSeconds ?? 0) }}
              </view>
              <view class="seconds" v-if="getMinute(meditationReport?.concentrationSeconds ?? 0)">
                分
              </view>
              <view class="minute">
                {{ getSeconds(meditationReport?.concentrationSeconds ?? 0) }}
              </view>
              <view class="seconds">秒</view>
            </view>
          </view>
        </view>
      </view>

      <view class="data">
        <item
          title="冥想时长"
          sub-title="本次时长"
          unit="分钟"
          :value="meditationReport?.durationMin ?? 0"
        />
        <item
          title="累记冥想"
          sub-title="今日总时长"
          unit="分钟"
          :value="meditationReport?.meditationDayDurationTotalMin ?? 0"
        />
        <item
          title="放松指数"
          sub-title="心情愉悦程度"
          unit="/100"
          :value="meditationReport?.meditationScore ?? 0"
        />
      </view>
    </view>
  </scroll-view>
</template>

<script lang="ts" setup>
//
import DateTab from '@/components/date-tab/date-tab.vue'
import EmotionsChart from './components/EmotionChart/index.vue'
import ItemTab from './components/tab/index.vue'
import { getLastPage } from '@/utils/index'
import Item from './components/item/index.vue'
import { formatTimestamp } from '@/utils/date'
import { getMeditationSummary, getMeditationDetail, MeditationReport } from '@/api/meditation'
const currentDate = ref<number>(0)
const selected = ref(0)
const reportList = ref<number[]>([])
const selectId = ref<number>(0)
const meditationReport = ref<MeditationReport | null>(null)

onMounted(async () => {
  const page = getLastPage() as any
  console.log('getLastPage:', page?.options)
  let day = page?.options?.day
  if (!day) {
    day = Date.now().valueOf()
  }
  currentDate.value = Number(day)
  getDayData(day)
})
const getDayData = async (day: number) => {
  const res = await getMeditationSummary(day)

  if (res.state === 200) {
    let data = res.data.reverse()
    reportList.value = data.map((item) => item.meditationId)
    if (data.length > 0) {
      selectId.value = data[0].meditationId
      getTabData()
      return
    }
  }
  selectId.value = 0
  meditationReport.value = null
}
const handleClickTab = (id: number) => {
  selectId.value = id
  getTabData()
}

const getTabData = async () => {
  const id = selectId.value
  const res = await getMeditationDetail({ meditationId: id })

  if (res.state === 200) {
    meditationReport.value = res.data
    return
  }
}
function formatMinuteSecond(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `${minutes}分${seconds}秒`
}

function getMinute(totalSeconds: number): number {
  const minutes = Math.floor(totalSeconds / 60)
  return minutes
}
function getSeconds(totalSeconds: number): number {
  const seconds = totalSeconds % 60
  return seconds
}

const dateDidChange = (day: number) => {
  getDayData(day)
}
</script>

<style lang="scss" scoped>
//
.meditation {
  position: relative;
  width: 100%;
  background-color: #f3f3f3;
  height: 100vh;
}
.content {
  position: relative;
  width: 100%;

  .top {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 32rpx 0 34rpx;
    width: 100%;
    background-color: white;
    .top-title {
      font-size: 72rpx;
      color: #1d2129;
    }
    .top-chart {
      margin-top: 24rpx;
      position: relative;
      width: 100%;
    }
  }
  .data {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 32rpx;

    gap: 30rpx;
    box-sizing: border-box;
  }
}
.top-data {
  margin-top: 24rpx;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  .item {
    width: calc(100% - 1rpx);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .title {
      color: #4e5969;
      font-size: 24rpx;
    }
    .time {
      color: #d198fa;
      display: flex;
      flex-direction: row;
      align-items: baseline;
      .minute {
        font-size: 28rpx;
      }
      .seconds {
        font-size: 22rpx;
      }
    }
  }
  .item:first-child {
    border-right: 1rpx solid #c9cdd4;
  }
  .item:last-child {
    border-left: 1rpx solid #c9cdd4;
  }
}
</style>
