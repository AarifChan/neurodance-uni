<!-- 唤醒区间 -->
<template>
  <view class="content_view">
    <view class="up_back_view">
      <text class="tip_1_view">点击查看脑电数据</text>
      <image
        class="logo_view"
        src="https://ndweb.oss-rg-china-mainland.aliyuncs.com/app/logo_shenwu.png"
      ></image>
      <view class="wake_up_view">
        <text>唤醒区间</text>
        <textarea type="number" v-model="inputNumber" maxlength="2" @input="handleInput" />
        <text>分钟</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    number: 0,
  },
  components: {},
  data() {
    return {
      inputNumber,
    }
  },
  mounted() {},
  methods: {
    handleInput(e) {
      this.number = e.detail.value
      this.$emit('time', { data: this.number })
    },
  },
}
</script>

<style lang="scss" scoped>
.content_view {
  height: auto;
  height: auto;
}

.up_back_view {
  width: 400rpx;
  height: 400rpx;

  background: rgba(40, 60, 122, 0.8);
  // background: rgba(29,33,41,0.2);
  box-shadow: 0rpx 0rpx 38rpx 0rpx rgba(0, 0, 0, 0.5);
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column; // 布局方向
}

.tip_1_view {
  font-family: MiSans, MiSans;
  font-weight: 500;
  font-size: 19rpx;
  color: #c9cdd4;

  margin-bottom: 19rpx;
}

.logo_view {
  width: 180rpx;
  height: 128rpx;
}

.wake_up_view {
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 31rpx;
  margin-bottom: 18rpx;
}

.wake_up_view text {
  font-family: MiSans, MiSans;
  font-weight: 400;
  font-size: 30rpx;
  color: #ffffff;
  text-align: left;
  font-style: normal;
  text-transform: none;
}

.wake_up_view textarea {
  width: 80rpx;
  height: 48rpx;
  background: #ffffff;
  border-radius: 8rpx 8rpx 8rpx 8rpx;

  font-family: MiSans, MiSans;
  font-weight: 400;
  font-size: 31rpx;
  color: #00b4f0;
  text-align: center;

  margin-left: 7rpx;
  margin-right: 7rpx;
}
</style>
