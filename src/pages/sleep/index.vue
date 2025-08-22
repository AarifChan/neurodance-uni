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
<!-- HoST数据首页 -->
<template>
  <view class="content_view">
    <!-- 浮层 - 日、周、月、年 -->
    <DateTab
      v-model:selected="selected"
      @did-change="dateDidChange"
      v-model:current-date="currentDate"
    />

    <!-- 内容 -->
    <scroll-view class="page-content" scroll-y show-scrollbar>
      <day
        :report="sleepReport"
        v-if="selected == 0"
        :tab-list="reportList"
        :selected="selected"
        :current="reportId"
        @report-id-change="handleReportId"
      />
      <week v-else-if="selected == 1" :selected="selected" />
      <moon v-else-if="selected == 2" :selected="selected" />
      <year v-else-if="selected == 3" :selected="selected" />
    </scroll-view>
  </view>
</template>

<script lang="ts" setup>
import day from './data/day/day.vue'
import week from './data/week/week.vue'
import moon from './data/moon/moon.vue'
import year from './data/year/year.vue'
import DateTab from '@/components/date-tab/date-tab.vue'
import { getSleepSummary, getSleepDetail, type SleepData, type SleepId } from '@/api/sleep/index'
const currentDate = ref<number>(0)
const sleepReport = ref<SleepData | null>(null)
const reportList = ref<SleepId[]>([])
const reportId = ref(0)
import { getLastPage } from '@/utils/index'
onMounted(async () => {
  const page = getLastPage() as any
  console.log('getLastPage:', page?.options)
  const day = page?.options?.day
  if (day) {
    currentDate.value = Number(day)
    getDayData(day)
  }
})

const getDayData = async (day: number) => {
  const res = await getSleepSummary(day)

  if (res.state === 200) {
    reportList.value = res.data ?? []
    let data = res.data.map((item) => item.sleepId).reverse()
    if (data.length > 0) {
      reportId.value = reportList.value.map((n) => n.sleepId)[0]
      await getReportDetail()
      return
    }
  }
  sleepReport.value = null
  reportId.value = 0
  reportList.value = []
}
const handleReportId = (id: number) => {
  reportId.value = id
  getReportDetail()
}

const getReportDetail = async () => {
  if (reportId.value !== 0) {
    const res = await getSleepDetail(reportId.value)
    console.log('getSleepReport:', res.data)
    if (res.state === 200) {
      sleepReport.value = res.data
      return
    } else {
      sleepReport.value = null
    }
  }
}

const selected = ref(0)
const dateDidChange = (day: number) => {
  getDayData(day)
}
</script>

<style lang="scss" scoped>
.content_view {
  position: relative;
  width: 100%;
  // padding: 32rpx 0;

  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f3f3f3;
}
.page-content {
  position: relative;
  width: 100%;
  height: calc(100vh - 108rpx);
}
</style>
