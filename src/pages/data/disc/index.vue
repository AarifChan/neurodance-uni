<!-- 睡个好觉 -->
<template>
  <view class="content_view" :style="{ height: dynamicHeight }">
    <starlit-sky-vue class="bg_view"></starlit-sky-vue>
    <circular-set-vue class="circular_view"></circular-set-vue>
    <sleep-position-vue class="position_view"></sleep-position-vue>
    <sleep-log-vue
      :class="log ? 'sleep-log-1' : 'sleep-log'"
      @isFocused="handleFocus"
    ></sleep-log-vue>
  </view>
</template>

<script>
import starlitSkyVue from './component/starlitSky.vue'
import circularSetVue from './component/circularSet.vue'
import sleepPositionVue from './component/sleepPosition.vue'
import sleepLogVue from './component/sleepLog.vue'

export default {
  props: {},
  components: {
    starlitSkyVue,
    circularSetVue,
    sleepPositionVue,
    sleepLogVue,
  },
  onLoad(options) {
    if (options != undefined && options != null) {
      let ot =
        'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhY2Nlc3MiLCJ1aWQiOiI0MSIsIm5iZiI6MTc0NzAxNDA5MCwiZXhwIjoxNzQ3NjE4ODkwLCJqdGkiOiIwNWQxZjVhMmFhODM0ZTg0ODZiNjM1MWIwMjZmZjBmZCIsImlhdCI6MTc0NzAxNDA5MH0.TEV9YRpGPn5fDj_kh41KWNYK6gu5MGE80iSVrkT743JGVM-TwH614PfTFhc3ugFHFKk-HL_shv92eA8eyPN6Ug'
      let token = 'Bearer ' + ot

      // let token = 'Bearer ' + options.token
      uni.setStorageSync(this.$key.token, token)
    }
  },
  data() {
    return {
      dynamicHeight: '1080px',
      log: false,
    }
  },
  mounted() {
    this.getHeight()
  },
  methods: {
    getHeight() {
      this.dynamicHeight = window.innerHeight + 'px'
    },
    handleFocus(val) {
      this.log = val.data
    },
  },
}
</script>

<style lang="scss" scoped>
.content_view {
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.bg_view {
  width: 100%;
  height: auto;

  position: absolute;
  z-index: 0;
}

.circular_view {
  width: 100%;
  height: auto;

  position: absolute;
  z-index: 1;
}

.position_view {
  position: absolute;
  z-index: 2;
  top: 310rpx;
}

.sleep-log {
  position: absolute;
  z-index: 4;
  top: 1280rpx;
}

.sleep-log-1 {
  position: absolute;
  z-index: 4;
  top: 0;
}
</style>
