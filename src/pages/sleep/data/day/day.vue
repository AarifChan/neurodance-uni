<!-- HoST - 日 -->
<template>
  <view class="data_content">
    <sleep-data :report="report" />
    <clock :report="report" />
    <sleep-rating :report="report" />
    <sleep-study :report="report" />
    <sleep-long />
    <suggestions-logs />
  </view>
</template>

<script lang="ts" setup>
import sleepData from './component/sleepData.vue'
import clock from './component/clock.vue'
import sleepRating from './component/sleepRating.vue'
import sleepStudy from './component/sleepStudy.vue'
import sleepLong from './component/sleepLong.vue'
import suggestionsLogs from './component/suggestionsLogs.vue'

import { type SleepData } from '@/api/sleep/index'
import { PropType } from 'vue'

defineProps({
  report: {
    default: null,
    type: Object as PropType<SleepData | null>,
  },
})
</script>

<style lang="scss" scoped>
.data_content {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
