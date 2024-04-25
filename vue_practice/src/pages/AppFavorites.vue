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
      favoritesList() {
        return this.mainStore.favoritesList;
      }
    }
  }
</script>

<style lang="less">

</style>