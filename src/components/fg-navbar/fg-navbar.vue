<script lang="ts" setup>
withDefaults(
  defineProps<{
    leftText?: string
    rightText?: string
    leftArrow?: boolean
    bordered?: boolean
    fixed?: boolean
    placeholder?: boolean
    zIndex?: number
    safeAreaInsetTop?: boolean
    leftDisabled?: boolean
    rightDisabled?: boolean
    title?: string
  }>(),
  {
    leftText: '',
    rightText: '',
    leftArrow: true,
    bordered: false,
    fixed: true,
    placeholder: true,
    zIndex: 99,
    safeAreaInsetTop: true,
    leftDisabled: false,
    rightDisabled: false,
    title: '',
  },
)

function handleClickLeft() {
  uni.navigateBack({
    fail() {
      uni.reLaunch({
        url: '/pages/index/index',
      })
    },
  })
}
</script>

<template>
  <wd-navbar
    :left-text="leftText"
    :right-text="rightText"
    :left-arrow="leftArrow"
    :bordered="bordered"
    :fixed="fixed"
    custom-style="background-color: white !important; width:100%;"
    :placeholder="placeholder"
    :z-index="zIndex"
    :safe-area-inset-top="safeAreaInsetTop"
    :left-disabled="leftDisabled"
    :right-disabled="rightDisabled"
    @click-left="handleClickLeft"
  >
    <template #left>
      <image
        v-if="leftArrow"
        class="back-arrow"
        src="/static/svg/back-arrow.svg"
        mode="scaleToFill"
      />
    </template>

    <template #title>
      <text style="color: #000; font-size: 16px">{{ title }}</text>
    </template>
  </wd-navbar>
</template>
<style lang="scss" scoped>
.back-arrow {
  margin-left: 16rpx;
  width: 20px;
  height: 20px;
  color: black;
}
</style>
