<template>
  <PageHeader/>
  <AppHome/>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import AppHome from "@/components/home/AppHome.vue";
export default {
 name: 'App',
 components: {
  PageHeader,
  AppHome
 }
}
</script>

<style lang="less"> 

* {
 margin: 0;
 padding: 0;
}
body,
html {
 font-size: 16px;
 font-family: @font2;
}
body {
 background-color: @light_gray;
}
button {
 background-color: transparent;
 border: none;
 cursor: pointer;
}

</style>
