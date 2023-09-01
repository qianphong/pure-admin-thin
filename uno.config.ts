import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno
} from "unocss";

export default defineConfig({
  theme: {
    colors: {
      primary: "var(--el-color-primary)",
      text_color_primary: "var(--el-text-color-primary)",
      text_color_regular: "var(--el-text-color-regular)",
      bg_color: "var(--el-bg-color)"
    }
  },
  rules: [
    [
      /bg-img-(\d)/,
      ([_, name]) => {
        return {
          "background-image": `url(../img/bg-${name}.png)`,
          "background-repeat": "no-repeat"
        };
      }
    ]
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: { display: "inline-block" }
    })
  ],
  shortcuts: [
    ["flex-c", "flex justify-center items-center"],
    ["flex-ac", "flex justify-around items-center"],
    ["flex-bc", "flex justify-between items-center"],
    ["navbar-bg-hover", "dark:text-white dark:hover:!bg-[#242424]"]
  ]
});
