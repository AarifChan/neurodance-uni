<template>
  <view class="ripple-container">
    <view
      class="ripple-circle"
      v-for="n in 5"
      :key="n"
      :style="{ animationDelay: `${(n - 1) * 0.4}s` }"
    ></view>
  </view>
</template>

<style lang="scss" scoped>
.ripple-container {
  position: relative;
  width: 284px;
  height: 284px;
}

.ripple-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 84px;
  height: 84px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(174deg, #bccef5 5.58%, #fff 94.06%); // 可换成 linear-gradient
  opacity: 0.7;
  animation: ripple 2s infinite ease-out;
}

@keyframes ripple {
  0% {
    width: 84px;
    height: 84px;
    opacity: 1;
  }
  100% {
    width: 284px;
    height: 284px;
    opacity: 0;
  }
}
</style>
