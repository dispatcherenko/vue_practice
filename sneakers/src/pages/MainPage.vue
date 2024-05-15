<template>
  <div class="main">
    <div class="main__container">
      <PromoSlider class="main__slider" />
      <ProductList
        class="main__list"
        :items="items"
        :onChangeSort="onChangeSort"
        :onChangeSearch="onChangeSearch"
        @addToFavorite="addToFavorite"
        @cartAddRemove="cartAddRemove"
      />
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

import PromoSlider from '../components/PromoSlider.vue'
import ProductList from '../components/ProductList.vue'

const { cartAddRemove } = inject('manageCart')
const { addToFavorite } = inject('addToFavorite')
const { onChangeSort, onChangeSearch } = inject('filters')
const { items } = inject('json')
</script>

<style lang="less" scoped>
.main {
  display: flex;
  flex-direction: column;
  background-color: #ffffffff;

  &__container {
    margin: 45px 60px;
  }

  &__slider {
    margin-bottom: 39px;
  }
}
</style>
