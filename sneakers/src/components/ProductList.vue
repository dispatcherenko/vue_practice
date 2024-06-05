<template>
  <div class="main-list">
    <div class="main-list__header">
      <h1 class="main-list__title">Все кроссовки</h1>
      <select @change="onChangeSort" class="main-list__filter">
        <option value="price">По возрастанию цены</option>
        <option value="-price">По убыванию цены</option>
        <option value="title">По назавнию</option>
      </select>
      <div class="main-list__search-wrap">
        <img src="/search.svg" alt="search" class="main-list__glass" />
        <input
          @input="onChangeSearch"
          type="text"
          name="search"
          class="main-list__search"
          placeholder="Поиск..."
        />
      </div>
    </div>
    <div class="main-list__list" v-auto-animate>
      <ProductCard
        v-for="item in items"
        :id="item.id"
        :imageUrl="item.imageUrl"
        :title="item.title"
        :price="item.price"
        :isFavorite="item.isFavorite"
        :isAdded="item.isAdded"
        :onClickFavorite="() => emit('addToFavorite', item)"
        :cartAddRemove="() => emit('cartAddRemove', item)"
        :key="item.id"
      />
    </div>
  </div>
</template>

<script setup>
import ProductCard from './ProductCard.vue'

defineProps({
  items: Array,
  onChangeSort: Function,
  onChangeSearch: Function
})

const emit = defineEmits(['addToFavorite', 'cartAddRemove'])
</script>

<style lang="less" scoped>
.main-list {
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

  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    margin-top: 40px;
    gap: 35px;
  }
}
</style>
