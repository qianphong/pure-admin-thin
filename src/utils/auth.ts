import { WebStorage } from "@qianphong/utils";

// token key
export const TOKEN_KEY = "TOKEN__";
// user info key
export const USER_INFO_KEY = "USER__INFO__";
// role info key
export const ROLES_KEY = "ROLES__KEY__";

interface BasicStore {
  [TOKEN_KEY]: string | number | null | undefined;
  [USER_INFO_KEY]: Record<string, any>;
  [ROLES_KEY]: string[];
}

type BasicKeys = keyof BasicStore;

const storage = new WebStorage({
  prefixKey: "WEB__TEMPLATE__",
  // encryption: import.meta.env.PROD ? { key: '123' } : undefined,
  encryption: {
    key: "101010101010"
  }
});

export function getAuthCache<T>(key: BasicKeys) {
  return storage.get(key) as T;
}

export function setAuthCache<K extends BasicKeys>(
  key: K,
  value: BasicStore[K]
) {
  return storage.set(key, value);
}

export function clearAuthCache() {
  storage.remove(TOKEN_KEY);
  storage.remove(USER_INFO_KEY);
  storage.remove(ROLES_KEY);
}

export function getToken() {
  return getAuthCache<string>(TOKEN_KEY);
}
export function setToken(token: string) {
  setAuthCache(TOKEN_KEY, token);
}

export function getUserInfo() {
  return getAuthCache<Store["userInfo"] | null>(USER_INFO_KEY);
}

export function setUserInfo(userInfo: Store["userInfo"]) {
  setAuthCache(USER_INFO_KEY, userInfo);
}

export function getRoles() {
  return getAuthCache<string[]>(ROLES_KEY);
}
export function setRoles(roles: string[]) {
  setAuthCache(ROLES_KEY, roles);
}
