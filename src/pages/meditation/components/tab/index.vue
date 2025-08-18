<template>
  <view class="tab-center" v-if="list.length < 5">
    <view
      class="item"
      :class="current === item ? 'active' : ''"
      v-for="(item, index) in list"
      :key="'id' + index"
      @tap.stop="emits('clickItem', item)"
    >
      冥想{{ index + 1 }}
    </view>
  </view>
  <scroll-view class="tab" scroll-x :show-scrollbar="false" v-else>
    <view
      class="item"
      :class="current === item ? 'active' : ''"
      v-for="(item, index) in list"
      :key="'id' + index"
      @tap.stop="emits('clickItem', item)"
    >
      冥想{{ index + 1 }}
    </view>
  </scroll-view>
</template>

<script lang="ts" setup>
//

defineProps({
  list: {
    default: [],
    type: Array as PropType<number[]>,
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
  margin-top: 16rpx;
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
  color: #d198fa;
  border: 2rpx solid #d198fa;
}
</style>
