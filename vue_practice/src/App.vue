<template>
  <div class="app">
    <PageHeader class="app__header" />
    <router-view class="app__layout" />
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import newsList from "@/json/news.json";
import { useMainStore } from "@/store";
import { mapStores } from "pinia";
import { onMounted } from 'vue';

export default {
  components: {
    PageHeader
  },
  computed: {
    ...mapStores(useMainStore)
  },  
  created() {
    this.mainStore.newsList = newsList; 
  },
  setup() {
    onMounted(() => {
      const favoritesFromCookies = this.$cookies.get('favorites');
      if (favoritesFromCookies) {
        this.mainStore.favorites = JSON.parse(favoritesFromCookies);
      }
    });
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

@keyframes flicker {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
