<template>
  <view class="tab-center" v-if="list.length < 5">
    <view
      class="item"
      :class="current === item.sleepId ? 'active' : ''"
      v-for="(item, index) in list"
      :key="'id' + index"
      @tap.stop="emits('clickItem', item.sleepId)"
    >
      {{ item.sleepType === 1 ? '夜间睡眠' : '小睡' }}
    </view>
  </view>
  <scroll-view class="tab" scroll-x :show-scrollbar="false" v-else>
    <view
      class="item"
      :class="current === item.sleepId ? 'active' : ''"
      v-for="(item, index) in list"
      :key="'id' + index"
      @tap.stop="emits('clickItem', item.sleepId)"
    >
      {{ item.sleepType === 1 ? '夜间睡眠' : '小睡' }}
    </view>
  </scroll-view>
</template>

<script lang="ts" setup>
import { SleepId } from '@/api/sleep'

//

defineProps({
  list: {
    default: [],
    type: Array as PropType<SleepId[]>,
  },
  current: {
    default: 0,
    type: Number,
  },
})
const emits = defineEmits(['clickItem'])
</script>

<style lang="scss" scoped>
.tab {
  margin-top: 16rpx;
  position: relative;
  display: flex;
  padding: 0 32rpx;
  width: 100%;
  box-sizing: border-box;
  flex-direction: row;
  flex-wrap: nowrap;
  white-space: nowrap;
  align-items: center;
}
.tab-center {
  position: relative;
  width: 100%;
  margin-top: 16rpx;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.item {
  display: inline-block;
  padding: 8rpx 12rpx;
  border-radius: 8rpx;
  color: #4e5969;
  border: 2rpx solid #c9cdd4;
  margin-right: 16rpx;
}
.active {
  color: $primary-blue;
  border: 2rpx solid $primary-blue;
}
</style>
