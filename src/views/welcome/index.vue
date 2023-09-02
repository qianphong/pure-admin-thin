<script setup lang="ts">
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
// IconifyIconOffline
import Star from "@iconify-icons/ep/star";

// SVG
import Dark from "@/assets/svg/dark.svg?component";

defineOptions({
  name: "Welcome"
});
</script>

<template>
  <div>
    <h1>Pure-Admin-Thin（非国际化版本）</h1>

    <div class="space-y-5 mt-5">
      <h2>图标</h2>
      <div class="bg-white p-3 rounded-lg">
        <h3><code>UnoCSS presetIcons</code></h3>
        <div class="mt-2 flex gap-2">
          <span class="i-ep-star" />
        </div>
      </div>
      <div class="bg-white p-3 rounded-lg">
        <h3><code>IconifyIconOffline</code></h3>
        <div class="mt-2 flex gap-2">
          <IconifyIconOffline :icon="Star" />
        </div>
      </div>
      <div class="bg-white p-3 rounded-lg">
        <h3><code>IconifyIconOnline</code></h3>
        <div class="mt-2 flex gap-2">
          <IconifyIconOnline icon="ant-design:star-outlined" />
          <IconifyIconOnline icon="fxemoji:2hearts" />
        </div>
      </div>
      <div class="bg-white p-3 rounded-lg">
        <h3><code>Iconfont</code></h3>
        <div class="mt-2 flex gap-2">
          <FontIcon icon="pure-iconfont-new" />
        </div>
      </div>
      <div class="bg-white p-3 rounded-lg">
        <h3><code>SVG</code></h3>
        <div class="mt-2 flex gap-2">
          <Dark />
        </div>
      </div>
      <div class="bg-white p-3 rounded-lg">
        <h3><code>useRenderIcon</code></h3>
        <div class="mt-2 flex gap-2">
          <component :is="useRenderIcon('lollipop')" />
          <component :is="useRenderIcon(Dark)" />
          <component :is="useRenderIcon(Star)" />
          <component :is="useRenderIcon('fxemoji:2hearts')" />
          <component :is="useRenderIcon('IF-pure-iconfont-new svg')" />
        </div>
      </div>
    </div>
  </div>
</template>
