import { AesEncryption, encryptByMd5 } from "@qianphong/utils";

const aesEncryption = new AesEncryption({
  key: encryptByMd5("AESKEY").toUpperCase()
});
export function encryptPwd(password?: string) {
  if (!password) return;
  return aesEncryption.encrypt(password);
}
