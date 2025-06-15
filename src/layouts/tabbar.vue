<template>
  <wd-config-provider :themeVars="themeVars" custom-class="custom-class">
    <slot />
    <fg-tabbar />
    <wd-toast />
    <wd-message-box />
  </wd-config-provider>
</template>

<script lang="ts" setup>
import type { ConfigProviderThemeVars } from 'wot-design-uni'

const themeVars: ConfigProviderThemeVars = {
  // colorTheme: 'red',
  // buttonPrimaryBgColor: '#07c160',
  // buttonPrimaryColor: '#07c160',
}
</script>
<style>
.custom-class {
  position: relative;
  width: 100vw;
  height: 100vh;
}
</style>
