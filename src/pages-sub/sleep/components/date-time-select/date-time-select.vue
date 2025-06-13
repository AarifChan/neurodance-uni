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
</script>

<style lang="scss" scoped>
//
</style>
