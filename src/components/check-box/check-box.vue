<script lang="ts" setup>
defineProps({
  checked: {
    default: false,
    type: Boolean,
  },
})
</script>

<template>
  <image
    class="checkBox"
    :src="checked ? '/static/images/selected.png' : '/static/images/unselect.png'"
  />
</template>

<style scoped lang="scss">
.checkBox {
  width: 32rpx;
  height: 32rpx;
}
</style>
