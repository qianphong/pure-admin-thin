import { MyHttp } from "@qianphong/utils";
import { useUserStoreHook } from "@/store/modules/user";
import { getToken } from "@/utils/auth";
import { message } from "@/utils/message";

const DURATION = 1000;

// 显示错误信息
function showMessage(msg: string) {
  message(msg, { type: "error", duration: DURATION });
}

// 初始化
MyHttp.setup({
  // 请求Header添加自定义字段
  requestInterceptor(config) {
    config.headers["Custom"] = getToken();
    return config;
  },
  // 处理请求错误
  handleError(error, cb) {
    if (error.code === 401) {
      // 401 未授权
      useUserStoreHook().logout();
    }
    showMessage(error.message);
    setTimeout(() => {
      cb?.();
    }, DURATION);
  }
});

// 创建实例
const http = new MyHttp({ baseURL: "/api", timeout: 10000 });

// 请求工具
export function request<T>(url: string, config?: any) {
  return new Promise<T>((resolve, reject) => {
    http.axiosInstance
      .request({
        url,
        ...config
      })
      .then((response: any) => {
        // 处理业务错误
        if (response?.success) {
          resolve(response);
        } else {
          showMessage(response.message);
          reject(response);
        }
      })
      .catch(reject);
  });
}
