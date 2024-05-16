<template>
  <div class="main">
    <div class="main__container">
      <PromoSlider class="main__slider" />
<<<<<<< Updated upstream
      <ProductList
        class="main__list"
        :items="items"
        :onChangeSort="onChangeSort"
        :onChangeSearch="onChangeSearch"
=======
      <div class="main__header">
        <h1 class="main__title">Все кроссовки</h1>
        <select @change="onChangeSort" class="main__filter">
          <option value="price">По возрастанию цены</option>
          <option value="-price">По убыванию цены</option>
          <option value="title">По назавнию</option>
        </select>
        <div class="main__search-wrap">
          <img src="/search.svg" alt="search" class="main__glass" />
          <input
            @input="onChangeSearch"
            type="text"
            name="search"
            class="main__search"
            placeholder="Поиск..."
          />
        </div>
      </div>
      <ProductList
        class="main__list"
        :items="items"
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======

  &__header {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  &__title {
    font-family: 'Inter';
    font-size: 32px;
    font-weight: 700;
    line-height: 38.73px;
    text-align: left;
    flex: 1;
  }

  &__filter {
    width: 250px;
    border-radius: 10px;
    border: 1px solid #f3f3f3;
    padding: 15px;
    box-sizing: border-box;
  }

  &__search-wrap {
    position: relative;
  }

  &__search {
    width: 250px;
    border-radius: 10px;
    border: 1px solid #f3f3f3;
    padding: 15px;
    box-sizing: border-box;
    text-indent: 2em;

    transition: border 1ms;

    &:focus {
      border: 1px solid #9b9b9b;
    }
  }

  &__glass {
    position: absolute;
    top: 1em;
    left: 1em;
    margin: auto auto auto 0;
  }
>>>>>>> Stashed changes
}
</style>
