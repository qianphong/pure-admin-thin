<script setup lang="ts">
import { useNav } from "@/layout/hooks/useNav";
import LogoutCircleRLine from "@iconify-icons/ri/logout-circle-r-line";
import AccountCircleFill from "@iconify-icons/ri/account-circle-fill";
import ArrowDown from "@iconify-icons/ep/arrow-down";

defineProps<{ dark?: boolean }>();
const { logout, username, userAvatar } = useNav();
</script>

<template>
  <!-- 退出登录 -->
  <el-dropdown class="user-action" :class="{ 'is-dark': dark }" trigger="click">
    <div class="el-dropdown-link navbar-bg-hover select-none">
      <div style="margin-right: 5px">
        <img v-if="userAvatar" :src="userAvatar" class="user-avatar" />
        <IconifyIconOffline
          v-else
          :icon="AccountCircleFill"
          class="user-avatar"
        />
      </div>
      <p v-if="username">{{ username }}</p>
      <IconifyIconOffline :icon="ArrowDown" style="margin: 5px" />
    </div>
    <template #dropdown>
      <el-dropdown-menu class="logout">
        <el-dropdown-item @click="logout">
          <IconifyIconOffline :icon="LogoutCircleRLine" style="margin: 5px" />
          退出系统
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style lang="scss">
.user-action {
  .el-dropdown-link {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 48px;
    padding: 10px;
    color: #000000d9;
    cursor: pointer;
  }
  .user-avatar {
    width: 32px;
    height: 32px;
    font-size: 32px;
  }
  &.is-dark {
    color: #fff;
  }
  p {
    font-size: 14px;
  }
}
</style>
