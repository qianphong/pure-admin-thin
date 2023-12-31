import { defineStore } from "pinia";
import { store } from "@/store";
import { userType } from "./types";
import { routerArrays } from "@/layout/types";
import { router, resetRouter } from "@/router";
import { useMultiTagsStoreHook } from "@/store/modules/multiTags";
import {
  clearAuthCache,
  getToken,
  setToken,
  getUserInfo,
  setUserInfo,
  getRoles,
  setRoles
} from "@/utils/auth";
import { login } from "@/api";

export const useUserStore = defineStore({
  id: "pure-user",
  state: (): userType => ({
    // 用户名
    token: getToken(),
    // 用户信息
    userInfo: getUserInfo(),
    // 页面级别权限
    roles: getRoles() || []
  }),
  actions: {
    /** 存储Token */
    SET_TOKEN(token: string) {
      this.token = token;
      setToken(token);
    },
    /** 存储用户信息 */
    SET_USERINFO(userInfo: Store["userInfo"]) {
      this.userInfo = userInfo;
      setUserInfo(userInfo);
    },
    /** 存储角色 */
    SET_ROLES(roles: Array<string>) {
      this.roles = roles;
      setRoles(roles);
    },
    /** 登入 */
    async login(body: Store["loginParams"]) {
      const data = await login(body);
      if (data) {
        this.SET_USERINFO(data);
        // 保存 token
        this.SET_TOKEN(data.token);
        this.SET_ROLES(data.roles);
      }
    },
    /** 重置状态 */
    resetState() {
      this.token = "";
      this.roles = [];
      this.userInfo = null;
      clearAuthCache();
    },
    /** 前端登出（不调用接口） */
    logout() {
      this.resetState();
      useMultiTagsStoreHook().handleTags("equal", [...routerArrays]);
      resetRouter();
      router.push("/login");
    }
  }
});

export function useUserStoreHook() {
  return useUserStore(store);
}
