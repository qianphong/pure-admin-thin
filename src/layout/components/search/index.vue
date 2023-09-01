<script setup lang="ts">
import { useToggle } from "@vueuse/core";
import { SearchModal } from "./components";
import Search from "@iconify-icons/ep/search";

const [show, toggle] = useToggle();
function handleSearch() {
  toggle();
}
</script>

<template>
  <div
    class="search-container w-[40px] h-[48px] flex-c cursor-pointer navbar-bg-hover"
    @click="handleSearch"
  >
    <IconifyIconOffline :icon="Search" />
  </div>
  <SearchModal v-model:value="show" />
</template>
