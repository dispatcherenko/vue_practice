<template>
  <PageHeader class="app__header" @setActiveTab="(value) => setActiveTab(value)"/>
  <AppHome v-if="activeTab == 'home'" class="app__home" />
  <AppRules v-if="activeTab == 'rules'" class="app__rules" />
  <AppContacts v-if="activeTab == 'contacts'" class="app__contacts" />
</template>

<script>
import PageHeader from "@/components/PageHeader";
import AppHome from "@/components/home/AppHome.vue";
import AppRules from "@/components/AppRules.vue";
import AppContacts from "@/components/AppContacts.vue";
export default {
 name: 'App',
 components: {
  PageHeader,
  AppHome,
  AppRules,
  AppContacts
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
