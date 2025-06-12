<!-- 首页 - 闹钟icon -->
<template>
  <view class="content_view">
    <view class="clock_icon_bg_view">
      <view class="clock_icon_view">
        <view class="clock_left_view">
          <text>脑电闹钟</text>
          <text>
            <span class="title_view">闹钟：</span>
            <span class="context_view">{{ alarmTime }}</span>
          </text>
          <text>
            <span class="title_view">浅睡唤醒区间：</span>
            <span class="context_view">{{ shallowTime }}</span>
          </text>
        </view>

        <view class="clock_right_view">
          <view class="clock_right_bg_view">
            <text class="clock_right_icon_view">唤醒时刻</text>

            <text class="clock_right_data_view">{{ wakeUpTime }}</text>
          </view>

          <text class="clock_right_tip_view">浅睡轻柔唤醒，惬意无负担</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      alarmTime: '10:45',
      shallowTime: '10:30-10:45（15分钟）',
      wakeUpTime: '10:33',
    }
  },
  mounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.content_view {
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;
}

.clock_icon_bg_view {
  width: 689rpx;
  height: 166rpx;

  background: linear-gradient(98deg, #ffffff 0%, #e2ebff 100%);
  box-shadow: 0rpx 0rpx 46rpx 0rpx rgba(177, 177, 177, 0.18);
  border-radius: 19rpx 19rpx 19rpx 19rpx;

  .clock_icon_view {
    width: auto;
    height: auto;

    background: url('~@/static/img_naodiannaozhong.png');
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 30rpx;
  }

  .clock_left_view {
    flex-direction: column; // 布局方向

    display: flex;
    align-items: start;
    justify-content: center;

    text {
      font-family: MiSans, MiSans;
      font-weight: 600;
      font-size: 31rpx;
      color: #1d2129;
      line-height: 36rpx;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }

    .title_view {
      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: 19rpx;
      color: #4e5969;
      line-height: 22rpx;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }

    .context_view {
      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: 19rpx;
      color: #86909c;
      line-height: 22rpx;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }
  }

  .clock_right_view {
    .clock_right_bg_view {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .clock_right_icon_view {
      background: linear-gradient(270deg, #6597ec 0%, #88b4fe 100%);
      border-radius: 4rpx 4rpx 4rpx 4rpx;

      font-family: MiSans, MiSans;
      font-weight: 600;
      font-size: 19rpx;
      color: #ffffff;
      line-height: 22rpx;
      text-align: center;
      font-style: normal;
      text-transform: none;

      padding: 4rpx 8rpx;

      margin-right: 8rpx;
    }

    .clock_right_data_view {
      font-family: MiSans, MiSans;
      font-weight: 600;
      font-size: 46rpx;
      line-height: 54rpx;
      text-align: right;
      font-style: normal;
      text-transform: none;
      color: #466df9;
    }

    .clock_right_tip_view {
      font-family: MiSans, MiSans;
      font-weight: 600;
      font-size: 19rpx;
      color: #3b76f2;
      line-height: 22rpx;
      text-align: right;
      font-style: normal;
      text-transform: none;
    }
  }
}
</style>
