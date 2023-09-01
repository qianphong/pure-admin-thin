import { encryptByMd5 } from "@qianphong/utils";

export function encryptPwd(password?: string) {
  if (!password) return;
  return encryptByMd5(password);
}
