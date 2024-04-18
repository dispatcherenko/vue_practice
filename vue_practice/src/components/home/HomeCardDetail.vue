<template>
    <div class="home-card-detail">
        <div class="home-card-detail__container">
            <h2 class="home-card-detail__title">{{ listItem.title }}</h2>

            <div class="home-card-detail__author">{{ listItem.author }}</div>

            <div class="home-card-detail__sections">
                <div class="home-card-detail__sections-item" v-for="item in listItem.sections" :key="item">
                {{ item }}
                </div>
            </div>  

            <p class="home-card-detail__text">
                {{ listItem.description }}
            </p>
        </div>
    </div>
</template>

<script>
import { mapStores } from "pinia";
import { useMainStore } from "@/store";

export default {
  name: "HomeCardDetail",
  computed: {
    ...mapStores(useMainStore),
    listItem() {
      return this.mainStore.listItem(this.$route.params.id); 
    }
  }
}
</script>

<style lang="less">
    .home-card-detail {
        &__container {
            .container();
            margin-top: 45px;
        }

        &__title {
            margin-bottom: 10px;
            color: @light_orange;
        }

        &__author {
            margin-bottom: 10px;
            text-decoration: underline;
            font-size: 14px;
        }

        &__sections {
            margin-bottom: 15px;
            display: flex;
        }

        &__sections-item {
            margin-right: 10px;
            padding: 5px 10px;
            background-color: @white;
            border: 1px solid @light_orange;
            border-radius: 5px;
        }

        &__text {
                line-height: 24px;
                font-size: 18px;

        &::first-letter {
                color: @light_orange
            }
        }
    }
</style>