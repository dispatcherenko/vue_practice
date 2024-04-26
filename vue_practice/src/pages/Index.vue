<template>
  <ListArticles :listType="'news'"/>
</template>

<script>
  import ListArticles from "@/components/ListArticles";

  export default {
    name: "AppHome",
    components: {
      ListArticles
    }
  }
</script>

