<!-- 建议与日志 -->
<template>
  <view class="content_view">
    <view class="las_view">
      <view class="las_bg_view"></view>
      <view class="las_context_view">
        <text>解读与建议</text>
        <text class="context_view">{{ content }}</text>
      </view>
    </view>

    <view class="sleep_logs_view">
      <view class="las_bg_view"></view>
      <view class="sleep_logs_context_view">
        <text>睡眠日记</text>
        <text class="time_view">{{ logs.time }}</text>
        <view class="mp3_view" @click="getMp3">
          <image src="/static/voice_icon.png"></image>
          <text>12''</text>
        </view>
        <text class="logs_context_view">{{ logs.context }}</text>
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
      content:
        '今天睡眠质量良好。然而入睡时间是02:14，有些晚。长期熬夜，容易导致内分泌和神经系统失调，抵抗力下降，并有脑梗的风险，请注意休息。昨晚翻身次数为20次，较多，觉醒次数多',
      logs: {
        time: '2024/10/24  01：30',
        mp3: '',
        context:
          '昨天迟迟无法入睡，在床上辗转反侧，最近压力好大，听到一点动静都睡不着，室友又在加班，也不能说些什么，好难受。',
      },
    }
  },
  mounted() {},
  methods: {
    getMp3() {
      console.log('播放语言！！')
    },
  },
}
</script>

<style lang="scss" scoped>
.content_view {
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column; // 布局方向

  margin-top: 38rpx;
}

.las_view {
  width: 689rpx;
  height: 252rpx;

  background: linear-gradient(98deg, #ffffff 0%, #e2ebff 100%);
  box-shadow: 0rpx 0rpx 46rpx 0rpx rgba(177, 177, 177, 0.18);
  border-radius: 27rpx 27rpx 27rpx 27rpx;

  position: relative;

  .las_bg_view {
    position: absolute;
    top: 44rpx;
    right: 36rpx;
    z-index: 0;

    width: 90rpx;
    height: 82rpx;
    background: url('~@/static/img_jieduyujianyi.png');
    background-repeat: no-repeat;
    background-size: cover;
  }

  .las_context_view {
    position: absolute;
    top: 0;
    z-index: 1;

    width: 628rpx;
    height: 191rpx;

    margin: 30rpx;

    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column; // 布局方向

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

    .context_view {
      min-height: 136rpx;
      margin-top: 16rpx;

      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: 23rpx;
      color: #4e5969;
      line-height: 34rpx;
      text-align: justified;
      font-style: normal;
      text-transform: none;
    }
  }
}

.sleep_logs_view {
  margin-top: 38rpx;
  margin-bottom: 232rpx;

  width: 689rpx;
  height: 289rpx;

  background: linear-gradient(158deg, #ffffff 0%, #e8ebff 100%);
  box-shadow: 0rpx 0rpx 46rpx 0rpx rgba(177, 177, 177, 0.18);
  border-radius: 27rpx 27rpx 27rpx 27rpx;

  position: relative;

  .las_bg_view {
    position: absolute;
    top: 44rpx;
    right: 36rpx;
    z-index: 0;

    width: 92rpx;
    height: 103rpx;
    background: url('~@/static/img_shuimianriji.png');
    background-repeat: no-repeat;
    background-size: cover;
  }

  .sleep_logs_context_view {
    width: 628rpx;
    height: 228rpx;

    margin: 30rpx;

    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column; // 布局方向

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

    .time_view {
      margin-top: 15rpx;

      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: 23rpx;
      color: #4e5969;
      line-height: 34rpx;
      text-align: justified;
      font-style: normal;
      text-transform: none;
    }

    .mp3_view {
      width: 198rpx;
      height: 48rpx;

      background: linear-gradient(90deg, #3b76f2 0%, #a7c1fa 100%);
      border-radius: 52rpx 52rpx 52rpx 52rpx;

      display: flex;
      align-items: center;
      justify-content: start;

      margin-top: 12rpx;

      text {
        font-family: MiSans, MiSans;
        font-weight: 400;
        font-size: 23rpx;
        color: #ffffff;
        line-height: 27rpx;
        text-align: left;
        font-style: normal;
        text-transform: none;

        margin-left: 19rpx;
      }

      image {
        width: 29rpx;
        height: 27rpx;

        margin-left: 19rpx;
      }
    }

    .logs_context_view {
      margin-top: 11rpx;
      min-height: 68rpx;

      font-family: MiSans, MiSans;
      font-weight: 500;
      font-size: 23rpx;
      color: #4e5969;
      line-height: 34rpx;
      text-align: justified;
      font-style: normal;
      text-transform: none;
    }
  }
}
</style>
