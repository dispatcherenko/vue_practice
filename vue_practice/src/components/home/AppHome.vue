<template>
    <body>
    <main class="home">
      <div class="home__container">
        <div class="home__list">
          <HomeCard class="home__list-item" />
          <HomeCard class="home__list-item" />
          <HomeCard class="home__list-item" />
        </div>
      </div>
    </main>
  </body>
</template>

<script>
import HomeCard from "@/components/home/HomeCard.vue";
export default {
  components: {
    HomeCard
  }
}
</script>

<style lang="less">
.home {
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
