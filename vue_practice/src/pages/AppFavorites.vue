<template>
  <ListArticles :listType="'favorites'"/>
</template>
  
<script>
  import ListArticles from "@/components/ListArticles";
  
  export default {
    name: "AppHome",
    components: {
      ListArticles
      HomeCard
    },
  }
</script>