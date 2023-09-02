import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno
} from "unocss";
import type { IconsOptions } from "unocss/preset-icons";
import { iconToSVG, iconToHTML } from "@iconify/utils";

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
      extraProperties: { display: "inline-block" },
      collections: getIconCollections(["ep", "ri"])
    })
  ],
  shortcuts: [
    ["flex-c", "flex justify-center items-center"],
    ["flex-ac", "flex justify-around items-center"],
    ["flex-bc", "flex justify-between items-center"],
    ["navbar-bg-hover", "dark:text-white dark:hover:!bg-[#242424]"]
  ]
});

function getIconCollections(collections: string[]) {
  const result: IconsOptions["collections"] = {};
  collections.forEach(collection => {
    result[collection] = name =>
      import(`@iconify-icons/${collection}/${name}`).then(res => {
        const renderData = iconToSVG(res);
        return iconToHTML(renderData.body, renderData.attributes);
      });
  });
  return result;
}
