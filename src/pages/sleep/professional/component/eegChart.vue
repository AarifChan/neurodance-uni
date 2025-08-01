<!-- 脑电图 -->
<template>
  <view class="content_view">
    <view class="eeg_content_view">
      <text class="title_view">脑电</text>
    </view>
  </view>
</template>

<script>
export default {
  props: {},
  components: {},
  data() {
    return {}
  },
  onLoad(option) {},
  mounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.content_view {
  width: 100%;
  height: auto;
}

.eeg_content_view {
  width: 100%;
  height: 79rpx;
}

.title_view {
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 2rpx;
  z-index: 1;

  margin-left: 20rpx;

  font-family: MiSans, MiSans;
  font-weight: 600;
  font-size: 11rpx;
  color: #1d2129;
  line-height: 19rpx;
  text-align: left;
  font-style: normal;
  text-transform: none;
}
</style>
