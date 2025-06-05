<!-- 使用 type="home" 属性设置首页，其他页面不需要设置，默认为page；推荐使用json5，更强大，且允许注释 -->
<route lang="json5" type="home">
{
  layout: 'tabbar',
  style: {
    navigationStyle: 'custom',
    navigationBarTitleText: '首页',
  },
}
</route>
<template>
  <view class="bg-white overflow-hidden pt-2 px-4"></view>
</template>

<script lang="ts" setup>
import PLATFORM from '@/utils/platform'

defineOptions({
  name: 'Home',
})

// #ifndef MP-WEIXIN
// 其他平台继续使用uni API

// 测试 uni API 自动引入
onLoad(() => {})
</script>

<style>
.main-title-color {
  color: #d14328;
}
</style>
