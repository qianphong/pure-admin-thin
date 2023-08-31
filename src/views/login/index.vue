<script setup lang="ts">
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { message } from "@/utils/message";
import { useNav } from "@/layout/hooks/useNav";
import type { FormInstance, FormRules } from "element-plus";
import { useLayout } from "@/layout/hooks/useLayout";
import { useUserStoreHook } from "@/store/modules/user";
import { initRouter, getTopMenu } from "@/router/utils";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";

import Lock from "@iconify-icons/ri/lock-fill";
import User from "@iconify-icons/ri/user-3-fill";

defineOptions({
  name: "Login"
});

const { initStorage } = useLayout();
initStorage();
const { title } = useNav();

const router = useRouter();
const loading = ref(false);
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive<Store["loginParams"]>({
  userName: "admin",
  password: "test123456"
});
const loginRules: FormRules = {
  userName: { required: true, message: "请输入账号", trigger: "blur" },
  password: {
    required: true,
    message: "请输入密码",
    trigger: "blur"
  }
};

const onLogin = async (formEl: FormInstance | undefined) => {
  loading.value = true;
  if (!formEl) return;
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      await useUserStoreHook().login(ruleForm);
      initRouter().then(() => {
        router.push(getTopMenu(true).path);
        message("登录成功", { type: "success" });
      });
    } else {
      loading.value = false;
      return fields;
    }
  });
};
</script>

<template>
  <div class="w-96 mx-auto py-16">
    <h2 class="mb-8">{{ title }}</h2>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="loginRules"
      size="large"
    >
      <el-form-item prop="userName">
        <el-input
          clearable
          v-model="ruleForm.userName"
          placeholder="账号"
          :prefix-icon="useRenderIcon(User)"
        />
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          clearable
          show-password
          v-model="ruleForm.password"
          placeholder="密码"
          :prefix-icon="useRenderIcon(Lock)"
        />
      </el-form-item>

      <el-button
        class="w-full mt-4"
        size="default"
        type="primary"
        :loading="loading"
        @click="onLogin(ruleFormRef)"
      >
        登录
      </el-button>
    </el-form>
  </div>
</template>
