<!-- 睡个好觉 -->
<template>
  <view class="content_view">
    <eog-vue></eog-vue>
    <eeg-vue></eeg-vue>
    <snore-vue></snore-vue>
  </view>
</template>

<script>
import eegVue from './line/eeg.vue'
import eogVue from './line/eog.vue'
import snoreVue from './line/snore.vue'

export default {
  props: {},
  components: {
    eegVue,
    eogVue,
    snoreVue,
  },
  data() {
    return {}
  },
  onLoad(option) {
    // if (option != null && option != undefined) {
    // 	console.log('当前id：' + option.id);
    // }
  },
  mounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.content_view {
  width: 100%;
  height: auto;

  // position: relative;
}
</style>
