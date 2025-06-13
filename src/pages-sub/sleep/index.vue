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
      @did-change="dateTabDidChange"
      :current-date="currentDate"
    />

    <!-- 内容 -->
    <scroll-view :style="{ height: dynamicHeight }" scroll-y show-scrollbar>
      <day v-if="selected == 0" :selected="selected" />
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
import DateTab from './components/date-tab/date-tab.vue'
import { dayjs } from 'wot-design-uni'

const currentDate = ref<number>(0)

onMounted(() => {
  let now = new Date()
  const ds = now.valueOf()
  console.log('ds:', ds)
  currentDate.value = ds
})

const dynamicHeight = ref('900px')
const selected = ref(0)
const dateTabDidChange = (index: number) => {
  console.log('dateTabDidChange:', index)
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
}
</style>
