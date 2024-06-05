<template>
  <main class="favorites">
    <div class="favorites__container">
      <ProductList
        class="main__list"
        :items="items"
        :onChangeSort="onChangeSort"
        :onChangeSearch="onChangeSearch"
        @addToFavorite="addToFavorite"
        @cartAddRemove="cartAddRemove"
      />
    </div>
  </main>
</template>

<script>
export default {}
</script>

<style></style>
