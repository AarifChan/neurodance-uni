<!-- 解读与建议 - 月 -->
<template>
  <view class="content_view">
    <view class="las_view">
      <view class="las_bg_view"></view>
      <view class="las_context_view">
        <text>解读与建议</text>
        <text class="context_view">{{ content }}</text>
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

  flex-direction: column; // 布局方向

  margin-top: 38rpx;
}

.las_view {
  width: 689rpx;
  height: 252rpx;

  margin-bottom: 269rpx;

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
    background: url('~@/static/images/sleep/img_jieduyujianyi.png');
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
</style>
