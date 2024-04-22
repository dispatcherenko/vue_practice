<template>
      <div class="favs">
        <div class="favs__container">
          <div class="favs__list">
            <HomeCard
              class="favs__list-item"
              v-for="(item) in favoritesList"
              :key="item.id"
              :title="item.title"
              :description="item.description"
              :id="item.id"
            />
          </div>
        </div>
      </div>
</template>
  
<script>
  import HomeCard from "@/components/home/HomeCard";
  import { useMainStore } from "@/store";
  import { mapStores } from "pinia";
  
  export default {
    name: "AppHome",
    components: {
      HomeCard
    },
    computed: {
      ...mapStores(useMainStore),
      favoritesList() {
        const list = this.mainStore.favorites;
        console.log('favoritesList:', list); // Отладочный вывод
        return list;
      }
    }
  }
</script>

<style lang="less">
.favs {
  &__container {
    .container();
  }
  &__list {
    margin-top: 45px;
  }
  &__list-item {
    margin-bottom: 15px;
    padding: 20px 15px;
    box-shadow: 0 0 5px 1px @brown;
    background-color: @white;
  }
  &__item-title {
    margin-bottom: 10px;
    color: @light_orange;
    font-size: 20px;
  }
}
</style>