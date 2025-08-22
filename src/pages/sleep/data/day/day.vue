<!-- HoST - 日 -->
<template>
  <view class="data_content">
    <sleep-data
      :report="report"
      :current="current"
      :tab-list="tabList"
      @report-id-change="handleItemChange"
    />

    <clock :report="report" />
    <sleep-rating :report="report" />
    <sleep-study :report="report" />
    <!-- <sleep-long /> -->
    <!-- <suggestions-logs /> -->
  </view>
</template>

<script lang="ts" setup>
import sleepData from './component/sleepData.vue'
import clock from './component/clock.vue'
import sleepRating from './component/sleepRating.vue'
import sleepStudy from './component/sleepStudy.vue'
import sleepLong from './component/sleepLong.vue'
import suggestionsLogs from './component/suggestionsLogs.vue'

import { SleepId, type SleepData } from '@/api/sleep/index'
import { PropType } from 'vue'

const props = defineProps({
  report: {
    default: null,
    type: Object as PropType<SleepData | null>,
  },
  tabList: {
    default: [] as SleepId[],
    type: Array as PropType<SleepId[]>,
  },
  current: {
    default: 0,
    type: Number,
  },
})
const emits = defineEmits(['reportIdChange'])

const handleItemChange = (id: number) => {
  emits('reportIdChange', id)
}
</script>

<style lang="scss" scoped>
.data_content {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 32rpx;
  padding-bottom: 32rpx;
}
</style>
