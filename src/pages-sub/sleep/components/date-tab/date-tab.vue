<template>
  <view class="custom-date-tab">
    <wd-segmented
      :options="topList"
      @change="handleChange"
      customClass="custom-segmented"
      v-model:value="current"
    />
  </view>
  <view class="data_top_view" ref="topView">
    <view class="data_top_item_view">
      <image src="/static/images/sleep/btn_ico_zuojiantou_nor.png" @tap.stop="didClickLeft" />
      <view class="data_select_view" @click="emits('didTapChange')">
        <text>{{ currentDateStr }}</text>
        <image
          src="/static/images/sleep/btn_ico_zhankai_nor.png"
          style="width: 21.5rpx; height: 12rpx; padding-left: 15rpx"
        />
      </view>
      <image src="/static/images/sleep/btn_ico_youjiantou_nor.png" @tap.stop="didClickRight" />
    </view>
  </view>
</template>

<script lang="ts" setup>
import { dayjs } from 'wot-design-uni'

const props = defineProps({
  selected: {
    default: 0,
    type: Number,
  },
  currentDate: {
    default: 0,
    type: Number,
  },
})

const currentDateStr = computed(() => {
  switch (current.value) {
    case '日':
      return dayjs(props.currentDate).format('MM月DD日')
    case '周':
      return dayjs(props.currentDate).format('MM月DD日')
    case '月':
      return dayjs(props.currentDate).format('MM月DD日')
    case '年':
      return dayjs(props.currentDate).format('MM月DD日')
    default:
      return ''
  }
})

const current = ref('日')

const emits = defineEmits([
  'update:selected',
  'didChange',
  'didTapLeft',
  'didTapRight',
  'didTapChange',
])
const handleChange = (e: { value: string }) => {
  const index = topList.value.indexOf(e.value)
  console.log('handleChange:', e.value, index)
  emits('update:selected', index)
}
const didClickLeft = () => {
  switch (current.value) {
    case '日':
      break
    case '周':
      break
    case '月':
      break
    case '年':
      break
    default:
      return ''
  }
}
const didClickRight = () => {
  switch (current.value) {
    case '日':
      break
    case '周':
      break
    case '月':
      break
    case '年':
      break
    default:
      return ''
  }
}

const topList = ref(['日', '周', '月', '年'])
</script>

<style lang="scss" scoped>
.custom-date-tab {
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 32rpx 120rpx;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;
  :deep(.custom-segmented) {
    background-color: #f1f1f1;
    border-radius: 20rpx;
    .is-active {
      color: $primary-blue;
    }
  }
  :deep(.wd-segmented__item-label) {
    font-size: 32rpx;
    padding: 4rpx 0;
  }
  :deep(.wd-segmented__item--active) {
    height: 100%;

    border-radius: 0;
    border-radius: 20rpx;
    box-shadow: 0px 0px 24px 0px rgba(177, 177, 177, 0.18);
  }
}

// 顶部时间选择
.data_top_view {
  width: 100%;
  padding: 32rpx;
  box-sizing: border-box;
  background-color: white;
  .data_top_item_view {
    display: flex;
    align-items: center;
    justify-content: center;
    image {
      padding: 0 5rpx;
      width: 18.5rpx;
      height: 29rpx;
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
</style>
