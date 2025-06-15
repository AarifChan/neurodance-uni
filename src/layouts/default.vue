<template>
  <wd-config-provider :themeVars="themeVars" custom-class="custom-class">
    <slot />
    <wd-toast />
    <wd-message-box />
    <privacy-popup />
  </wd-config-provider>
</template>

<script lang="ts" setup>
import type { ConfigProviderThemeVars } from 'wot-design-uni'

const themeVars: ConfigProviderThemeVars = {
  buttonPrimaryBgColor: '#3B76F2',
  colorTheme: '#3B76F2',
  // buttonPrimaryBgColor: '#07c160',
  buttonPrimaryColor: '#3B76F2',
  segmentedItemBgColor: '#ffff',
  segmentedItemColor: '#4E596',
  segmentedPadding: 'none',
}
</script>

<style>
.custom-class {
  position: relative;
  width: 100vw;
  height: 100vh;
}
</style>
