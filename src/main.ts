import { createApp, Directive } from "vue";
import App from "@/App.vue";
import router from "@/router";
import { setupStore } from "@/store";
import { getServerConfig } from "@/config";
import { MotionPlugin } from "@vueuse/motion";
import { injectResponsiveStorage } from "@/utils/responsive";
import { useElementPlus } from "@/plugins/element-plus";

// import Table from "@pureadmin/table";
// import PureDescriptions from "@pureadmin/descriptions";

// 引入重置样式
import "./style/reset.scss";
// 导入公共样式
import "./style/index.scss";
// 引入 UnoCSS
import "uno.css";
// import "element-plus/dist/index.css";

const app = createApp(App);

// 自定义指令
import * as directives from "@/directives";
Object.keys(directives).forEach(key => {
  app.directive(key, (directives as { [key: string]: Directive })[key]);
});

// 全局注册`@iconify/vue`图标库
import {
  IconifyIconOffline,
  IconifyIconOnline,
  FontIcon
} from "./components/ReIcon";
app.component("IconifyIconOffline", IconifyIconOffline);
app.component("IconifyIconOnline", IconifyIconOnline);
app.component("FontIcon", FontIcon);

// 全局注册按钮级别权限组件
import { Auth } from "@/components/ReAuth";
app.component("Auth", Auth);

getServerConfig(app).then(async config => {
  app.use(router);
  await router.isReady();
  injectResponsiveStorage(app, config);
  setupStore(app);
  app.use(MotionPlugin);
  app.use(useElementPlus);
  // .use(Table);
  // .use(PureDescriptions);
  app.mount("#app");
});
