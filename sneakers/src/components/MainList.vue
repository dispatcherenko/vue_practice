<template>
  <div class="main-list">
    <div class="main-list__header">
      <h1 class="main-list__title">Все кроссовки</h1>
      <div class="main-list__search-wrap">
        <img src="/search.svg" alt="search" class="main-list__glass" />
        <input type="text" name="search" class="main-list__search" />
      </div>
    </div>
    <div class="main-list__list">
      <ProductCard
        imageUrl="/sneakers/sneakers-1.jpg"
        title="Мужские Кроссовки Nike Blazer Mid Suede"
        :price="12999"
        :onClickFavorite="addToFavorite"
        :onClickAdd="addToCart"
      />
      <ProductCard
        imageUrl="/sneakers/sneakers-2.jpg"
        title="Мужские Кроссовки Nike Air Max 270"
        :price="12999"
      />
      <ProductCard
        imageUrl="/sneakers/sneakers-3.jpg"
        title="Мужские Кроссовки Nike Blazer Mid Suede"
        :price="8499"
      />
      <ProductCard
        imageUrl="/sneakers/sneakers-4.jpg"
        title="Кроссовки Puma X Aka Boku Future Rider"
        :price="8999"
      />
    </div>
  </div>
</template>

<script setup>
import ProductCard from './ProductCard.vue'

function addToFavorite() {
  // if (!isFavorite) {
  alert('Добавлено в избранное')
  // } else {
  //   alert('Удалено из избранное')
  // }
}

function addToCart() {
  alert('Добавлено в корзину')
}
</script>

<style lang="less" scoped>
.main-list {
  &__header {
    display: flex;
    justify-content: space-between;
  }

  &__title {
    font-family: 'Inter';
    font-size: 32px;
    font-weight: 700;
    line-height: 38.73px;
    text-align: left;
  }

  &__search-wrap {
    position: relative;
  }

  &__search {
    width: 250px;
    border-radius: 10px;
    border: 1px solid #f3f3f3;
    padding: 15px;
    text-indent: 2em;

    transition: border-color 1ms;

    &:focus {
      border-color: #9b9b9b;
    }
  }

  &__glass {
    position: absolute;
    top: 1em;
    left: 1em;
    margin: auto auto auto 0;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 40px;
    gap: 35px;
  }
}
</style>
