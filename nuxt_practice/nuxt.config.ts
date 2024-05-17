// https://nuxt.com/docs/api/configuration/nuxt-config
import { sort } from "vite-plugin-utils/sort-plugin";
import dynamicImport from "vite-plugin-dynamic-import";

export default defineNuxtConfig({
  app: {
    head: {
      charset: "UTF-8",
      viewport:
        "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no",
    },
  },

  devtools: { enabled: true },

  $production: {
    routeRules: {
      "/**": { isr: true },
    },
  },

  $development: {
    //
  },

  css: ["@/styles/styles.less"],

  vite: {
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `@import "@/styles/variables.less"; @import "@/styles/mixins.less";`,
        },
      },
    },
    plugins: [
      sort({
        plugin: dynamicImport(),
        names: ["vite:vue", "vite:vue-jsx"],
        enforce: "post",
      }),
    ],
  },

  modules: ["nuxt-svgo"],
  svgo: {
    autoImportPath: "./assets/svg-icon/",
    defaultImport: "component",
  },
});
