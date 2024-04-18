<template>
  <div class="home-card">
    <div class="home-card__fav">
      <SvgStar
        class="home-card__favorite"
        :class="{'home-card__favorite--active': mainStore.favorites[id]}"
        @click="mainStore.setFavorite(id)"
      />
    </div>

    <h4
      class="home-card__title"
      @click="$router.push({name: 'card', params: {id: id} })"
    >
      {{ title }}
    </h4>

    <p class="home-card__description">{{ description }}</p>
  </div>
</template>

<script>
import SvgStar from "@/components/svg/SvgStar";
import { mapStores } from "pinia";
import { useMainStore } from "@/store";

export default {
  name: "HomeCard",
  components: {
    SvgStar,
  },
  props: {
    id: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    }
  },
  computed: {
    ...mapStores(useMainStore)
  }
}
</script>

<style lang="less">
.home-card {
  margin-bottom: 15px;
  padding: 20px 15px;
  box-shadow: 0 0 5px 1px @brown;
  background-color: @white;
  &__title {
    margin-bottom: 10px;
    color: @light_orange;
    font-size: 20px;
    cursor: pointer;
  }

  &__description {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  }

  &__fav {
    width: 100%;
    display: flex;
    justify-content: end;
    margin-bottom: -17px;
  }

  &__favorite {
    position: relative;

    width: 15px;
    height: 15px;
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover {
      @media (hover: hover) {
        color: @light_green;
      };
    }

    &--active {
      color: @light_green;
    }
  }
}
</style>