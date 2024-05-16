// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  head: {
    charset: "UTF-8",
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
  },

  modules: ["nuxt-svgo"],
  svgo: {
    autoImportPath: "./assets/svg-icon/",
    defaultImport: "component",
  },
});
