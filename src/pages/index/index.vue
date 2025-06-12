<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '',
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <view class=""></view>
</template>

<script lang="ts" setup>
//
onMounted(() => {
  uni.hideTabBar()
  setTimeout(() => {
    uni.reLaunch({ url: '/pages/data/index' })
  }, 200)
})
</script>

<style lang="scss" scoped>
//
</style>
