<template>
  <ListArticles/>
</template>

<script>
import ListArticles from "@/components/ListArticles";
import { useMainStore } from "@/store";
import { mapStores } from "pinia";

export default {
  name: "AppHome",
  components: {
    ListArticles
  },
  computed: {
    ...mapStores(useMainStore),
    newsList() {
      return this.mainStore.newsList;
    }
  },
  actions: {
    setFavourite(id) {
      this.newsList.forEach((item) => {
        if(item?.id == id) item.isFavourite = !item.isFavourite
      })
    }
  },

}
</script>

<style lang="less">

</style>
