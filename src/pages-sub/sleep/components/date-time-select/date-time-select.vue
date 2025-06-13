<template>
  <view
    :animation="animationData"
    class="time_view"
    :style="{ height: dynamicHeight, bottom: -dynamicHeight }"
  >
    <view>
      <view class="top_tiem_icon" @click="selectTime()">
        <image src="/static/images/sleep/datepicker_ico_close.png"></image>
      </view>

      <view class="title_time_view">
        <text>选择时间</text>
        <image src="/static/images/sleep/datepicker_ico_backtotoday.png"></image>
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
              style="width: 95rpx"
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
</template>

<script lang="ts" setup>
//
const animationData = ref({})
const animation = uni.createAnimation()
import { v4 as uuidv4 } from 'uuid'
const show = ref(false)
const hwHeight = ref(0)
const timeHigh = ref('660px') // 日历高度
const listData = []
const dynamicHeight = ref('772px')
const dataStr = ref('02月02日-02月08日')
onMounted(() => {
  const res = uni.getSystemInfoSync()
  hwHeight.value = res.windowHeight - 0 // 内容窗口高度
})
// 选择时间
const selectTime = () => {
  running()
}
// 日历动画
const running = () => {
  if (show.value) {
    show.value = false
    var num = hwHeight.value
    animation.translateY(num).step({
      duration: 500,
    })
    animationData.value = animation.export()
  } else {
    // console.log("到这里！！")
    show.value = true
    var num = hwHeight.value
    animation.translateY(-num).step({
      duration: 600,
    })
    animationData.value = animation.export()
  }
}
const change = (e, id) => {
  running()

  // console.log(JSON.stringify(e.detail.index))
}
</script>

<style lang="scss" scoped>
//
</style>
