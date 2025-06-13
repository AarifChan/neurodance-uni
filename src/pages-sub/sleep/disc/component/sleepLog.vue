<!-- 睡眠日记 -->
<template>
  <view :class="isFocused ? 'content_view_100' : 'content_view'">
    <view class="content_top">
      <view class="log_context">
        <text>睡眠日记</text>
        <textarea
          v-model="inputValue"
          placeholder="记录下您每天的入睡状态，服药情况，饮食情况，帮您找到影响睡眠问题的原因。"
          show-confirm-bar
          confirm-type="send"
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
          :focus="isFocused"
        />
      </view>
    </view>

    <view :class="img == img_fail ? 'submit_top_fail' : 'submit_top'">
      <image
        v-if="img != img_fail"
        :class="img == img_submit ? 'image2' : img == img_success ? 'image3' : 'image'"
        :src="img"
        @click="setDiary(inputValue)"
      ></image>
      <image v-if="img == img_fail" class="image3" :src="img"></image>
    </view>
  </view>
</template>

<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      img: 'https://ndweb.oss-rg-china-mainland.aliyuncs.com/app/submit_icon.png',
      img_plan: 'https://ndweb.oss-rg-china-mainland.aliyuncs.com/app/submit_icon.png', // 提交
      img_submit: 'https://ndweb.oss-rg-china-mainland.aliyuncs.com/app/submit_ing_icon.png', // 提交中
      img_success: 'https://ndweb.oss-rg-china-mainland.aliyuncs.com/app/submit_success_icon.png', // 提交成功
      img_fail: 'https://ndweb.oss-rg-china-mainland.aliyuncs.com/app/submit_fail_icon.png', // 网络异常
      inputValue: '',
      isFocused: false,
    }
  },
  onLoad(option) {},
  mounted() {},
  methods: {
    handleInput(e) {
      this.inputValue = e.detail.value
      // console.log("inputValue：" + this.inputValue)
    },

    handleFocus() {
      // 获取焦点
      this.isFocused = true
      this.$emit('isFocused', { data: this.isFocused })
    },
    handleBlur() {
      // 失去焦点
      this.isFocused = false
      this.$emit('isFocused', { data: this.isFocused })
      this.setDiary(this.inputValue)
    },
    setDiary(val) {
      if (this.inputValue == null || this.inputValue == undefined || this.inputValue == '') return
      this.img = this.img_submit

      const _this = this
      this.$http
        .request({
          url: this.$http.SLEEP_DIARY,
          method: 'POST',
          data: {
            content: val,
          },
        })
        .then((res) => {
          if (res.state == 200) {
            _this.img = _this.img_success
            _this.inputValue = ''
          } else {
            _this.img = _this.img_fail
          }

          setTimeout(() => {
            _this.img = _this.img_plan
          }, 3000)
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.content_view {
  width: auto;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;
}

.content_view_100 {
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
}

.content_top {
  width: 689rpx;
  height: 214rpx;

  position: relative;

  background: #ffffff;
  border-radius: 27rpx 27rpx 27rpx 27rpx;

  .log_context {
    padding: 30rpx;

    text {
      font-family: MiSans, MiSans;
      font-weight: 600;
      font-size: 31rpx;
      color: #000000;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }

    textarea {
      width: 500rpx;
      height: 120rpx;

      font-family: MiSans, MiSans;
      font-weight: 400;
      font-size: 23rpx;
      color: #000000;
      text-align: left;

      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}

.submit_top_fail {
  width: 103rpx;
  height: 103rpx;
  background: #f7682c;
  border-radius: 50%;

  position: absolute;
  z-index: 1;
  // top: 55rpx;
  right: 49rpx;

  display: flex;
  align-items: center;
  justify-content: center;
}

.submit_top {
  width: 103rpx;
  height: 103rpx;
  background: #a7c1fa;
  border-radius: 50%;

  position: absolute;
  z-index: 1;
  // top: 55rpx;
  right: 49rpx;

  display: flex;
  align-items: center;
  justify-content: center;
}

.image {
  width: 46rpx;
  height: 46rpx;

  margin-right: 10rpx;
}

.image2 {
  width: 46rpx;
  height: 46rpx;

  animation: rotate 2s linear infinite;
}

.image3 {
  width: 46rpx;
  height: 46rpx;
}

@keyframes rotate {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}
</style>
